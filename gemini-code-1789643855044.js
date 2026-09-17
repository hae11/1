function generateWord() {
  const name = document.getElementById('applicantName').value || '未填寫';
  const item = document.getElementById('reimburseItem').value || '未填寫';
  const amount = document.getElementById('amount').value || '0';

  const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType } = docx;

  // 建立 Word 文件結構
  const doc = new Document({
    sections: [{
      properties: {},
      children: [
        new Paragraph({
          children: [
            new TextRun({ text: "經費核銷請款單", bold: true, size: 36 }),
          ],
          alignment: docx.AlignmentType.CENTER,
          space: { after: 400 }
        }),
        new Paragraph({
          children: [
            new TextRun({ text: `申請日期：${new Date().toLocaleDateString('zh-TW')}`, size: 24 }),
          ],
          space: { after: 200 }
        }),
        // 建立表格
        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: [
            new TableRow({
              children: [
                new TableCell({ children: [new Paragraph("申請人")] }),
                new TableCell({ children: [new Paragraph(name)] }),
              ],
            }),
            new TableRow({
              children: [
                new TableCell({ children: [new Paragraph("核銷項目")] }),
                new TableCell({ children: [new Paragraph(item)] }),
              ],
            }),
            new TableRow({
              children: [
                new TableCell({ children: [new Paragraph("請款總金額")] }),
                new TableCell({ children: [new Paragraph(`NT$ ${amount}`)] }),
              ],
            }),
          ],
        }),
      ],
    }],
  });

  // 打包並觸發瀏覽器下載
  Packer.toBlob(doc).then(blob => {
    saveAs(blob, `核銷請款單_${name}.docx`);
  });
}
