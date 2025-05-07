import { useContext, type CSSProperties } from "react";
import { productContext } from "./ProductCard";
import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

export interface PropsImage {
  img?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductImage = ({ img = "", className, style }: PropsImage) => {
  const { product } = useContext(productContext);
  let imgToShow: string;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImage;
  }

  return <img style={style} className={`${styles.productImg} ${className}`} src={imgToShow} alt="Product Image" />;
};
