import { useParams, Link } from "wouter";
import { Calendar, ArrowLeft, MapPin, Phone, Mail, BookOpen, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import BlogPostSchema from "@/components/schema/BlogPostSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import { getBlogPostBySlug, blogPosts, type BlogPost } from "@/data/blogPosts";
import { getHeroBackgroundStyle } from "@/utils/backgroundImages";

export default function BlogPostPage() {
  const params = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(params.slug || "");

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#0e2e55] mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            href="/blog"
            className="inline-flex items-center text-[#ff6100] hover:text-[#0e2e55] font-semibold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title={post.seoTitle}
        description={post.metaDescription}
        keywords={post.keywords}
        canonicalUrl={post.canonicalUrl}
        ogType="article"
      />
      <BlogPostSchema
        title={post.seoTitle}
        description={post.metaDescription}
        url={post.canonicalUrl}
        publishDate={post.publishDate}
        imageAlt={post.heroImageAlt}
        keywords={post.keywords}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://rhodeislandgolfcarts.com/" },
          { name: "Blog", url: "https://rhodeislandgolfcarts.com/blog" },
          { name: post.h1.split("|")[0].trim(), url: post.canonicalUrl }
        ]}
      />

      <section
        className="relative bg-gradient-to-br from-[#0e2e55] via-blue-800 to-[#0e2e55] text-white py-16 px-4 bg-cover bg-center bg-no-repeat"
        style={getHeroBackgroundStyle("blog")}
      >
        <div className="absolute inset-0 bg-[#0e2e55]/75"></div>
        <div className="relative max-w-4xl mx-auto">
          <nav className="flex items-center text-sm text-gray-300 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white truncate max-w-[200px]">{post.h1.split("|")[0].trim()}</span>
          </nav>
          <Badge className="bg-[#ff6100] hover:bg-[#ff6100]/90 text-white mb-4">
            <BookOpen className="w-4 h-4 mr-2" />
            Golf Cart Guide
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" data-testid="blog-post-title">
            {post.h1}
          </h1>
          <div className="flex items-center text-gray-200">
            <Calendar className="w-4 h-4 mr-2" />
            <time dateTime={post.publishDate}>{formatDate(post.publishDate)}</time>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={post.heroImage}
              alt={post.heroImageAlt}
              className="w-full h-auto object-cover"
              data-testid="blog-hero-image"
            />
          </div>
        </div>
      </section>

      <article className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8" data-testid="blog-intro">
                {post.content.intro}
              </p>

              {post.content.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-10">
                  <h2 className="text-2xl font-bold text-[#0e2e55] mb-4 pb-2 border-b border-gray-200">
                    {section.h2}
                  </h2>
                  <p className="text-gray-700 mb-6">{section.content}</p>

                  {section.subsections?.map((subsection, subIndex) => (
                    <div key={subIndex} className="ml-4 mb-6">
                      <h3 className="text-xl font-semibold text-[#0e2e55] mb-3">
                        {subsection.h3}
                      </h3>
                      <p className="text-gray-700 mb-4">{subsection.content}</p>

                      {subsection.details?.map((detail, detailIndex) => (
                        <div key={detailIndex} className="ml-4 mb-4">
                          <h4 className="text-lg font-semibold text-gray-800 mb-2">
                            {detail.h4}
                          </h4>
                          <p className="text-gray-600 mb-3">{detail.content}</p>

                          {detail.points?.map((point, pointIndex) => (
                            <div key={pointIndex} className="ml-4 mb-3">
                              <h5 className="text-base font-semibold text-gray-700 mb-1">
                                {point.h5}
                              </h5>
                              <p className="text-gray-600 mb-2">{point.content}</p>

                              {point.subpoints?.map((subpoint, subpointIndex) => (
                                <div key={subpointIndex} className="ml-4 mb-2">
                                  <h6 className="text-sm font-semibold text-gray-600 mb-1">
                                    {subpoint.h6}
                                  </h6>
                                  <p className="text-gray-500 text-sm">{subpoint.content}</p>
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}

              <div className="bg-gray-50 rounded-lg p-6 mt-8 border-l-4 border-[#ff6100]">
                <p className="text-gray-700 font-medium" data-testid="blog-conclusion">
                  {post.content.conclusion}
                </p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-[#0e2e55] mb-4">Related Pages</h3>
              <div className="flex flex-wrap gap-3">
                {post.internalLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.url}
                    className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-[#0e2e55] hover:text-white transition-colors text-sm"
                    data-testid={`internal-link-${index}`}
                  >
                    {link.text}
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Card className="mt-8 bg-[#0e2e55] text-white">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Visit Rhode Island Golf Carts</h3>
                  <p className="text-gray-200 mb-6">
                    Ready to find your perfect golf cart? Visit our showroom or contact us today!
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-3 text-[#ff6100]" />
                      <span>2810 George Washington Memorial Hwy, Gloucester Point, VA 23072</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 mr-3 text-[#ff6100]" />
                      <a href="tel:804-792-0234" className="hover:text-[#ff6100]">804-792-0234</a>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 mr-3 text-[#ff6100]" />
                      <a href="mailto:sales@rhodeislandgolfcarts.com" className="hover:text-[#ff6100]">
                        sales@rhodeislandgolfcarts.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <Link
                    href="/inventory"
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#ff6100] text-white font-semibold rounded-lg hover:bg-[#ff6100]/90 transition-colors"
                    data-testid="post-cta-inventory"
                  >
                    View Our Inventory
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#0e2e55] transition-colors"
                    data-testid="post-cta-contact"
                  >
                    Contact Us Today
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </article>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0e2e55] mb-8 text-center">
            More Articles You Might Like
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Card
                key={relatedPost.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
                data-testid={`related-post-${relatedPost.id}`}
              >
                <div className="h-32 bg-gradient-to-br from-[#0e2e55] to-blue-700 flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-white/30" />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center text-xs text-gray-500 mb-2">
                    <Calendar className="w-3 h-3 mr-1" />
                    {formatDate(relatedPost.publishDate)}
                  </div>
                  <h3 className="font-semibold text-[#0e2e55] line-clamp-2 mb-2 hover:text-[#ff6100] transition-colors">
                    <Link href={`/blog/${relatedPost.slug}`}>
                      {relatedPost.h1.split("|")[0].trim()}
                    </Link>
                  </h3>
                  <Link
                    href={`/blog/${relatedPost.slug}`}
                    className="text-sm text-[#ff6100] hover:text-[#0e2e55] font-medium"
                  >
                    Read More →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-[#0e2e55] hover:text-[#ff6100] font-semibold"
              data-testid="view-all-posts"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              View All Blog Posts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
