import { useRouter } from "next/router";
import styles from "@/styles/product.module.css";
import { Button } from "antd";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.success("Item added to cart");

function SingleProduct({ product }) {
  return (
    <div key={product.id} className={styles.singlecard}>
      <img src={product.image} alt={product.title} height={300} width={300} />
      <h4>{product.title}</h4>
      <p>Description:{product.description}</p>
      <h4>${product.price}</h4>
      <Button danger
        type="primary"
        size="small"
        onClick={notify}
        className={styles.btn}
      >
        Add to cart
      </Button>
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
}

export async function getStaticPaths() {
  const response = await fetch(`https://fakestoreapi.com/products`);
  const data = await response.json();
  const paths = data.map((products) => ({
    params: { id: products.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const productId = parseInt(params.id);
  console.log(productId);
  const response = await fetch(
    `https://fakestoreapi.com/products/${productId}`
  );
  const data = await response.json();
  console.log(data);
  return {
    props: {
      product: data,
    },
  };
}

export default SingleProduct;
