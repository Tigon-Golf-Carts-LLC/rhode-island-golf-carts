import { useEffect } from "react";

interface OrganizationSchemaProps {
  pageType?: "home" | "about" | "contact" | "services";
}

export default function OrganizationSchema({ pageType = "home" }: OrganizationSchemaProps) {
  useEffect(() => {
    const baseStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Rhode Island Golf Carts",
      "description": "Premier golf cart dealership in Rhode Island, Virginia specializing in electric golf carts, sales, service, rentals, and financing.",
      "url": "https://rhodeislandgolfcarts.com",
      "logo": "https://rhodeislandgolfcarts.com/attached_assets/Rhode Island%20Golf%20Carts_1764173360595.png",
      "image": "https://rhodeislandgolfcarts.com/attached_assets/Rhode Island%20Golf%20Carts_1764173360595.png",
      "telephone": "804-792-0234",
      "email": "sales@rhodeislandgolfcarts.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2810 George Washington Memorial Hwy",
        "addressLocality": "Gloucester Point",
        "addressRegion": "VA",
        "postalCode": "23072",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "37.2850625",
        "longitude": "-76.5074161"
      },
      "openingHours": [
        "Mo-Fr 09:00-18:00",
        "Sa 09:00-17:00"
      ],
      "serviceArea": {
        "@type": "AdministrativeArea",
        "name": "City of Rhode Island, Virginia"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Golf Cart Services & Products",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Denago Electric Golf Carts",
              "category": "Electric Golf Carts"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Evolution Electric Golf Carts",
              "category": "Electric Golf Carts"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Golf Cart Sales",
              "category": "Sales Service"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Golf Cart Rentals",
              "category": "Rental Service"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Golf Cart Maintenance & Repair",
              "category": "Maintenance Service"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Golf Cart Financing",
              "category": "Financial Service"
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      },
      "sameAs": [
        "https://www.facebook.com/Rhode IslandGolfCarts/",
        "https://www.youtube.com/@Rhode IslandGolfCarts",
        "https://www.pinterest.com/chesapeakegolfcarts/"
      ]
    };

    let structuredData = baseStructuredData;

    if (pageType === "about") {
      structuredData = {
        ...baseStructuredData,
        "@type": "Organization",
        "foundingDate": "2008",
        "numberOfEmployees": "15-25"
      } as any;
    } else if (pageType === "contact") {
      structuredData = {
        ...baseStructuredData,
        "@type": "Organization",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "804-792-0234",
          "contactType": "customer service",
          "availableLanguage": "English"
        }
      } as any;
    } else if (pageType === "services") {
      structuredData = {
        ...baseStructuredData,
        "@type": "Organization",
        "provider": {
          "@type": "Organization",
          "name": "Rhode Island Golf Carts"
        }
      } as any;
    }

    const existingScript = document.querySelector('script[type="application/ld+json"][data-organization]');
    if (existingScript) {
      existingScript.textContent = JSON.stringify(structuredData);
    } else {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-organization", "true");
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    return () => {
      const scriptToRemove = document.querySelector('script[type="application/ld+json"][data-organization]');
      if (scriptToRemove) {
        document.head.removeChild(scriptToRemove);
      }
    };
  }, [pageType]);

  return null;
}
