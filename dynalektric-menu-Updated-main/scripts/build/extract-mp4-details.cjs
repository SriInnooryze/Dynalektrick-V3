const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '../../public/videos/Dynalektric_Hero.mp4');
const stats = fs.statSync(file);
const fd = fs.openSync(file, 'r');
const buf = Buffer.alloc(Math.min(stats.size, 5 * 1024 * 1024)); // read first 5MB
fs.readSync(fd, buf, 0, buf.length, 0);
fs.closeSync(fd);

function findAtoms(buffer, offset = 0, length = buffer.length) {
  const atoms = [];
  let pos = offset;
  while (pos + 8 <= offset + length) {
    let size = buffer.readUInt32BE(pos);
    const name = buffer.toString('ascii', pos + 4, pos + 8);
    if (size === 1) {
      size = Number(buffer.readBigUInt64BE(pos + 8));
    }
    if (size <= 0) break;
    atoms.push({ name, pos, size });
    pos += size;
  }
  return atoms;
}

const report = [];
report.push(`File: Dynalektric_Hero.mp4`);
report.push(`Size: ${stats.size} bytes (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);

// Search moov
let moovPos = buf.indexOf(Buffer.from('moov'));
if (moovPos > 4) {
  moovPos -= 4;
  report.push(`Found moov atom at offset ${moovPos}`);
  
  // Find mvhd
  let mvhdPos = buf.indexOf(Buffer.from('mvhd'), moovPos);
  if (mvhdPos > 4) {
    mvhdPos -= 4;
    let ver = buf[mvhdPos + 8];
    let timescale, duration;
    if (ver === 1) {
      timescale = buf.readUInt32BE(mvhdPos + 8 + 20);
      duration = Number(buf.readBigUInt64BE(mvhdPos + 8 + 24));
    } else {
      timescale = buf.readUInt32BE(mvhdPos + 8 + 12);
      duration = buf.readUInt32BE(mvhdPos + 8 + 16);
    }
    const durSec = duration / timescale;
    report.push(`Duration: ${durSec.toFixed(2)}s`);
    report.push(`Timescale: ${timescale}`);
    report.push(`Bitrate: ${Math.round((stats.size * 8) / durSec / 1000)} kbps`);
  }

  // Find traks
  let pos = moovPos;
  while ((pos = buf.indexOf(Buffer.from('trak'), pos + 1)) !== -1) {
    pos -= 4;
    let trakSub = buf.slice(pos, pos + 2000);
    let hdlr = trakSub.indexOf(Buffer.from('hdlr'));
    let type = 'unknown';
    if (hdlr !== -1) {
      type = trakSub.toString('ascii', hdlr + 12, hdlr + 16);
    }
    
    let stsd = trakSub.indexOf(Buffer.from('stsd'));
    let codec = 'unknown';
    if (stsd !== -1) {
      codec = trakSub.toString('ascii', stsd + 20, stsd + 24);
    }

    let tkhd = trakSub.indexOf(Buffer.from('tkhd'));
    let w = 0, h = 0;
    if (tkhd !== -1) {
      let ver = trakSub[tkhd + 8];
      let offW = ver === 1 ? tkhd + 8 + 84 : tkhd + 8 + 72;
      let offH = ver === 1 ? tkhd + 8 + 88 : tkhd + 8 + 76;
      if (offH + 4 <= trakSub.length) {
        w = trakSub.readUInt32BE(offW) >> 16;
        h = trakSub.readUInt32BE(offH) >> 16;
      }
    }
    report.push(`Track type=${type}, codec=${codec}, resolution=${w}x${h}`);
  }
}

fs.writeFileSync(path.join(__dirname, 'video-report.txt'), report.join('\n'), 'utf8');
console.log(report.join('\n'));
