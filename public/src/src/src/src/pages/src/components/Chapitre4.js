import React, { useState } from "react";

function Chapitre4({ saveData }) {
  const [form, setForm] = useState({
    Service_interne: "Non",
    Sous_traitance: "Non",
    GMAO: "Non",
    Plan_preventive: "Non",
    Taux_disponibilite: "",
    Controle_appareils: "Non",
    Controle_electrique: "Non",
    Levage_pont: "Non",
    Reservoirs_bacs: "Non",
    Verification_organismes: "Non",
    Permis_travail: "Non",
    Permis_feu: "Non",
    LOTOTO: "Non",
    MOC: "Non",
    Tracabilite: "Non",
    Incendies: "Non",
    Explosions: "Non",
    Bris_machines: "Non",
    Actions_correctives: "Non",
    Recurrence_incidents: ""
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("chapitre4", JSON.stringify(form));
    saveData(form);
    alert("Chapitre 4 sauvegardé !");
  };

  return (
    <div style={{ border: "1px solid gray", padding: "10px", marginBottom: "10px" }}>
      <h2>CHAPITRE 4 — MAINTENANCE & INSPECTION</h2>
      {Object.keys(form).map((key, idx) => (
        <div key={idx}>
          {["Service_interne","Sous_traitance","GMAO","Plan_preventive","Controle_appareils","Controle_electrique",
          "Levage_pont","Reservoirs_bacs","Verification_organismes","Permis_travail","Permis_feu","LOTOTO",
          "MOC","Tracabilite","Incendies","Explosions","Bris_machines","Actions_correctives"].includes(key) ? (
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
      <button onClick={handleSave}>Sauvegarder Chapitre 4</button>
    </div>
  );
}

export default Chapitre4;
