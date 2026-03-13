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
  image = "https://rhodeislandgolfcarts.com/logo.png",
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
        "url": "https://rhodeislandgolfcarts.com/logo.png"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Rhode Island Golf Carts",
      "url": "https://rhodeislandgolfcarts.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://rhodeislandgolfcarts.com/logo.png"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rhode Island",
        "addressLocality": "Rhode Island",
        "addressRegion": "RI",
        "postalCode": "02901",
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
      "description": "Electric golf carts for sale, rental, and service in Rhode Island"
    },
    "contentLocation": {
      "@type": "Place",
      "name": "Rhode Island",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Rhode Island",
        "addressRegion": "RI",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "41.5801",
        "longitude": "-71.4774"
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
