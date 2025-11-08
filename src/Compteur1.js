// Compteur1.js
import { useState, useEffect } from 'react';

function Compteur1() {
  const [clics, setClics] = useState(0);

  // useEffect pour changer le titre à chaque mise à jour
  useEffect(() => {
    document.title = `Nombre de clics : ${clics}`;
  }, [clics]); // Le tableau de dépendances [clics] déclenche l'effet à chaque changement

  const handleClick = () => {
    setClics(clics + 1);
  };

  return (
    <div>
      <p>Vous avez cliqué {clics} fois</p>
      <button onClick={handleClick}>Cliquez ici</button>
    </div>
  );
}

export default Compteur;
