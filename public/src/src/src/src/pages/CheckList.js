import React, { useState } from "react";
import Chapitre1 from "../components/Chapitre1";
import Chapitre2 from "../components/Chapitre2";
import Chapitre3 from "../components/Chapitre3";
import Chapitre4 from "../components/Chapitre4";
import Chapitre5 from "../components/Chapitre5";
import { generatePDF } from "../generatePDF";

function CheckList() {
  const [allData, setAllData] = useState({});

  const collectData = (chapitre, data) => {
    setAllData(prev => ({ ...prev, [chapitre]: data }));
  };

  return (
    <div>
      <Chapitre1 saveData={data => collectData("Chapitre 1", data)} />
      <Chapitre2 saveData={data => collectData("Chapitre 2", data)} />
      <Chapitre3 saveData={data => collectData("Chapitre 3", data)} />
      <Chapitre4 saveData={data => collectData("Chapitre 4", data)} />
      <Chapitre5 saveData={data => collectData("Chapitre 5", data)} />

      <button 
        style={{ marginTop: "20px", padding: "10px 20px" }}
        onClick={() => generatePDF(allData)}
      >
        Générer PDF
      </button>
    </div>
  );
}

export default CheckList;
