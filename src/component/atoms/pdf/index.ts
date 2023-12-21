import { Options, Resolution } from "react-to-pdf";
import generatePdf from 'react-to-pdf';

export { generatePdf };
export function getOptions(method: Options['method'], ...initialName: string[]): Options {
  const pattern = /[.\s]+/;
  const fromFile: string = initialName.map(x => x.trim().split(pattern)).flat().join("_").trim();
  const uniqueName: string = fromFile.charAt(0) === "-" ? fromFile : "-".concat(fromFile).trim();
  const filename: string = "report".concat(uniqueName, ".pdf").trim();
  const resolution = Resolution.NORMAL;
  const page: Options['page'] = {
    format: "A4",
    margin: 0,
    orientation: "portrait",
  }

  const overrides: Options['overrides'] = {
    pdf: { compress: true },
    canvas: { useCORS: true },
  }

  return { method, filename, resolution, page, overrides }
}