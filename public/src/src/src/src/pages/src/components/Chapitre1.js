import React, { useState } from "react";

function Chapitre1({ saveData }) {
  const [form, setForm] = useState({
    Raison_sociale: "",
    Adresse: "",
    GPS: "",
    Annee_service: "",
    Superficie_totale: "",
    Surface_batie: "",
    Plan_de_masse: "Non",
    Proprietaire: "",
    Activite_principale: "",
    Activites_secondaires: "",
    Nombre_employes: "",
    Horaires: "",
    Travail_nuit: "Non",
    Sous_traitance: "Non",
    Organigramme: "Non",
    Responsable_HSE: "",
    Responsable_maintenance: "",
    Voisinage: "",
    Distance_habitations: "",
    Accessibilite_secours: "",
    Risque_inondation: "Non",
    Historique_catastrophes: "",
    Zone_industrielle: "Non"
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("chapitre1", JSON.stringify(form));
    saveData(form);
    alert("Chapitre 1 sauvegardé !");
  };

  return (
    <div style={{ border: "1px solid gray", padding: "10px", marginBottom: "10px" }}>
      <h2>CHAPITRE 1 — INFORMATIONS GÉNÉRALES</h2>
      {Object.keys(form).map((key, idx) => (
        <div key={idx}>
          {["Plan_de_masse","Travail_nuit","Sous_traitance","Organigramme","Risque_inondation","Zone_industrielle"].includes(key) ? (
            <label>
              {key.replace(/_/g," ")}:
              <select name={key} value={form[key]} onChange={handleChange}>
                <option>Oui</option>
                <option>Non</option>
              </select>
            </label>
          ) : (
            <label>
              {key.replace(/_/g," ")}:
              <input type="text" name={key} value={form[key]} onChange={handleChange} />
            </label>
          )}
          <br/>
        </div>
      ))}
      <button onClick={handleSave}>Sauvegarder Chapitre 1</button>
    </div>
  );
}

export default Chapitre1;
