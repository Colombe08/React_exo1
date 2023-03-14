import { useState } from "react";
import Fruit from "./composent/Fruit";
import Fruit from "./composent/FruitForm";

function App() {
  // etat, donnéess
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Orange" },
    { id: 2, nom: "Citron" },
    { id: 3, nom: "Pomme" }
  ]);

  // comportements
  const handleDelete = (id) => {
    console.log(id);

    const handleAdd = (fruitAAjouter) => {
      // la copie du state
      const fruitsCopy = [...fruits];
  
       // manipuler la copie du state
      fruitsCopy.push(fruitAAjouter);
  
      // modifier le state avec le setter
      setFruits(fruitsCopy);
    }

  // render (affichage)
  return (
    <div>
      <h1>Liste de mes fruits préférés</h1>
      <ul>
        {fruits.map((fruit) => (
          <Fruit fruitInfo={fruit} 
          onFruitDelete={handleDelete} 
          key={fruit.id} 
          />
        ))}
      </ul>

      <FruitForm handleAdd={handleAdd} />
    </div>
  );
}

export default App;
