import { useState } from "react";

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      return setCount(count + 1);
    }
    setCount(count);
  };

  const decrement = () => {
    if (count === 0) {
      return setCount(0);
    }
    setCount(count - 1);
  };

  return (
    <div className="contenedorBotones">
      <div>
        <button className="btn btn-outline-secondary mx-3" onClick={decrement}>
          -
        </button>
        <strong>{count}</strong>
        <button className="btn btn-outline-secondary mx-3" onClick={increment}>
          +
        </button>
      </div>
      <button className="btn btn-outline-primary mt-2" onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  );
};
