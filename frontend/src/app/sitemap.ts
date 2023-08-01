import { MetadataRoute } from "next";
import { getBlogs } from "../../blog/sanity/Utils/sanity-utils";

let sitename = "https://acme.com";

export async function getBlogUrls() {
  const blogs = await getBlogs();
  const blogUrls = blogs.map(blog => {
    return {
      url: `${sitename}/blog/${blog.slug}`,
      lastModified: new Date(),
    };
  });
  return blogUrls;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogUrls = await getBlogUrls();
  return [
    {
      url: `${sitename}/`,
      lastModified: new Date(),
    },
    {
      url: `${sitename}/about`,
      lastModified: new Date(),
    },
    {
      url: `${sitename}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${sitename}/legal/privacy-policy`,
      lastModified: new Date(),
    },
    {
      url: `${sitename}/legal/terms-of-service`,
      lastModified: new Date(),
    },
    {
      url: `${sitename}/legal/cookie-policy`,
      lastModified: new Date(),
    },
    ...blogUrls,
  ];
}
