import React, { useState } from "react";

function Chapitre2({ saveData }) {
  const [form, setForm] = useState({
    Electricite_source: "",
    Poste_transformation: "Non",
    Redondance_alimentation: "Non",
    Tableaux_conformes: "Non",
    Thermographie: "Non",
    Mise_terre: "Non",
    Protection_surtension: "Non",
    Groupe_secours: "Non",
    Maintenance_electricite: "Non",
    Eau_source: "",
    Reserve_incendie: "",
    Resau_incendie_maillé: "Non",
    Pompes_electrique: "Non",
    Pompes_diesel: "Non",
    Pompes_jockey: "Non",
    Tests_hebdomadaires: "Non",
    Etude_hydraulique: "Non",
    RIA_operationnels: "Non",
    Sprinklers: "",
    Gaz_naturel: "Non",
    Poste_detente: "Non",
    Etude_ATEX: "Non",
    Air_comprime: "",
    Chaudieres_certifiees: "Non",
    Inspection_periode: "Non",
    Tours_aerorefrigerantes: "Non",
    Groupe_froid: "Non",
    Maintenance_HVAC: "Non",
    Protection_antigel: "Non"
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("chapitre2", JSON.stringify(form));
    saveData(form);
    alert("Chapitre 2 sauvegardé !");
  };

  return (
    <div style={{ border: "1px solid gray", padding: "10px", marginBottom: "10px" }}>
      <h2>CHAPITRE 2 — UTILITÉS</h2>
      {Object.keys(form).map((key, idx) => (
        <div key={idx}>
          {["Poste_transformation","Redondance_alimentation","Tableaux_conformes","Thermographie","Mise_terre",
          "Protection_surtension","Groupe_secours","Maintenance_electricite","Resau_incendie_maillé",
          "Pompes_electrique","Pompes_diesel","Pompes_jockey","Tests_hebdomadaires","Etude_hydraulique",
          "RIA_operationnels","Gaz_naturel","Poste_detente","Etude_ATEX","Chaudieres_certifiees",
          "Inspection_periode","Tours_aerorefrigerantes","Groupe_froid","Maintenance_HVAC","Protection_antigel"].includes(key) ? (
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
      <button onClick={handleSave}>Sauvegarder Chapitre 2</button>
    </div>
  );
}

export default Chapitre2;
