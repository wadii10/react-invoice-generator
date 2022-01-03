import { CSSProperties } from 'react'

export interface ProductLine {
  ref: string,
  description: string
  quantity: string,
  tva: string,
  remise: string,
  prix: string
}

export interface Invoice {
  logo: string
  logoWidth: number
  title: string
  companyName: 'Ellouze'
  name: string
  companyAddress: 'Tunisie'
  companyAddress2: string
  companyCountry: string

  billTo: string
  clientName: string
  clientAddress: string
  clientAddress2: string
  clientCountry: string

  invoiceTitleLabel: string
  invoiceTitle: string
  invoiceDateLabel: string
  invoiceDate: string
  invoiceDueDateLabel: string
  invoiceDueDate: string

  productLineRef: string
  productLineDescription: string
  productLineQuantity: string
  productLineQuantityRate: string
  productLineQuantityAmount: string
  productLineRemise: string
  productLineTva: string
  
  productLines: ProductLine[]

  subTotalLabel: string

  totalLabel: string
  currency: string

  notesLabel: string
  notes: string
  termLabel: string
  term: string
}

export interface CSSClasses {
  [key: string]: CSSProperties
}
