import { useEffect } from "react";

interface WebsiteSchemaProps {
  url?: string;
  name?: string;
  description?: string;
}

export default function WebsiteSchema({ 
  url = "https://chesapeakegolfcarts.com",
  name = "Chesapeake Golf Carts",
  description = "Virginia's premier DENAGO & EVOLUTION electric golf cart dealership serving Chesapeake and Hampton Roads"
}: WebsiteSchemaProps) {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": name,
      "description": description,
      "url": url,
      "publisher": {
        "@type": "Organization",
        "name": "Chesapeake Golf Carts",
        "logo": {
          "@type": "ImageObject",
          "url": "https://chesapeakegolfcarts.com/attached_assets/Chesapeake%20Golf%20Carts_1764173360595.png",
          "width": 512,
          "height": 512
        }
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${url}/inventory?search={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      }
    };
    
    const existingScript = document.querySelector('script[type="application/ld+json"][data-website]');
    if (existingScript) {
      existingScript.textContent = JSON.stringify(structuredData);
    } else {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-website", "true");
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
    
    return () => {
      const script = document.querySelector('script[type="application/ld+json"][data-website]');
      if (script) {
        script.remove();
      }
    };
  }, [url, name, description]);

  return null;
}
