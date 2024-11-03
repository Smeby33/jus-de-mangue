import React, { useState } from 'react';

function Connexion() {
  // Définir un état pour la visibilité du formulaire
  const [showForm, setShowForm] = useState(false);

  // Fonction pour basculer la visibilité
  const handleConnexionClick = () => {
    setShowForm(!showForm);
  };

  return (
    <div className='Connexion'>
        <div className="divbtn">
            <button className='btnconx' onClick={handleConnexionClick}>
                <h1>
                    Connexion
                </h1> 
                <span class="guidance--user-1"></span>
            </button>
        </div>
      

      {/* Afficher le formulaire seulement si showForm est true */}
      {showForm && (
        <div className="formu">
        <div className="nomUser">
          <label htmlFor="username">Nom d'utilisateur<span>*</span></label>
          <input type="text" id="username" placeholder="Nom d'utilisateur" />
        </div>
        <div className="passeWord">
          <label htmlFor="password">Mot de passe<span>*</span></label>
          <input type="password" id="password" placeholder="Mot de passe" />
        </div>
        </div>
      )}
    </div>
  );
}

export default Connexion;
