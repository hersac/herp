import { TitlesMenu } from "./models/TitlesMenu";

const subTitleMasters = [
  new TitlesMenu("Compañia", "/masters/company"),
  new TitlesMenu("Cuentas", "/masters/accounts"),
  new TitlesMenu("Documentos", "/masters/documents"),
  new TitlesMenu("Instalación", "/masters/installation"),
  new TitlesMenu("Ubicación", "/masters/location"),
  new TitlesMenu("Bodegas", "/masters/winary"),
];

const subTitleThirds = [
  new TitlesMenu("Gestion terceros", "/thirds/thirdsManagement"),
  new TitlesMenu("Clientes", "/thirds/clients"),
  new TitlesMenu("Proveedores", "/thirds/providers"),
  new TitlesMenu("Funcionarios", "/thirds/officials"),
];

const subTitleItems = [
  new TitlesMenu("Gestión ítems", "/items/itemManagement"),
  new TitlesMenu("Cotización", "/items/quotation"),
  new TitlesMenu("Gestión ítems", "/items/salesPrices"),
];

const subTitleBuy = [
  new TitlesMenu("Factura proveedor", "/buy/supplierInvoice"),
  new TitlesMenu("Solicitud", "/buy/request"),
  new TitlesMenu("Pedido", "/buy/wish"),
  new TitlesMenu("Orden de compra", "/buy/order"),
  new TitlesMenu("Entrada de almacén", "/buy/entranceWinery"),
];

const subTitleSale = [
  new TitlesMenu("Factura de venta", "/sale/saleInvoice"),
  new TitlesMenu("Nota Crédito", "/sale/creditNote"),
  new TitlesMenu("Nota Débito", "/sale/debitNote"),
  new TitlesMenu("Consumo", "/sale/expend"),
];

const subTitleInventary = [
  new TitlesMenu("Entrada directa", "/inventary/directEntry"),
  new TitlesMenu("Salida directa", "/inventary/directRemove"),
  new TitlesMenu("Traslados", "/inventary/transfers")
];

const subTitleQueriesReports = [
  new TitlesMenu("Existencias a la fecha", "/reports/stockDate"),
  new TitlesMenu("Existencias a un corte", "/reports/cuteOffDate"),
  new TitlesMenu("Movimientos de inventarios", "/reports/inventoryMove"),
  new TitlesMenu("Reporte de instalación", "/reports/installationReport"),
  new TitlesMenu("Reporte de bodega", "/reports/wineryReport"),
  new TitlesMenu("Balance de inventarios", "/reports/inventoryBalance")
];

const principalTitles = [
  new TitlesMenu("Maestros", "/masters", subTitleMasters),
  new TitlesMenu("Terceros", "/thirds", subTitleThirds),
  new TitlesMenu("Items", "/items", subTitleItems),
  new TitlesMenu("Compras", "/buy", subTitleBuy),
  new TitlesMenu("Ventas", "/sale", subTitleSale),
  new TitlesMenu("Inventario", "/inventary", subTitleInventary),
  new TitlesMenu("Consultas y Reportes", "/reports", subTitleQueriesReports),
  new TitlesMenu("Config", "/config")
];
export default principalTitles;
