/* app.jsx — Dynalektric SPA shell */

import { TWEAK_DEFAULTS, ACCENT_OPTIONS, PAGE_URLS, PAGE_META, SITE_ORIGIN } from './config/index.js';
import { useTweaks } from './hooks/useTweaks.js';
import Header from './components/layout/Header.jsx';
import TweaksPanel, { TweakSection, TweakColor, TweakRadio } from './components/layout/TweaksPanel.jsx';
import PageHome from './pages/Home/index.jsx';
import PageAbout from './pages/About/index.jsx';
import PageProducts from './pages/Products/index.jsx';
import PageIndustries from './pages/Industries/index.jsx';
import PageRnd from './pages/Innovation/index.jsx';
import PageExport from './pages/Export/index.jsx';
import PageContact from './pages/Contact/index.jsx';

const PAGE_ID = document.body.dataset.page || 'home';
const focusId = new URLSearchParams(window.location.search).get('focus') || null;

const navigate = (id, focus = null) => {
  const base = PAGE_URLS[id] || PAGE_URLS.home;
  window.location.href = focus ? base + '?focus=' + encodeURIComponent(focus) : base;
};

window.__navigate = navigate;

function App() {
  const tw = useTweaks(TWEAK_DEFAULTS);
  const t = tw.values;
  const setTweak = tw.set;

  React.useEffect(() => {
    const accent = ACCENT_OPTIONS[t.accent] || ACCENT_OPTIONS[0];
    const root = document.documentElement;
    if (typeof t.accent === 'number') {
      root.style.setProperty('--accent', accent[0]);
      root.style.setProperty('--accent-2', accent[1]);
    } else if (typeof t.accent === 'string') {
      root.style.setProperty('--accent', t.accent);
    }
    document.body.dataset.texture = t.texture || 'clean';
    document.body.dataset.density = t.density || 'comfortable';

    root.style.setProperty('--font-display', "'Montserrat', 'Helvetica Neue', Arial, sans-serif");
    root.style.setProperty('--font-body', "'Montserrat', 'Helvetica Neue', Arial, sans-serif");
    root.style.setProperty('--font-mono', "'Montserrat', 'Helvetica Neue', Arial, sans-serif");
  }, [t.accent, t.texture, t.density]);

  const renderPage = () => {
    const props = { navigate, focusId, tweaks: t };
    switch (PAGE_ID) {
      case 'home':       return <PageHome {...props} />;
      case 'about':      return <PageAbout {...props} />;
      case 'products':   return <PageProducts {...props} />;
      case 'industries': return <PageIndustries {...props} />;
      case 'rnd':        return <PageRnd {...props} />;
      case 'export':     return <PageExport {...props} />;
      case 'contact':    return <PageContact {...props} />;
      default:           return <PageHome {...props} />;
    }
  };

  return (
    <>
      <Header />
      {renderPage()}
      <DynaTweaksPanel t={t} setTweak={setTweak} />
    </>
  );
}

function DynaTweaksPanel({ t, setTweak }) {
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Accent palette">
        <TweakColor
          label="Accent pair"
          value={typeof t.accent === 'number' ? t.accent : 0}
          options={ACCENT_OPTIONS}
          onChange={v => setTweak('accent', v)}
        />
      </TweakSection>

      <TweakSection title="Background texture">
        <TweakRadio
          label="Surface"
          value={t.texture}
          options={[
            { label: 'Clean', value: 'clean' },
            { label: 'Grid', value: 'grid' },
            { label: 'Dots', value: 'dots' },
          ]}
          onChange={v => setTweak('texture', v)}
        />
      </TweakSection>

      <TweakSection title="Density">
        <TweakRadio
          label="Spacing"
          value={t.density}
          options={[
            { label: 'Comfortable', value: 'comfortable' },
            { label: 'Compact', value: 'compact' },
          ]}
          onChange={v => setTweak('density', v)}
        />
      </TweakSection>
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
