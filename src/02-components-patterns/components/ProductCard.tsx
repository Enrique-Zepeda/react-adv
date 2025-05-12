import { useProduct } from "../hooks/useProduct";
import { createContext, type CSSProperties, type JSX } from "react";
import type {
  InitialValues,
  onChangeArgs,
  Product,
  ProductCardHandlers,
  ProductContextProps,
} from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";

export const productContext = createContext({} as ProductContextProps);
const { Provider } = productContext;

export interface Props {
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  initialValues?: InitialValues;
  onChange?: (args: onChangeArgs) => void;
  product: Product;
  style?: CSSProperties;
  value?: number;
}

export function ProductCard({ children, product, className, style, onChange, value, initialValues }: Props) {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  });
  return (
    <Provider
      value={{
        counter,
        product,
        increaseBy,
        maxCount,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          increaseBy,
          isMaxCountReached,
          product,
          reset,
          maxCount: initialValues?.maxCount,
        })}
      </div>
    </Provider>
  );
}
