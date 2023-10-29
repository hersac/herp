import { TitlesMenu } from "./models/TitlesMenu";

const titlesArray = [
  new TitlesMenu("Maestros", "/masters"),
  new TitlesMenu("Terceros", "/thirds"),
  new TitlesMenu("Items", "/items"),
  new TitlesMenu("Inventario", "/inventary"),
  new TitlesMenu("Config", "/config")
];

const subTitleMasters = [
  new TitlesMenu("Compañia", "/masters/company"),
  new TitlesMenu("Instalaciones", "/masters/installations"),
  new TitlesMenu("Ubicaciones", "/masters/locations"),
  new TitlesMenu("Documentos", "/masters/documents")
];

export default {
  titlesArray,
  subTitleMasters
}
