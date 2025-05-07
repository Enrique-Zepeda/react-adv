import { useContext, type CSSProperties } from "react";
import { productContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface PropsTitle {
  title?: string;
  className?: string;
  activeClass?: string;
  style?: CSSProperties;
}

export const ProductTitle = ({ title, className, style }: PropsTitle) => {
  const { product } = useContext(productContext);
  return (
    <span style={style} className={`${styles.productDescription} ${className}`}>
      {title ? title : product.title}
    </span>
  );
};
