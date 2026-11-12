"use client";
import { useCallback, useEffect, useState } from "react";

type Consent = { necessary: true; analytics: boolean; marketing: boolean };
type Fbq = ((...args: unknown[]) => void) & { queue?: unknown[][]; callMethod?: (...args: unknown[]) => void; loaded?: boolean; version?: string; push?: (...args: unknown[]) => void };
declare global { interface Window { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void; fbq?: Fbq; _fbq?: Fbq } }
const KEY = "plabcoach-cookie-consent-v1";

function applyTracking(consent: Consent) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const googleId = gaId || adsId;
  if ((consent.analytics || consent.marketing) && googleId) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function (...args: unknown[]) { window.dataLayer?.push(args); };
    window.gtag("consent", "default", { ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied", analytics_storage: "denied", wait_for_update: 500 });
    window.gtag("consent", "update", { analytics_storage: consent.analytics ? "granted" : "denied", ad_storage: consent.marketing ? "granted" : "denied", ad_user_data: consent.marketing ? "granted" : "denied", ad_personalization: consent.marketing ? "granted" : "denied" });
    if (!document.querySelector('script[data-plabcoach-google-tag="true"]')) {
      const script = document.createElement("script"); script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(googleId)}`;
      script.dataset.plabcoachGoogleTag = "true"; document.head.appendChild(script);
    }
    window.gtag("js", new Date());
    if (consent.analytics && gaId) window.gtag("config", gaId);
    if (consent.marketing && adsId) window.gtag("config", adsId);
  } else if (window.gtag) {
    window.gtag("consent", "update", { analytics_storage: "denied", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
  }

  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  if (pixelId && consent.marketing) {
    if (!window.fbq) {
      const fbq = ((...args: unknown[]) => { if (fbq.callMethod) fbq.callMethod(...args); else fbq.queue?.push(args); }) as Fbq;
      fbq.queue = []; fbq.loaded = true; fbq.version = "2.0"; fbq.push = (...args: unknown[]) => fbq.queue?.push(args);
      window.fbq = fbq; window._fbq = fbq;
      const script = document.createElement("script"); script.async = true; script.src = "https://connect.facebook.net/en_US/fbevents.js"; document.head.appendChild(script);
    }
    window.fbq("consent", "grant"); window.fbq("init", pixelId); window.fbq("track", "PageView");
  } else if (window.fbq) window.fbq("consent", "revoke");
}

export default function CookieConsent() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [ready, setReady] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  useEffect(() => {
    try { const raw = localStorage.getItem(KEY); if (raw) { const value = JSON.parse(raw) as Partial<Consent>; const saved = { necessary: true as const, analytics: value.analytics === true, marketing: value.marketing === true }; setConsent(saved); setAnalytics(saved.analytics); setMarketing(saved.marketing); } }
    catch { localStorage.removeItem(KEY); }
    setReady(true);
  }, []);
  useEffect(() => { if (consent) applyTracking(consent); }, [consent]);
  const openSettings = useCallback(() => { setAnalytics(consent?.analytics ?? false); setMarketing(consent?.marketing ?? false); setSettingsOpen(true); }, [consent]);
  useEffect(() => { const open = () => openSettings(); window.addEventListener("plabcoach:open-cookie-settings", open); return () => window.removeEventListener("plabcoach:open-cookie-settings", open); }, [openSettings]);
  const save = (value: Consent) => { localStorage.setItem(KEY, JSON.stringify(value)); setConsent(value); setSettingsOpen(false); };
  if (!ready) return null;
  if (consent && !settingsOpen) return null;
  return <div className="fixed inset-x-0 bottom-0 z-[200] border-t border-[#d9e1ed] bg-white px-4 py-5 shadow-[0_-12px_40px_rgba(15,35,70,0.16)] sm:px-6" role="dialog" aria-modal="false" aria-labelledby="cookie-consent-title">
    <div className="mx-auto max-w-[1180px]">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-[700px]">
          <h2 id="cookie-consent-title" className="text-base font-bold text-[#142744]">Your cookie choices</h2>
          <p className="mt-2 text-sm leading-6 text-[#4d5a6d]">We use essential cookies to make this site work. With your permission, we’d also like to use analytics and marketing cookies to understand how people use the site and to measure our adverts. You can change your choice at any time from “Cookie settings” in the footer.</p>
          {settingsOpen && <div className="mt-4 grid gap-3 rounded-xl border border-[#e1e7f0] bg-[#f8faff] p-4 sm:grid-cols-2">
            <div><p className="font-semibold text-[#142744]">Essential cookies</p><p className="mt-1 text-xs leading-5 text-[#637086]">Always active. These are needed for the website to work.</p></div>
            <label className="flex items-center justify-between gap-3 text-sm font-semibold text-[#142744]">Analytics cookies<input type="checkbox" checked={analytics} onChange={e => setAnalytics(e.target.checked)} /></label>
            <label className="flex items-center justify-between gap-3 text-sm font-semibold text-[#142744]">Marketing cookies<input type="checkbox" checked={marketing} onChange={e => setMarketing(e.target.checked)} /></label>
          </div>}
        </div>
        <div className="flex flex-wrap gap-2 lg:max-w-[440px] lg:justify-end">
          <button type="button" onClick={() => save({ necessary: true, analytics: false, marketing: false })} className="min-h-11 rounded-lg border border-[#174f91] px-4 py-2 text-sm font-semibold text-[#174f91] hover:bg-[#f0f6ff]">Reject non-essential</button>
          {!settingsOpen ? <button type="button" onClick={openSettings} className="min-h-11 rounded-lg border border-[#174f91] px-4 py-2 text-sm font-semibold text-[#174f91] hover:bg-[#f0f6ff]">Manage settings</button> : <button type="button" onClick={() => save({ necessary: true, analytics, marketing })} className="min-h-11 rounded-lg border border-[#174f91] px-4 py-2 text-sm font-semibold text-[#174f91] hover:bg-[#f0f6ff]">Save my choices</button>}
          <button type="button" onClick={() => save({ necessary: true, analytics: true, marketing: true })} className="min-h-11 rounded-lg bg-[#174f91] px-5 py-2 text-sm font-semibold text-white hover:bg-[#103d73]">Accept all</button>
        </div>
      </div>
    </div>
  </div>;
}
