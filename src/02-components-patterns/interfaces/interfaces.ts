import type { JSX } from "react";
import type { Props as ProductCardProps } from "../components/ProductCard";
import type { PropsButtons } from "../components/ProductButtons";
import type { PropsImage } from "../components/ProductImage";
import type { PropsTitle } from "../components/ProductTitle";

export interface Product {
  id: string;
  img?: string;
  title: string;
}

export interface ProductContextProps {
  counter: number;
  product: Product;
  increaseBy: (value: number) => void;
  maxCount?: number;
}
export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Buttons: (Props: PropsButtons) => JSX.Element;
  Image: (Props: PropsImage) => JSX.Element;
  Title: (Props: PropsTitle) => JSX.Element;
}
export interface onChangeArgs {
  product: Product;
  count: number;
}

export interface ProductInCart extends Product {
  count: number;
}
export interface InitialValues {
  count?: number;
  maxCount?: number;
}
export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;

  increaseBy: (value: number) => void;
  reset: () => void;
}
