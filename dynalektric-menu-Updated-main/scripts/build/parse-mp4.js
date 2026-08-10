const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '../../public/videos/Dynalektric_Hero.mp4');
const stats = fs.statSync(file);
const fd = fs.openSync(file, 'r');
const buffer = Buffer.alloc(1024 * 1024); // read first 1MB for moov atom
fs.readSync(fd, buffer, 0, buffer.length, 0);
fs.closeSync(fd);

function findAtom(buf, name, start = 0, end = buf.length) {
  let pos = start;
  while (pos + 8 <= end) {
    let size = buf.readUInt32BE(pos);
    const type = buf.toString('ascii', pos + 4, pos + 8);
    if (size === 1) { // 64-bit size
      size = Number(buf.readBigUInt64BE(pos + 8));
    }
    if (size === 0) size = end - pos;
    if (type === name) {
      return { pos, size, bodyPos: pos + 8, bodySize: size - 8 };
    }
    pos += size;
  }
  return null;
}

let result = {
  filePath: file,
  sizeBytes: stats.size,
  sizeMB: (stats.size / (1024 * 1024)).toFixed(2),
  hasAudio: false,
  codecs: [],
  tracks: []
};

// Search for moov atom
let moov = findAtom(buffer, 'moov');
if (moov) {
  // Read mvhd inside moov
  let mvhd = findAtom(buffer, 'mvhd', moov.bodyPos, moov.bodyPos + moov.bodySize);
  if (mvhd) {
    let version = buffer[mvhd.bodyPos];
    let timescale, duration;
    if (version === 1) {
      timescale = buffer.readUInt32BE(mvhd.bodyPos + 20);
      duration = Number(buffer.readBigUInt64BE(mvhd.bodyPos + 24));
    } else {
      timescale = buffer.readUInt32BE(mvhd.bodyPos + 12);
      duration = buffer.readUInt32BE(mvhd.bodyPos + 16);
    }
    result.durationSec = (duration / timescale).toFixed(2);
    result.bitrateKbps = Math.round((stats.size * 8) / (duration / timescale) / 1000);
  }

  // Find traks
  let pos = moov.bodyPos;
  let end = moov.bodyPos + moov.bodySize;
  while (pos + 8 <= end) {
    let size = buffer.readUInt32BE(pos);
    let type = buffer.toString('ascii', pos + 4, pos + 8);
    if (type === 'trak') {
      let trakEnd = pos + size;
      let tkhd = findAtom(buffer, 'tkhd', pos + 8, trakEnd);
      let mdia = findAtom(buffer, 'mdia', pos + 8, trakEnd);
      let trackInfo = {};
      if (tkhd) {
        let version = buffer[tkhd.bodyPos];
        let widthOffset = version === 1 ? tkhd.bodyPos + 84 : tkhd.bodyPos + 72;
        let heightOffset = version === 1 ? tkhd.bodyPos + 88 : tkhd.bodyPos + 76;
        trackInfo.width = buffer.readUInt32BE(widthOffset) >> 16;
        trackInfo.height = buffer.readUInt32BE(heightOffset) >> 16;
      }
      if (mdia) {
        let hdlr = findAtom(buffer, 'hdlr', mdia.bodyPos, mdia.bodyPos + mdia.bodySize);
        if (hdlr) {
          let subType = buffer.toString('ascii', hdlr.bodyPos + 8, hdlr.bodyPos + 12);
          trackInfo.handler = subType;
          if (subType === 'soun') result.hasAudio = true;
          if (subType === 'vide') result.isVideo = true;
        }
        let minf = findAtom(buffer, 'minf', mdia.bodyPos, mdia.bodyPos + mdia.bodySize);
        if (minf) {
          let stbl = findAtom(buffer, 'stbl', minf.bodyPos, minf.bodyPos + minf.bodySize);
          if (stbl) {
            let stsd = findAtom(buffer, 'stsd', stbl.bodyPos, stbl.bodyPos + stbl.bodySize);
            if (stsd && stsd.bodySize > 8) {
              let codec = buffer.toString('ascii', stsd.bodyPos + 12, stsd.bodyPos + 16);
              trackInfo.codec = codec;
              result.codecs.push(codec);
            }
          }
        }
      }
      result.tracks.push(trackInfo);
    }
    pos += size;
  }
}

fs.writeFileSync(path.join(__dirname, 'parsed-mp4.json'), JSON.stringify(result, null, 2), 'utf8');
console.log('[parse-mp4] Extracted metadata:', JSON.stringify(result, null, 2));
