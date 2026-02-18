import React, { useState } from "react";

function Chapitre5({ saveData }) {
  const [form, setForm] = useState({
    Politique_HSE: "Non",
    ISO_45001: "Non",
    ISO_14001: "Non",
    Responsable_HSE: "",
    Comites_securite: "Non",
    Etude_dangers: "Non",
    Analyse_HAZOP: "Non",
    DUER: "Non",
    Cartographie_risques: "Non",
    Plan_urgence: "Non",
    Detection_incendie: "Non",
    Centrale_alarme: "Non",
    Extincteurs: "Non",
    Signalisation: "Non",
    Issues_secours: "Non",
    Exercices_incendie: "Non",
    Formation_incendie: "Non",
    Formation_ATEX: "Non",
    Taux_accidents: "",
    Port_EPI: "Non",
    STEP: "Non",
    Stockage_dechets: "Non",
    Retention_hydrocarbures: "Non",
    Conformite_reglementaire: "Non",
    Risque_pollution: "Non"
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("chapitre5", JSON.stringify(form));
    saveData(form);
    alert("Chapitre 5 sauvegardé !");
  };

  return (
    <div style={{ border: "1px solid gray", padding: "10px", marginBottom: "10px" }}>
      <h2>CHAPITRE 5 — HSE</h2>
      {Object.keys(form).map((key, idx) => (
        <div key={idx}>
          {["Politique_HSE","ISO_45001","ISO_14001","Comites_securite","Etude_dangers","Analyse_HAZOP",
          "DUER","Cartographie_risques","Plan_urgence","Detection_incendie","Centrale_alarme","Extincteurs",
          "Signalisation","Issues_secours","Exercices_incendie","Formation_incendie","Formation_ATEX",
          "Port_EPI","STEP","Stockage_dechets","Retention_hydrocarbures","Conformite_reglementaire","Risque_pollution"].includes(key) ? (
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
      <button onClick={handleSave}>Sauvegarder Chapitre 5</button>
    </div>
  );
}

export default Chapitre5;
