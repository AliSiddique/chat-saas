import { createClient, groq } from "next-sanity";
import clientConfig from '../config/client-config'
import { Blog } from "../../Types/Blog";

export async function getBlogs(): Promise<Blog[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "blog"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content,
      Category
    }`
  )
}
export async function getBlogsCategory(category: string): Promise<Blog[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "blog" && Category == $category][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content,
      Category
    }`,
    { category } // Add the variable binding for the category here
  );
}
export async function getBlog(slug: string): Promise<Blog> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "blog" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { slug }
  )
}

