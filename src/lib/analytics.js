// Google Analytics 4 — conversion event tracking for the SPA.
//
// The gtag.js script is loaded directly in index.html (CSP-safe approach).
// This module handles:
//   1. SPA page-view tracking on every route change (called from App.jsx)
//   2. Conversion click events: phone, WhatsApp, directions, email

let listenerAdded = false;

export function initAnalytics() {
  if (listenerAdded) return;
  listenerAdded = true;

  // One global listener catches every conversion-relevant click.
  document.addEventListener('click', (e) => {
    if (!window.gtag) return;
    const a = e.target.closest('a');
    if (!a || !a.href) return;
    const href = a.href;
    const page = window.location.pathname;

    if (href.startsWith('tel:')) {
      window.gtag('event', 'phone_call', { page_path: page });
    } else if (href.includes('wa.me')) {
      const event = page === '/book' ? 'booking_request' : 'whatsapp_click';
      window.gtag('event', event, { page_path: page });
    } else if (href.includes('maps.app.goo.gl') || href.includes('google.com/maps')) {
      window.gtag('event', 'get_directions', { page_path: page });
    } else if (href.startsWith('mailto:')) {
      window.gtag('event', 'email_click', { page_path: page });
    }
  });
}

export function trackPageView(path) {
  if (!window.gtag) return;
  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}
