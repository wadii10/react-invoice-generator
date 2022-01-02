import { ProductLine, Invoice } from './types'

export const initialProductLine: ProductLine = {
  ref:'',
  description: '',
  quantity: '1',
  prix: '0.00',
  remise:0,
  total:0,
  tva:0
}

export const initialInvoice: Invoice = {
  logo: '',
  logoWidth: 100,
  title: 'Facture',
  companyName: 'Ellouze',
  name: '',
  companyAddress: 'Tunisie',
  companyAddress2: '',
  companyCountry: 'United States',
  billTo: 'Bill To:',
  clientName: '',
  clientAddress: '',
  clientAddress2: '',
  clientCountry: 'United States',
  invoiceTitleLabel: 'Invoice#',
  invoiceTitle: '',
  invoiceDateLabel: 'Invoice Date',
  invoiceDate: '',
  invoiceDueDateLabel: 'Due Date',
  invoiceDueDate: '',
  productLineDescription: 'Item Description',
  productLineQuantity: 'Qty',
  productLineQuantityRate: 'Rate',
  productLineQuantityAmount: 'Amount',
  productLineRef:'Ref',
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
