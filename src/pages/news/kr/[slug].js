import RenderedSlug from "@components/news/RenderedSlug";

export const getStaticPaths = async () => {
  const res = await fetch("https://kr.is/wp-json/wp/v2/posts?categories=3");
  const data = await res.json();

  const paths = data.map((i) => {
    return {
      params: { slug: i.slug.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const slug = await context.params.slug;
  const res = await fetch(
    "https://kr.is/wp-json/wp/v2/posts" + "?slug=" + slug
  );
  const data = await res.json();

  return {
    props: { data: data },
  };
};

export default function Details({ data }) {
  return (
    <>
      {data.map((content) => {
        return <RenderedSlug content={content} key={content.id} />;
      })}
    </>
  );
}
