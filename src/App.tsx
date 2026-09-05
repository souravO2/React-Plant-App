import { Suspense } from "react";
import { Plants } from "./plants/plants";
import "./App.css";
import type { PlantType } from "./PlantType";

function App() {
  const plantPromise = async (): Promise<PlantType[]> => {
    const res = await fetch("https://openapi.programming-hero.com/api/plants");
    const data = await res.json();
    return data.plants;
  };

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Plants plantPromise={plantPromise()}></Plants>
      </Suspense>
    </>
  );
}

export default App;
