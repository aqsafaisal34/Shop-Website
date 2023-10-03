import React from "react";
import Link from "next/link";
import styles from "@/styles/product.module.css";
import { Button } from "antd";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.success("Item added to cart");

export default function Product({ products }) {
  return (
    <div className={styles.products}>
      <div className={styles.categories}>
        <h1>Products</h1>
        <div className={styles.cards}>
          {products.map((eachProduct) => {
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
                  </Button>{" "}
                  <Toaster position="bottom-center" reverseOrder={false} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
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
