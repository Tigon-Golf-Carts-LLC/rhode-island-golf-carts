interface BlogPostSchemaProps {
  title: string;
  description: string;
  url: string;
  publishDate: string;
  image?: string;
  imageAlt?: string;
  author?: string;
  keywords?: string;
}

export default function BlogPostSchema({
  title,
  description,
  url,
  publishDate,
  image = "https://rhodeislandgolfcarts.com/attached_assets/Rhode Island%20Golf%20Carts_1764173360595.png",
  imageAlt = "Rhode Island Golf Carts",
  author = "Rhode Island Golf Carts",
  keywords = ""
}: BlogPostSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": {
      "@type": "ImageObject",
      "url": image,
      "caption": imageAlt
    },
    "author": {
      "@type": "Organization",
      "name": author,
      "url": "https://rhodeislandgolfcarts.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://rhodeislandgolfcarts.com/attached_assets/Rhode Island%20Golf%20Carts_1764173360595.png"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Rhode Island Golf Carts",
      "url": "https://rhodeislandgolfcarts.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://rhodeislandgolfcarts.com/attached_assets/Rhode Island%20Golf%20Carts_1764173360595.png"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2810 George Washington Memorial Hwy",
        "addressLocality": "Gloucester Point",
        "addressRegion": "VA",
        "postalCode": "23072",
        "addressCountry": "US"
      },
      "telephone": "804-792-0234",
      "email": "sales@rhodeislandgolfcarts.com"
    },
    "datePublished": publishDate,
    "dateModified": publishDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "url": url,
    "keywords": keywords,
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "Blog",
      "name": "Rhode Island Golf Carts Blog",
      "url": "https://rhodeislandgolfcarts.com/blog"
    },
    "about": {
      "@type": "Thing",
      "name": "Golf Carts",
      "description": "Electric golf carts for sale, rental, and service in Rhode Island, Virginia"
    },
    "contentLocation": {
      "@type": "Place",
      "name": "Rhode Island, Virginia",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Rhode Island",
        "addressRegion": "VA",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "37.2850625",
        "longitude": "-76.5074161"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
