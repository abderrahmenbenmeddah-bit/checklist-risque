import jsPDF from "jspdf";

export function generatePDF(data) {
  const doc = new jsPDF();
  let y = 10;
  doc.setFontSize(14);
  doc.text("Check-list Visite de Risque", 10, y);
  y += 10;

  for (const chapitre of Object.keys(data)) {
    doc.setFontSize(12);
    doc.text(chapitre, 10, y);
    y += 7;
    for (const key of Object.keys(data[chapitre])) {
      doc.setFontSize(10);
      doc.text(`${key}: ${data[chapitre][key]}`, 12, y);
      y += 5;
      if (y > 280) { doc.addPage(); y = 10; }
    }
    y += 5;
  }

  doc.save("CheckList_Risque.pdf");
}
