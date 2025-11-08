// DynamicText.js
import { useState } from 'react';

function DynamicText() {
  // État pour compter le nombre de clics
  const [clickCount, setClickCount] = useState(0);

  // Texte à afficher selon le nombre de clics
  const messages = ["Premier clic", "Deuxième clic", "Troisième clic", "Plus de clics !"];

  // Fonction appelée au clic
  const handleClick = () => {
    setClickCount(prev => (prev + 1 < messages.length ? prev + 1 : prev));
  };

  return (
    <div>
      <p>{messages[clickCount]}</p>
      <button onClick={handleClick}>Cliquez ici</button>
    </div>
  );
}

export default DynamicText;
