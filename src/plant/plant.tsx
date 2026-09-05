import { useState } from "react";
import type { PlantType } from "../PlantType";
import "./plant.css";

interface PlantProps {
  plant: PlantType;
  CartHandler: (id: number, quantity: number) => void;
}

export function Plant({ plant, CartHandler }: PlantProps) {
  const [counter, setCounter] = useState(0);
  function adder() {
    setCounter(counter + 1);
  }

  function remover() {
    if (counter === 0) return;
    setCounter(counter - 1);
  }

  function addToCart() {
    CartHandler(plant.id, counter);
  }

  return (
    <div className="plant">
      <img src={plant.image} alt={plant.description}></img>
      <div>
        <div className="details">
          <h2>{plant.name}</h2>
          <p>Price : ৳{plant.price}</p>
        </div>
        <div className="wholeCart">
          <div className="counter">
            <button className="counterBtn" onClick={remover}>
              -
            </button>
            <h2>{counter}</h2>
            <button className="counterBtn" onClick={adder}>
              +
            </button>
          </div>
          <div>
            <button className="cartBtn" onClick={addToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
