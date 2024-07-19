# Peppol BIS Billing 3.0 TypeScript Definitions

This repository contains TypeScript definitions for Peppol BIS Billing 3.0 invoices with detailed TSDoc comments. These types help ensure type safety and provide comprehensive documentation directly in your code editor.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Types Included](#types-included)
- [Contributing](#contributing)
- [License](#license)

## Installation

To use these TypeScript definitions in your project, you can clone this repository or download the file directly.

```bash
git clone https://github.com/Selia-AI/peppol-bis-3-typescript
```

Alternatively, you can download the file manually from the repository.

## Usage

Import the types into your TypeScript project as follows:

```typescript
import { UBLInvoice, InvoiceLine, OrderReference, Amount, TaxTotal, ... } from './path/to/ubl-invoice-types';
```

Here is an example of how to use the types in your code:

```typescript
const invoice: UBLInvoice = {
  customizationID: 'urn:cen.eu:en16931:2017#compliant#urn:fdc:peppol.eu:2017:poacc:billing:3.0',
  profileID: 'urn:fdc:peppol.eu:2017:poacc:billing:01:1.0',
  id: '33445566',
  issueDate: '2017-11-01',
  dueDate: '2017-11-01',
  invoiceTypeCode: '380',
  documentCurrencyCode: 'EUR',
  taxTotal: [
    {
      taxAmount: { value: 486.25, currencyID: 'EUR' },
    },
  ],
  legalMonetaryTotal: {
    lineExtensionAmount: { value: 3800.0, currencyID: 'EUR' },
    taxExclusiveAmount: { value: 3600.0, currencyID: 'EUR' },
    taxInclusiveAmount: { value: 4500.0, currencyID: 'EUR' },
    payableAmount: { value: 3500.0, currencyID: 'EUR' },
  },
  invoiceLine: [
    {
      id: '12',
      invoicedQuantity: { value: 100, unitCode: 'C62' },
      lineExtensionAmount: { value: 2145.00, currencyID: 'EUR' },
      item: {
        name: 'Item name',
      },
      price: {
        priceAmount: { value: 23.45, currencyID: 'EUR' },
      },
    },
  ],
};
```

## Types Included

- `UBLInvoice`
- `InvoiceLine`
- `OrderReference`
- `Amount`
- `TaxTotal`
- `InvoicePeriod`
- `AdditionalDocumentReference`
- `BillingReference`
- `CardAccount`
- `CommodityClassification`
- `Contact`
- `Country`
- `CustomerParty`
- `Delivery`
- `DeliveryLocation`
- `DeliveryParty`
- `DocumentReference`
- `EndpointID`
- `ExternalReference`
- `FinancialAccount`
- `FinancialInstitutionBranch`
- `Item`
- `ItemIdentification`
- `LegalMonetaryTotal`
- `OrderLineReference`
- `Party`
- `PartyIdentification`
- `PartyLegalEntity`
- `PartyName`
- `PartyTaxScheme`
- `PayeeParty`
- `PaymentMandate`
- `PaymentMeans`
- `PaymentTerms`
- `PostalAddress`
- `Price`
- `ProjectReference`
- `Quantity`
- `StandardItemIdentification`
- `SupplierParty`
- `TaxCategory`
- `TaxRepresentativeParty`
- `TaxScheme`
- `TaxSubtotal`

## Source of Data

The data for this project comes from [Peppol BIS Billing 3.0 UBL Invoice](https://docs.peppol.eu/poacc/billing/3.0/syntax/ubl-invoice/tree/).

## Contributing

Contributions are welcome! If you have any suggestions, bug fixes, or enhancements, please create an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/Update`)
3. Commit your changes (`git commit -m 'Added Update'`)
4. Push to the branch (`git push origin feature/Update`)
5. Open a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
