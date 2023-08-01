import { getBlog } from "../../../../blog/sanity/Utils/sanity-utils";
import Image from "next/image";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;
  let sitename = "https://www.example.com";
  // fetch data
  const product = await getBlog(slug);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.name,
    description: product.content.toString(),
    generator: "Next.js",
    keywords: ["Next.js", "React", "JavaScript"],
    authors: [{ name: "Seb" }, { name: "Josh", url: "https://nextjs.org" }],
    colorScheme: "dark",
    creator: "Jiachi Liu",
    publisher: "Sebastian Markbåge",
    metadataBase: new URL("https://acme.com"),
    alternates: {
      canonical: "/",
      languages: {
        "en-US": "/en-US",
        "de-DE": "/de-DE",
        "en-GB": "/en-GB",
      },
    },
    openGraph: {
      title: product.name,
      description: product.content.toString(),
      url: `${sitename}/${slug}`,
      siteName: "Next.js",
      images: [
        {
          url: "https://nextjs.org/og.png",
          width: 800,
          height: 600,
        },
        {
          url: "https://nextjs.org/og-alt.png",
          width: 1800,
          height: 1600,
          alt: "My custom alt",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "app",
      title: product.name,
      description: product.content.toString(),
      siteId: "1467726470533754880",
      creator: "@nextjs",
      creatorId: "1467726470533754880",
      images: {
        url: product.image,
        alt: product.name,
      },
      app: {
        name: "twitter_app",
        id: {
          iphone: "twitter_app://iphone",
          ipad: "twitter_app://ipad",
          googleplay: "twitter_app://googleplay",
        },
        url: {
          iphone: "https://iphone_url",
          ipad: "https://ipad_url",
        },
      },
    },
  };
}

export default async function Project({ params, searchParams }: Props) {
  const slug = params.slug;
  const project = await getBlog(slug);
  console.log(project);

  return (
    <div>
      <header className="flex items-center justify-between p-20">
        <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">
          {project.name}
        </h1>
        <a
          href={project.url}
          title="View Project"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition"
        >
          View Project
        </a>
      </header>

      <div className="text-lg text-gray-700 mt-5">{project.slug}</div>

      <Image
        src={project.image}
        alt={project.name}
        width={1920}
        height={1080}
        className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
      />
    </div>
  );
}
