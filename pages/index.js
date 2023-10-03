import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { Button } from "antd";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.success("Item added to cart");

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Shopspot</title>
        <meta name="description" content="Everything you need" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.categories}>
          <h1>Browse by Categories</h1>
          <div className={styles.cards}>
            <div className={styles.card}>
              <img src={"/card.jpeg"} width={300} height={250} />
              <br />

              <Link href={"/products"}>
                {" "}
                <Button type="primary" danger className={styles.btn}>
                  SHOP ALL
                </Button>
              </Link>
            </div>
            <div className={styles.card}>
              <img src={"/card2.jpg"} width={300} height={250} /> <br />
              <Link href={"/products"}>
                {" "}
                <Button type="primary" danger className={styles.btn}>
                  MEN
                </Button>{" "}
              </Link>
            </div>
            <div className={styles.card}>
              <img src={"/card3.jpg"} width={300} height={250} /> <br />
              <Link href={"/products"}>
                {" "}
                <Button type="primary" danger className={styles.btn}>
                  WOMEN
                </Button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </main>
      <div className={styles.products}>
        <div className={styles.categories}>
          <h1>Shop All</h1>
          <div className={styles.cards}>
            {products.slice(0, 10).map((eachProduct) => {
              return (
                <>
                  <div className={styles.card} key={eachProduct.id}>
                    <img
                      src={eachProduct.image}
                      alt={eachProduct.title}
                      width={200}
                      height={200}
                    />
                    <Link href={`/singleProduct/${eachProduct.id}`}>
                      {" "}
                      <h4>{eachProduct.title.slice(0, 30)}</h4>{" "}
                    </Link>
                    <h4>${eachProduct.price}</h4>
                    <Button danger
                      type="primary"
                      size="small"
                      className={styles.btn}
                      onClick={notify}
                    >
                      Add to cart
                    </Button>
                    <Toaster position="bottom-center" reverseOrder={false} />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export async function getStaticProps() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return {
    props: {
      products: data,
    },
  };
}
