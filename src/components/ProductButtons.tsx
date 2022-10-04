import React, { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";

export interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  // TODO: maxCount
  const { increaseBy, counter, maxCount } = useContext(ProductContext);

  // TODO: isMaxReached = useCallback, [ count, maxCount]
  const isMaxReached = useCallback(() => !!maxCount && counter === maxCount, [counter, maxCount]);

  // TRUE: si el count === maxCount
  // FALSE: si no lo es

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        {" "}
        -{" "}
      </button>

      <div className={styles.countLabel}> {counter} </div>

      <button
        disabled={isMaxReached()}
        className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
        onClick={() => increaseBy(+1)}
      >
        {" "}
        +{" "}
      </button>
    </div>
  );
};
