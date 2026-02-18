import React, { useState } from "react";

function Chapitre3({ saveData }) {
  const [form, setForm] = useState({
    Schema_procédé: "Non",
    Temp_elevees: "Non",
    Pression_elevees: "Non",
    Reactions_chimiques: "Non",
    Zones_ATEX: "Non",
    ESD: "Non",
    Matieres_premieres: "",
    Produits_finis: "",
    Produits_inflammables: "Non",
    Produits_toxiques: "Non",
    Hauteur_stockage: "",
    Separation_incompatibles: "Non",
    Valeur_max_stockee: "",
    Four_reacteurs: "Non",
    Stock_tampon: "Non",
    Process_continu: "Non",
    Goulots_etranglement: "Non",
    Redondance_lignes: "Non",
    Temps_redemarrage: ""
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("chapitre3", JSON.stringify(form));
    saveData(form);
    alert("Chapitre 3 sauvegardé !");
  };

  return (
    <div style={{ border: "1px solid gray", padding: "10px", marginBottom: "10px" }}>
      <h2>CHAPITRE 3 — PROCESS INDUSTRIEL</h2>
      {Object.keys(form).map((key, idx) => (
        <div key={idx}>
          {["Schema_procédé","Temp_elevees","Pression_elevees","Reactions_chimiques","Zones_ATEX","ESD",
          "Produits_inflammables","Produits_toxiques","Separation_incompatibles","Four_reacteurs",
          "Stock_tampon","Process_continu","Goulots_etranglement","Redondance_lignes"].includes(key) ? (
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
      <button onClick={handleSave}>Sauvegarder Chapitre 3</button>
    </div>
  );
}

export default Chapitre3;
