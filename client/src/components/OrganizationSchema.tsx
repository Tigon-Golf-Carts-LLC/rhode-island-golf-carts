import { useEffect } from "react";

interface OrganizationSchemaProps {
  pageType?: "home" | "about" | "contact" | "services";
}

export default function OrganizationSchema({ pageType = "home" }: OrganizationSchemaProps) {
  useEffect(() => {
    const baseStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Chesapeake Golf Carts",
      "description": "Premier golf cart dealership in Chesapeake, Virginia specializing in electric golf carts, sales, service, rentals, and financing.",
      "url": "https://chesapeakegolfcarts.com",
      "logo": "https://chesapeakegolfcarts.com/attached_assets/Chesapeake%20Golf%20Carts%20Logo.png",
      "image": "https://chesapeakegolfcarts.com/attached_assets/Chesapeake%20Golf%20Carts%20Logo.png",
      "telephone": "757-555-1234",
      "email": "sales@chesapeakegolfcarts.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1234 Battlefield Blvd",
        "addressLocality": "Chesapeake",
        "addressRegion": "VA",
        "postalCode": "23322",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "36.7682",
        "longitude": "-76.2875"
      },
      "openingHours": [
        "Mo-Fr 09:00-18:00",
        "Sa 09:00-17:00"
      ],
      "serviceArea": {
        "@type": "AdministrativeArea",
        "name": "City of Chesapeake, Virginia"
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
        "https://www.facebook.com/ChesapeakeGolfCarts/",
        "https://www.youtube.com/@ChesapeakeGolfCarts",
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
          "telephone": "757-555-1234",
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
          "name": "Chesapeake Golf Carts"
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
