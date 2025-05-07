import { useProduct } from "../hooks/useProduct";
import { createContext } from "react";
import type { ProductCardProps, ProductContextProps } from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";

export const productContext = createContext({} as ProductContextProps);
const { Provider } = productContext;

export function ProductCard({ children, product }: ProductCardProps) {
  const { counter, increaseBy } = useProduct();
  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
}
