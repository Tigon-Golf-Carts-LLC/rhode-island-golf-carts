import { useEffect } from "react";

interface NavigationItem {
  name: string;
  url: string;
  description?: string;
}

interface SiteNavigationSchemaProps {
  navigationItems?: NavigationItem[];
}

export default function SiteNavigationSchema({ 
  navigationItems = [
    { name: "Home", url: "https://chesapeakegolfcarts.com/", description: "Chesapeake Golf Carts homepage" },
    { name: "Inventory", url: "https://chesapeakegolfcarts.com/inventory", description: "Browse our golf cart inventory" },
    { name: "Rentals", url: "https://chesapeakegolfcarts.com/rentals", description: "Golf cart rental services" },
    { name: "Services", url: "https://chesapeakegolfcarts.com/services", description: "Golf cart maintenance and repair services" },
    { name: "Showroom", url: "https://chesapeakegolfcarts.com/showroom", description: "Visit our Chesapeake showroom" },
    { name: "About", url: "https://chesapeakegolfcarts.com/about", description: "About Chesapeake Golf Carts" },
    { name: "Contact", url: "https://chesapeakegolfcarts.com/contact", description: "Contact information and location" }
  ]
}: SiteNavigationSchemaProps) {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      "name": "Main Navigation",
      "about": {
        "@type": "WebSite",
        "name": "Chesapeake Golf Carts",
        "url": "https://chesapeakegolfcarts.com"
      },
      "hasPart": navigationItems.map((item, index) => ({
        "@type": "WebPageElement",
        "name": item.name,
        "description": item.description,
        "url": item.url,
        "position": index + 1
      }))
    };
    
    const existingScript = document.querySelector('script[type="application/ld+json"][data-navigation]');
    if (existingScript) {
      existingScript.textContent = JSON.stringify(structuredData);
    } else {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-navigation", "true");
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
    
    return () => {
      const script = document.querySelector('script[type="application/ld+json"][data-navigation]');
      if (script) {
        script.remove();
      }
    };
  }, [navigationItems]);

  return null;
}
