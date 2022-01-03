import { ProductLine, Invoice } from './types'

export const initialProductLine: ProductLine = {
  ref:'',
  description: '',
  quantity: '1',
  prix: '0.00',
  remise:'0',
  tva:'0'
}

export const initialInvoice: Invoice = {
  logo: '',
  logoWidth: 100,
  title: 'Facture',
  companyName: 'Ellouze',
  name: '',
  companyAddress: 'Tunisie',
  companyAddress2: '',
  companyCountry: 'Tunisie',
  billTo: 'Client:',
  clientName: '',
  clientAddress: '',
  clientAddress2: '',
  clientCountry: 'Tunisie',
  invoiceTitleLabel: 'Facture N°',
  invoiceTitle: '',
  invoiceDateLabel: 'Date',
  invoiceDate: '',
  invoiceDueDateLabel: 'Due Date',
  invoiceDueDate: '',
  productLineDescription: 'Description',
  productLineQuantity: 'Qty',
  productLineQuantityRate: 'Prix',
  productLineQuantityAmount: 'Total TTC',
  productLineRef:'Ref',
  productLineRemise:'Remise',
  productLineTva:'TVA',
  productLines: [
   
  ],
  subTotalLabel: 'Sub Total',
  totalLabel: 'TOTAL',
  currency: 'TND',
  notesLabel: 'Notes',
  notes: 'It was great doing business with you.',
  termLabel: 'Terms & Conditions',
  term: 'Please make the payment by the due date.',
}
