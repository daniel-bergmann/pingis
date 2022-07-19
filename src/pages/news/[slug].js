export const getStaticPaths = async () => {
  const res = await fetch(process.env.BTI_API);
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
  const res = await fetch(process.env.BTI_API + "?slug=" + slug);
  const data = await res.json();

  return {
    props: { data: data },
  };
};

export default function Details({ data }) {
  console.log(data);
  return (
    <div>
      {data.map((i) => {
        return (
          <div key={i.id}>
            <h1>{i.title.rendered}</h1>
          </div>
        );
      })}
    </div>
  );
}
