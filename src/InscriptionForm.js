// InscriptionForm.js
import { useState } from 'react';

function InscriptionForm() {
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Empêche le rechargement de la page
    alert(`Prénom : ${prenom}\nEmail : ${email}`);
    // Optionnel : Réinitialiser le formulaire
    setPrenom('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Prénom : 
          <input 
            type="text" 
            value={prenom} 
            onChange={(e) => setPrenom(e.target.value)} 
            required
          />
        </label>
      </div>
      <div>
        <label>
          Email : 
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
        </label>
      </div>
      <button type="submit">S’inscrire</button>
    </form>
  );
}

export default InscriptionForm;
