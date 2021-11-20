import Head from "next/head";
import Footer from "@components/Footer";

export default function Home({ data: news }) {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {new Array(5).fill(0).map((element, index) => (
          <div key={index}>
            <p className="description">{news[index].title}</p>
          </div>
        ))}
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  );
}

// This gets called on every request
export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://min-api.cryptocompare.com/data/v2/news/?lang=EN`,
    {
      headers: {
        authorization: `Apikey ${process.env.CRYPTO_COMPARE_API_KEY}`,
      },
    }
  );
  var { Data: data } = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}
