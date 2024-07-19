# Peppol BIS Billing 3.0 TypeScript Definitions

This repository contains TypeScript definitions for Peppol BIS Billing 3.0 invoices with detailed TSDoc comments. These types help ensure type safety and provide comprehensive documentation directly in your code editor.

![Example](example_image.png?raw=true "Example")

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
  CustomizationID: 'urn:cen.eu:en16931:2017#compliant#urn:fdc:peppol.eu:2017:poacc:billing:3.0',
  ProfileID: 'urn:fdc:peppol.eu:2017:poacc:billing:01:1.0',
  ID: '33445566',
  IssueDate: '2017-11-01',
  DueDate: '2017-11-01',
  InvoiceTypeCode: '380',
  DocumentCurrencyCode: 'EUR',
  TaxTotal: [
    {
      TaxAmount: { Value: 486.25, CurrencyID: 'EUR' },
    },
  ],
  LegalMonetaryTotal: {
    LineExtensionAmount: { Value: 3800.0, CurrencyID: 'EUR' },
    TaxExclusiveAmount: { Value: 3600.0, CurrencyID: 'EUR' },
    TaxInclusiveAmount: { Value: 4500.0, CurrencyID: 'EUR' },
    PayableAmount: { Value: 3500.0, CurrencyID: 'EUR' },
  },
  InvoiceLine: [
    {
      ID: '12',
      InvoicedQuantity: { Value: 100, UnitCode: 'C62' },
      LineExtensionAmount: { Value: 2145.00, CurrencyID: 'EUR' },
      Item: {
        Name: 'Item name',
      },
      Price: {
        PriceAmount: { Value: 23.45, CurrencyID: 'EUR' },
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
