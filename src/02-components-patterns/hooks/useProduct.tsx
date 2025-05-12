import { useEffect, useRef, useState } from "react";
import type { InitialValues, onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  // console.log(initialValues?.count);

  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);
    if (initialValues?.count) {
      newValue = Math.min(newValue, initialValues.maxCount || value);
    }
    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) return;
    else isMounted.current = true;

    setCounter(value);
  }, [value]);

  return {
    //Atributos
    counter,
    isMaxCountReached: !!initialValues?.count && initialValues.count === counter,
    maxCount: initialValues?.maxCount,
    // Metodos
    increaseBy,
    reset,
  };
};
