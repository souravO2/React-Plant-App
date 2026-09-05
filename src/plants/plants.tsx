import type { PlantType } from "../PlantType";
import { use, useState } from "react";
import { Plant } from "../plant/plant";
import "./plants.css";
import NavLogo from "../assets/Screenshot from 2026-09-05 13-24-23.png";
import CartLogo from "../assets/icons8-cart-48.png";

interface PlantsProps {
  plantPromise: Promise<PlantType[]>;
}

export function Plants({ plantPromise }: PlantsProps) {
  const plants = use(plantPromise);

  const [cart, setCart] = useState<Record<number, number>>({});

  function CartHandler(id: number, quantity: number) {
    setCart((prev) => ({ ...prev, [id]: quantity }));
  }

  const totalItems = Object.values(cart).reduce((sum, q) => sum + q, 0);

  return (
    <div>
      <nav>
        <div>
          <img
            src={NavLogo}
            style={{ borderRadius: "10px", width: "64px", height: "cover" }}
          />
        </div>
        <div>
          <ul>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <button>
            <img src={CartLogo}></img>
            <h1>{totalItems}</h1>
          </button>
        </div>
      </nav>
      <div className="plants">
        {plants.map((plant) => (
          <Plant key={plant.id} plant={plant} CartHandler={CartHandler}></Plant>
        ))}
      </div>
    </div>
  );
}
