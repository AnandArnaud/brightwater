import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Brightwater — Project workspace",
  description: "Plan projects, track tasks, and ship on time.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
          background: "#0f1115",
          color: "#e8e9ec",
        }}
      >
        <Script id="adobe-alloy" strategy="afterInteractive">
          {`!function(n,o){o.forEach(function(o){n[o]||((n.__alloyNS=n.__alloyNS||[]).push(o),n[o]=function(){var u=arguments;return new Promise(function(i,l){n.setTimeout(function(){n[o].q.push([i,l,u])})})},n[o].q=[])})}(window,["alloy"]);
          alloy("configure", { datastreamId: "${process.env.NEXT_PUBLIC_ADOBE_DATASTREAM_ID ?? ""}", orgId: "${process.env.NEXT_PUBLIC_ADOBE_ORG_ID ?? ""}", defaultConsent: "pending" });`}
        </Script>
        <Script src="https://cdn1.adoberesources.net/alloy/2.24.0/alloy.min.js" strategy="afterInteractive" />
        {children}
      </body>
    </html>
  );
}
