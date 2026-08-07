/**
 * useReveal.js — Scroll reveal animation hook
 */

export function useReveal() {
  React.useLayoutEffect(() => {
    let cancelled = false;
    let io = null;

    const setup = () => {
      if (cancelled) return;
      const els = document.querySelectorAll('.reveal:not(.is-visible)');
      if (!('IntersectionObserver' in window)) {
        els.forEach(el => el.classList.add('is-visible'));
        return;
      }
      io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
      els.forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) {
          el.classList.add('is-visible');
        } else {
          io.observe(el);
        }
      });
    };

    const raf1 = requestAnimationFrame(() => requestAnimationFrame(setup));

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf1);
      if (io) io.disconnect();
    };
  }, []);
}
