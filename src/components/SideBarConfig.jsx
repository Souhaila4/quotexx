import React from 'react';
import './sidebar.css'; // Importez votre feuille de style CSS

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Investissement</h2>
      <form>
        <div className="form-group">
          <label htmlFor="time">Temps :</label>
          <input type="text" id="time" name="time" placeholder="Entrez le temps" />
        </div>
        <div className="form-group">
          <label htmlFor="investment">Investissement :</label>
          <input type="text" id="investment" name="investment" placeholder="Entrez votre investissement" />
        </div>
        <button type="submit" id='bt1'>En haut</button>
        <button type="submit" id='bt2'>En bas</button>
      </form>
    </div>
  );
}

export default Sidebar;
