import { savePDF } from '@progress/kendo-react-pdf';

class DocService {
  createPdf = (html) => {
    savePDF(html, {
      scale: 0.6,
      paperSize: 'Letter',
      fileName: 'project_overview.pdf',
      margin: 3
    })
  }
}

const DocumentService = new DocService();
export default DocumentService