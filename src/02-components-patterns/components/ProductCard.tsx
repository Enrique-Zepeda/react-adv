import { useProduct } from "../hooks/useProduct";
import { createContext, type CSSProperties, type ReactElement } from "react";
import type { Product, ProductContextProps } from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";

export const productContext = createContext({} as ProductContextProps);
const { Provider } = productContext;

export interface Props {
  children?: ReactElement | ReactElement[];
  className?: string;
  product: Product;
  style?: CSSProperties;
}

export function ProductCard({ children, product, className, style }: Props) {
  const { counter, increaseBy } = useProduct();
  return (
    <Provider
      value={{
        counter,
        product,
        increaseBy,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
}
