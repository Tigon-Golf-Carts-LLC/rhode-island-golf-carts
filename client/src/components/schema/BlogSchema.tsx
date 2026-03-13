interface BlogSchemaProps {
  name?: string;
  description?: string;
  url?: string;
  posts?: Array<{
    title: string;
    url: string;
    publishDate: string;
  }>;
}

export default function BlogSchema({
  name = "Rhode Island Golf Carts Blog",
  description = "Expert golf cart news, buying guides, tips, and insights from Rhode Island's premier golf cart dealer serving Rhode Island.",
  url = "https://rhodeislandgolfcarts.com/blog",
  posts = []
}: BlogSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": name,
    "description": description,
    "url": url,
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
    "inLanguage": "en-US",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": posts.map((post, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "BlogPosting",
          "headline": post.title,
          "url": post.url,
          "datePublished": post.publishDate
        }
      }))
    },
    "about": {
      "@type": "Thing",
      "name": "Golf Carts",
      "description": "Electric golf carts for sale, rental, and service in Rhode Island"
    },
    "contentLocation": {
      "@type": "Place",
      "name": "Rhode Island",
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
