import { useContext, type CSSProperties } from "react";
import { productContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface PropsButtons {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: PropsButtons) => {
  const { counter, increaseBy } = useContext(productContext);

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}> {counter} </div>
      <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
        +
      </button>
    </div>
  );
};
