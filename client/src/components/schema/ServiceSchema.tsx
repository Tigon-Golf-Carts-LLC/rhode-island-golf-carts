import { useEffect } from "react";

interface ServiceSchemaProps {
  serviceName: string;
  description: string;
  serviceType?: string;
  provider?: string;
  areaServed?: string;
  availableChannel?: string[];
  offers?: {
    price?: string;
    priceCurrency?: string;
    description?: string;
  }[];
}

export default function ServiceSchema({
  serviceName,
  description,
  serviceType = "Golf Cart Service",
  provider = "Rhode Island Golf Carts",
  areaServed = "Rhode Island, VA",
  availableChannel = ["https://schema.org/OnlineChannel", "https://schema.org/InStoreChannel"],
  offers = []
}: ServiceSchemaProps) {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": serviceName,
      "description": description,
      "serviceType": serviceType,
      "provider": {
        "@type": "LocalBusiness",
        "name": provider,
        "telephone": "1-844-844-6638",
        "email": "sales@rhodeislandgolfcarts.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "2810 George Washington Memorial Hwy",
          "addressLocality": "Gloucester Point",
          "addressRegion": "VA",
          "postalCode": "23072",
          "addressCountry": "US"
        },
        "logo": {
          "@type": "ImageObject",
          "url": "https://rhodeislandgolfcarts.com/attached_assets/Rhode Island%20Golf%20Carts_1764173360595.png"
        }
      },
      "areaServed": {
        "@type": "State",
        "name": areaServed
      },
      "availableChannel": availableChannel.map(channel => ({
        "@type": "ServiceChannel",
        "serviceUrl": channel === "https://schema.org/OnlineChannel" ? "https://rhodeislandgolfcarts.com" : undefined,
        "serviceSmsNumber": channel === "https://schema.org/InStoreChannel" ? "1-844-844-6638" : undefined
      })),
      ...(offers.length > 0 && {
        "offers": offers.map(offer => ({
          "@type": "Offer",
          "description": offer.description,
          "price": offer.price || "Contact for pricing",
          "priceCurrency": offer.priceCurrency || "USD",
          "seller": {
            "@type": "Organization",
            "name": provider
          }
        }))
      }),
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "47",
        "bestRating": "5",
        "worstRating": "1"
      }
    };
    
    const existingScript = document.querySelector('script[type="application/ld+json"][data-service]');
    if (existingScript) {
      existingScript.textContent = JSON.stringify(structuredData);
    } else {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-service", "true");
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
    
    return () => {
      const script = document.querySelector('script[type="application/ld+json"][data-service]');
      if (script) {
        script.remove();
      }
    };
  }, [serviceName, description, serviceType, provider, areaServed]);

  return null;
}
