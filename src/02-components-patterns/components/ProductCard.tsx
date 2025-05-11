import { useProduct } from "../hooks/useProduct";
import { createContext, type CSSProperties, type ReactElement } from "react";
import type { onChangeArgs, Product, ProductContextProps } from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";

export const productContext = createContext({} as ProductContextProps);
const { Provider } = productContext;

export interface Props {
  children?: ReactElement | ReactElement[];
  className?: string;
  onChange?: (args: onChangeArgs) => void;
  product: Product;
  style?: CSSProperties;
  value?: number;
}

export function ProductCard({ children, product, className, style, onChange, value }: Props) {
  const { counter, increaseBy } = useProduct({ onChange, product, value });
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
