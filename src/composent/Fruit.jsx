export default function Fruit({ fruitInfo, onFruitDelete }) {
  // state

  // comportement

  // render (affichage)
  return (
    <li>
      {fruitInfo.nom}{" "}
      <button onClick={() => onFruitDelete(fruitInfo.id)}>Supprimer</button>
    </li>
  );
}
