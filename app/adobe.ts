// Adobe Analytics through the Adobe Experience Platform Web SDK (alloy), loaded in app/layout.tsx.
type Alloy = (command: string, options?: Record<string, unknown>) => Promise<unknown>;

function alloy(): Alloy | undefined {
  return (globalThis as { alloy?: Alloy }).alloy;
}

export function pageView(name: string) {
  void alloy()?.("sendEvent", {
    xdm: { eventType: "web.webpagedetails.pageViews", web: { webPageDetails: { name, URL: typeof location !== "undefined" ? location.href : "" } } },
  });
}

export function trackAction(name: string, data: Record<string, unknown> = {}) {
  void alloy()?.("sendEvent", {
    xdm: { eventType: "web.webinteraction.linkClicks", web: { webInteraction: { name, type: "other" } } },
    data: { __adobe: { analytics: { linkTrackVars: "events,eVar1", events: "event1", eVar1: name } }, ...data },
  });
}

export function identify(email: string) {
  void alloy()?.("setConsent", { consent: [{ standard: "Adobe", version: "1.0", value: { general: "in" } }] });
  void alloy()?.("sendEvent", { xdm: { identityMap: { Email: [{ id: email, authenticatedState: "authenticated", primary: true }] } } });
}
