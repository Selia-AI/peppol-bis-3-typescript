/**
 * Represents an invoice period.
 */
export type InvoicePeriod = {
  /**
   * Invoicing period start date.
   *
   * Example value: 2017-10-01
   *
   * The date when the Invoice period starts. Format = "YYYY-MM-DD".
   */
  StartDate?: string;
  /**
   * Invoicing period end date.
   *
   * Example value: 2017-10-31
   *
   * The date when the Invoice period ends. Format = "YYYY-MM-DD".
   */
  EndDate?: string;
  /**
   * Value added tax point date code.
   *
   * Example value: 35
   *
   * The code of the date when the VAT becomes accountable for the Seller and for the Buyer.
   */
  DescriptionCode?: string;
};

/**
 * Represents an order reference.
 */
export type OrderReference = {
  /**
   * Purchase order reference.
   *
   * Example value: 98776
   *
   * An identifier of a referenced purchase order, issued by the Buyer. An invoice must have buyer reference (BT-10) or purchase order reference. In cases where sales order reference is provided, but there's no purchase order reference, then use value "NA" as this element is mandatory in UBL.
   */
  ID: string;
  /**
   * Sales order reference.
   *
   * Example value: 112233
   *
   * An identifier of a referenced sales order, issued by the Seller. In cases where sales order reference is provided, but there's no purchase order reference, then set cac:OrderReference/cbc:ID to value "NA" as this element is mandatory in UBL.
   */
  SalesOrderId?: string;
};

/**
 * Represents a billing reference.
 */
export type BillingReference = {
  /**
   * Invoice document reference.
   *
   * The identification of an Invoice that was previously sent by the Seller.
   */
  InvoiceDocumentReference: DocumentReference;
};

/**
 * Represents a document reference.
 */
export type DocumentReference = {
  /**
   * Reference identifier.
   *
   * Example value: inv123
   *
   * The identification of an Invoice that was previously sent by the Seller.
   */
  ID: string;
  /**
   * Issue date.
   *
   * Example value: 2017-09-15
   *
   * The date when the Preceding Invoice was issued.Shall be provided in case the Preceding Invoice identifier is not unique. Format = "YYYY-MM-DD".
   */
  IssueDate?: string;
};

/**
 * Represents an additional document reference.
 */
export type AdditionalDocumentReference = {
  /**
   * Supporting document reference.
   *
   * Example value: AB23456
   *
   * An identifier for an object on which the invoice is based, given by the Seller, or the identifier for the supporting document.
   */
  ID: string;
  /**
   * Scheme identifier.
   *
   * Example value: AUN
   *
   * The identification scheme identifier of the Invoiced object identifier.
   */
  SchemeId?: string;
  /**
   * Document export type code.
   *
   * Default value: 130
   *
   * Code "130" MUST be used to indicate an invoice object reference. Not used for other additional documents.
   */
  DocumentTypeCode?: string;
  /**
   * Supporting document description.
   *
   * Example value: Time list
   *
   * A description of the supporting document, such as: timesheet, usage report etc.
   */
  DocumentDescription?: string;
  /** Attachment. */
  Attachment?: Attachment;
};

/**
 * Represents a project reference.
 */
export type ProjectReference = {
  /**
   * Project reference.
   *
   * Example value: PID33
   *
   * The identification of the project the invoice refers to.
   */
  ID: string;
};

/**
 * Represents a supplier party.
 */
export type SupplierParty = {
  /** Party. */
  Party: Party;
};

/**
 * Represents a customer party.
 */
export type CustomerParty = {
  /** Party. */
  Party: Party;
};

/**
 * Represents a payee party.
 */
export type PayeeParty = {
  /** Party identification. */
  PartyIdentification: PartyIdentification;
  /** Party name. */
  PartyName: PartyName;
  /** Party legal entity. */
  PartyLegalEntity?: PartyLegalEntity;
};

/**
 * Represents a tax representative party.
 */
export type TaxRepresentativeParty = {
  /** Seller tax representative name. */
  PartyName: PartyName;
  /** Seller tax representative postal address. */
  PostalAddress: PostalAddress;
  /** Party VAT identifier. */
  PartyTaxScheme: PartyTaxScheme;
};

/**
 * Represents a delivery.
 */
export type Delivery = {
  /**
   * Actual delivery date.
   *
   * Example value: 2017-12-01
   *
   * The date on which the supply of goods or services was made or completed. Format = "YYYY-MM-DD".
   */
  ActualDeliveryDate?: string;
  /** Delivery location. */
  DeliveryLocation?: DeliveryLocation;
  /** Deliver to address. */
  Address?: Address;
  /** Delivery party. */
  DeliveryParty?: DeliveryParty;
};

/**
 * Represents a payment means.
 */
export type PaymentMeans = {
  /**
   * Payment means export type code.
   *
   * Example value: 30
   *
   * The means, expressed as code, for how a payment is expected to be or has been settled.
   */
  PaymentMeansCode: string;
  /**
   * Remittance information.
   *
   * Example value: 432948234234234
   *
   * A textual value used to establish a link between the payment and the Invoice, issued by the Seller. Used for creditor's critical reconciliation information. This information element helps the Seller to assign an incoming payment to the relevant payment process.
   */
  PaymentId?: string;
  /** Payment card information. */
  CardAccount?: CardAccount;
  /** Credit transfer. */
  PayeeFinancialAccount?: FinancialAccount;
  /** Direct debit. */
  PaymentMandate?: PaymentMandate;
};

/**
 * Represents payment terms.
 */
export type PaymentTerms = {
  /**
   * Payment terms.
   *
   * Example value: Net within 30 days
   *
   * A textual description of the payment terms that apply to the amount due for payment (Including description of possible penalties). In case the Amount due for payment (BT-115) is positive, either the Payment due date (BT-9) or the Payment terms (BT-20) shall be present.
   */
  Note: string;
};

/**
 * Represents an allowance charge.
 */
export type AllowanceCharge = {
  /**
   * Charge indicator.
   *
   * Example value: false
   *
   * Use “true” when informing about Charges and “false” when informing about Allowances.
   */
  ChargeIndicator: boolean;
  /**
   * Document level allowance or charge reason code.
   *
   * Example value: 95
   *
   * The reason for the document level allowance or charge, expressed as a code. For allowances a subset of codelist UNCL5189 is to be used, and for charges codelist UNCL7161 applies. The Document level allowance reason code and the Document level allowance reason shall indicate the same allowance reason.
   */
  AllowanceChargeReasonCode?: string;
  /**
   * Document level allowance or charge reason.
   *
   * Example value: Discount
   *
   * The reason for the document level allowance or charge, expressed as text. The Document level allowance reason code and the Document level allowance reason shall indicate the same allowance reason.
   */
  AllowanceChargeReason?: string;
  /**
   * Document level allowance or charge percentage.
   *
   * Example value: 20
   *
   * The percentage that may be used, in conjunction with the document level allowance base amount, to calculate the document level allowance or charge amount. To state 20%, use value 20.
   */
  MultiplierFactorNumeric?: number;
  /** Document level allowance or charge amount. */
  Amount: Amount;
  /**
   * Document level allowance or charge base amount.
   *
   * The base amount that may be used, in conjunction with the document level allowance or charge percentage, to calculate the document level allowance or charge amount. Must be rounded to maximum 2 decimals.
   */
  BaseAmount?: Amount;
  /** Tax category. */
  TaxCategory: TaxCategory;
};

/**
 * Represents a tax total.
 */
export type TaxTotal = {
  /**
   * Invoice total VAT amount.
   *
   * Example value: 486.25
   *
   * The total VAT amount for the Invoice or the VAT total amount expressed in the accounting currency accepted or required in the country of the Seller. Must be rounded to maximum 2 decimals.
   */
  TaxAmount: Amount;
  /** VAT breakdown. */
  TaxSubtotal?: TaxSubtotal[];
};

/**
 * Represents legal monetary total.
 */
export type LegalMonetaryTotal = {
  /**
   * Sum of Invoice line net amount.
   *
   * Example value: 3800.0
   *
   * Sum of all Invoice line net amounts in the Invoice. Must be rounded to maximum 2 decimals.
   */
  LineExtensionAmount: Amount;
  /**
   * Invoice total amount without VAT.
   *
   * Example value: 3600.0
   *
   * The total amount of the Invoice without VAT. Must be rounded to maximum 2 decimals.
   */
  TaxExclusiveAmount: Amount;
  /**
   * Invoice total amount with VAT.
   *
   * Example value: 4500.0
   *
   * The total amount of the Invoice with VAT. Must be rounded to maximum 2 decimals.
   */
  TaxInclusiveAmount: Amount;
  /**
   * Sum of allowances on document level.
   *
   * Example value: 200.0
   *
   * Sum of all allowances on document level in the Invoice. Must be rounded to maximum 2 decimals.
   */
  AllowanceTotalAmount?: Amount;
  /**
   * Sum of charges on document level.
   *
   * Example value: 0.0
   *
   * Sum of all charges on document level in the Invoice. Must be rounded to maximum 2 decimals.
   */
  ChargeTotalAmount?: Amount;
  /**
   * Paid amount.
   *
   * Example value: 1000.0
   *
   * The sum of amounts which have been paid in advance. Must be rounded to maximum 2 decimals.
   */
  PrepaidAmount?: Amount;
  /**
   * Rounding amount.
   *
   * Example value: 0.0
   *
   * The amount to be added to the invoice total to round the amount to be paid. Must be rounded to maximum 2 decimals.
   */
  PayableRoundingAmount?: Amount;
  /**
   * Amount due for payment.
   *
   * Example value: 3500.0
   *
   * The outstanding amount that is requested to be paid. Must be rounded to maximum 2 decimals.
   */
  PayableAmount: Amount;
};

/**
 * Represents an invoice line.
 */
export type InvoiceLine = {
  /**
   * Invoice line identifier.
   *
   * Example value: 12
   *
   * A unique identifier for the individual line within the Invoice.
   */
  ID: string;
  /**
   * Invoice line note.
   *
   * Example value: New article number 12345
   *
   * A textual note that gives unstructured information that is relevant to the Invoice line.
   */
  Note?: string;
  /** Invoiced quantity. */
  InvoicedQuantity: Quantity;
  /** Invoice line net amount. */
  LineExtensionAmount: Amount;
  /**
   * Invoice line Buyer accounting reference.
   *
   * Example value: 1287:65464
   *
   * A textual value that specifies where to book the relevant data into the Buyer's financial accounts.
   */
  AccountingCost?: string;
  /** Invoice line period. */
  InvoicePeriod?: InvoicePeriod;
  /** Order line reference. */
  OrderLineReference?: OrderLineReference;
  /** Line object identifier. */
  DocumentReference?: DocumentReference;
  /** Invoice line allowances or charges. */
  AllowanceCharge?: AllowanceCharge[];
  /** Item information. */
  Item: Item;
  /** Price details. */
  Price: Price;
};

/**
 * Represents a party.
 */
export type Party = {
  /** Seller electronic address. */
  EndpointID: EndpointID;
  /** Party identification. */
  PartyIdentification?: PartyIdentification[];
  /** Party name. */
  PartyName: PartyName;
  /** Postal address. */
  PostalAddress: PostalAddress;
  /** Party VAT/Tax identifiers. */
  PartyTaxScheme?: PartyTaxScheme[];
  /** Party legal entity. */
  PartyLegalEntity: PartyLegalEntity;
  /** Contact. */
  Contact?: Contact;
};

/**
 * Represents party identification.
 */
export type PartyIdentification = {
  /**
   * Seller identifier or bank assigned creditor identifier.
   *
   * Example value: 5060012349998
   *
   * This element is used for both the identification of the Seller, or the unique banking reference identifier of Seller (assigned by the Seller bank.). For seller identification use ICD code list, for SEPA bank assigned creditor reference, use SEPA. In order for the buyer to automatically identify a supplier, the Seller identifier (BT-29), the Seller legal registration identifier (BT-30) and/or the Seller VAT identifier (BT-31) shall be present.
   */
  ID: string;
  /**
   * Seller or bank assigned creditor identifier identification scheme identifier.
   *
   * Example value: 0088
   *
   * The identification scheme identifier of the Seller identifier. For bank assigned creditor identifier (BT-90), value MUST be "SEPA".
   */
  SchemeId?: string;
};

/**
 * Represents a party name.
 */
export type PartyName = {
  /**
   * Seller trading name.
   *
   * Example value: Seller Business Name AS
   *
   * A name by which the Seller is known, other than Seller name (also known as Business name).
   */
  Name: string;
};

/**
 * Represents a postal address.
 */
export type PostalAddress = {
  /**
   * Seller address line 1.
   *
   * Example value: Main Street 1
   *
   * The main address line in an address.
   */
  StreetName?: string;
  /**
   * Seller address line 2.
   *
   * Example value: Po Box 351
   *
   * An additional address line in an address that can be used to give further details supplementing the main line.
   */
  AdditionalStreetName?: string;
  /**
   * Seller city.
   *
   * Example value: London
   *
   * The common name of the city, town or village, where the Seller address is located.
   */
  CityName?: string;
  /**
   * Seller post code.
   *
   * Example value: W1G 8LZ
   *
   * The identifier for an addressable group of properties according to the relevant postal service.
   */
  PostalZone?: string;
  /**
   * Seller country subdivision.
   *
   * Example value: Region A
   *
   * The subdivision of a country.
   */
  CountrySubentity?: string;
  /** Address line. */
  AddressLine?: AddressLine;
  /** Country. */
  Country: Country;
};

/**
 * Represents an address line.
 */
export type AddressLine = {
  /**
   * Seller address line 3.
   *
   * Example value: Building 23
   *
   * An additional address line in an address that can be used to give further details supplementing the main line.
   */
  Line: string;
};

/**
 * Represents a country.
 */
export type Country = {
  /**
   * Seller country code.
   *
   * Example value: GB
   *
   * A code that identifies the country.
   */
  IdentificationCode: string;
};

/**
 * Represents a party tax scheme.
 */
export type PartyTaxScheme = {
  /**
   * Seller VAT identifier, Seller tax registration identifier.
   *
   * Example value: NO999888777
   *
   * The Seller's VAT identifier (also known as Seller VAT identification number) or the local identification (defined by the Seller’s address) of the Seller for tax purposes or a reference that enables the Seller to state his registered tax status. In order for the buyer to automatically identify a supplier, the Seller identifier (BT-29), the Seller legal registration identifier (BT-30) and/or the Seller VAT identifier (BT-31) shall be present.
   */
  CompanyID: string;
  /** Tax scheme. */
  TaxScheme: TaxScheme;
};

/**
 * Represents a tax scheme.
 */
export type TaxScheme = {
  /**
   * Mandatory element.
   *
   * Use “VAT”.
   *
   * Example value: VAT
   *
   * For Seller VAT identifier (BT-31), use value “VAT”, for the seller tax registration identifier (BT-32), use != "VAT".
   */
  ID: string;
};

/**
 * Represents a party legal entity.
 */
export type PartyLegalEntity = {
  /**
   * Seller name.
   *
   * Example value: Full Formal Seller Name LTD.
   *
   * The full formal name by which the Seller is registered in the national registry of legal entities or as a Taxable person or otherwise trades as a person or persons.
   */
  RegistrationName: string;
  /**
   * Seller legal registration identifier.
   *
   * Example value: 987654321
   *
   * An identifier issued by an official registrar that identifies the Seller as a legal entity or person. In order for the buyer to automatically identify a supplier, the Seller identifier (BT-29), the Seller legal registration identifier (BT-30) and/or the Seller VAT identifier (BT-31) shall be present.
   */
  CompanyId?: string;
  /**
   * Seller legal registration identifier identification scheme identifier.
   *
   * Example value: 0002
   *
   * The identification scheme identifier of the Seller legal registration identifier.
   */
  SchemeId?: string;
  /**
   * Seller additional legal information.
   *
   * Example value: Share capital
   *
   * Additional legal information relevant for the Seller.
   */
  CompanyLegalForm?: string;
};

/**
 * Represents a contact.
 */
export type Contact = {
  /**
   * Seller contact point.
   *
   * Example value: xyz123
   *
   * A contact point for a legal entity or person.
   */
  Name?: string;
  /**
   * Seller contact telephone number.
   *
   * Example value: 887 654 321
   *
   * A phone number for the contact point.
   */
  Telephone?: string;
  /**
   * Seller contact email address.
   *
   * Example value: test.name@foo.bar
   *
   * An e-mail address for the contact point.
   */
  ElectronicMail?: string;
};

/**
 * Represents a delivery location.
 */
export type DeliveryLocation = {
  /**
   * Deliver to location identifier.
   *
   * Example value: 83745498753497
   *
   * An identifier for the location at which the goods and services are delivered.
   */
  ID: string;
  /**
   * Deliver to location identifier identification scheme identifier.
   *
   * Example value: 0088
   *
   * The identification scheme identifier of the Deliver to location identifier.
   */
  SchemeId?: string;
};

/**
 * Represents an address.
 */
export type Address = {
  /**
   * Deliver to address line 1.
   *
   * Example value: Delivery Street 1
   *
   * The main address line in an address.
   */
  StreetName?: string;
  /**
   * Deliver to address line 2.
   *
   * Example value: Delivery Street 2
   *
   * An additional address line in an address that can be used to give further details supplementing the main line.
   */
  AdditionalStreetName?: string;
  /**
   * Deliver to city.
   *
   * Example value: Malmö
   *
   * The common name of the city, town or village, where the deliver to address is located.
   */
  CityName?: string;
  /**
   * Deliver to post code.
   *
   * Example value: 86756
   *
   * The identifier for an addressable group of properties according to the relevant postal service.
   */
  PostalZone?: string;
  /**
   * Deliver to country subdivision.
   *
   * Example value: South Region
   *
   * The subdivision of a country.
   */
  CountrySubentity?: string;
  /** Address line. */
  AddressLine?: AddressLine;
  /** Country. */
  Country: Country;
};

/**
 * Represents a delivery party.
 */
export type DeliveryParty = {
  /**
   * Deliver to party name.
   *
   * Example value: Deliver name
   *
   * The name of the party to which the goods and services are delivered.
   */
  PartyName: PartyName;
};

/**
 * Represents a card account.
 */
export type CardAccount = {
  /**
   * Payment card primary account number.
   *
   * Example value: 1234
   *
   * The Primary Account Number (PAN) of the card used for payment.In accordance with card payments security standards, an invoice should never include a full card primary account number.
   */
  PrimaryAccountNumberID: string;
  /**
   * Network ID.
   *
   * Example value: NA
   *
   * Syntax required element not related to a business term.
   */
  NetworkID: string;
  /**
   * Payment card holder name.
   *
   * Example value: John Doe
   *
   * The name of the payment card holder.
   */
  HolderName?: string;
};

/**
 * Represents a financial account.
 */
export type FinancialAccount = {
  /**
   * Payment account identifier.
   *
   * Example value: NO99991122222
   *
   * A unique identifier of the financial payment account, at a payment service provider, to which payment should be made. Such as IBAN or BBAN.
   */
  ID: string;
  /**
   * Payment account name.
   *
   * Example value: Payment Account
   *
   * The name of the payment account, at a payment service provider, to which payment should be made.
   */
  Name?: string;
  /** Financial institution branch. */
  FinancialInstitutionBranch?: FinancialInstitutionBranch;
};

/**
 * Represents a financial institution branch.
 */
export type FinancialInstitutionBranch = {
  /**
   * Payment service provider identifier.
   *
   * Example value: 9999
   *
   * An identifier for the payment service provider where a payment account is located. Such as a BIC or a national clearing code where required. No identification scheme Identifier to be used.
   */
  ID: string;
};

/**
 * Represents a payment mandate.
 */
export type PaymentMandate = {
  /**
   * Mandate reference identifier.
   *
   * Example value: 123456
   *
   * Unique identifier assigned by the Payee for referencing the direct debit mandate. Used in order to pre-notify the Buyer of a SEPA direct debit.
   */
  ID: string;
  /** Payer financial account. */
  PayerFinancialAccount?: FinancialAccount;
};

/**
 * Represents an amount.
 */
export type Amount = {
  /** Amount value. */
  Value: number;
  /**
   * Currency ID.
   *
   * Example value: EUR
   *
   * The currency in which all Invoice amounts are given, except for the Total VAT amount in accounting currency. Only one currency shall be used in the Invoice, except for the VAT accounting currency code (BT-6) and the invoice total VAT amount in accounting currency (BT-111).
   */
  CurrencyID: string;
};

/**
 * Represents a quantity.
 */
export type Quantity = {
  /** Quantity value. */
  Value: number;
  /**
   * Invoiced quantity unit of measure.
   *
   * Example value: C62
   *
   * The unit of measure that applies to the invoiced quantity. Codes for unit of packaging from UNECE Recommendation No. 21 can be used in accordance with the descriptions in the "Intro" section of UN/ECE Recommendation 20, Revision 11 (2015): The 2 character alphanumeric code values in UNECE Recommendation 21 shall be used. To avoid duplication with existing code values in UNECE Recommendation No. 20, each code value from UNECE Recommendation 21 shall be prefixed with an “X”, resulting in a 3 alphanumeric code when used as a unit of measure.
   */
  UnitCode: string;
};

/**
 * Represents an order line reference.
 */
export type OrderLineReference = {
  /**
   * Referenced purchase order line reference.
   *
   * Example value: 3
   *
   * An identifier for a referenced line within a purchase order, issued by the Buyer.
   */
  LineID: string;
};

/**
 * Represents an item.
 */
export type Item = {
  /**
   * Item description.
   *
   * Example value: Long description of the item on the invoice line
   *
   * A description for an item.The item description allows for describing the item and its features in more detail than the Item name.
   */
  Description?: string;
  /**
   * Item name.
   *
   * Example value: Item name
   *
   * A name for an item.
   */
  Name: string;
  /** Buyers item identification. */
  BuyersItemIdentification?: ItemIdentification;
  /** Sellers item identification. */
  SellersItemIdentification?: ItemIdentification;
  /** Standard item identification. */
  StandardItemIdentification?: StandardItemIdentification;
  /** Origin country. */
  OriginCountry?: Country;
  /** Commodity classification. */
  CommodityClassification?: CommodityClassification[];
  /** Line VAT information. */
  ClassifiedTaxCategory: ClassifiedTaxCategory;
  /** Item attributes. */
  AdditionalItemProperty?: AdditionalItemProperty[];
};

/**
 * Represents an item identification.
 */
export type ItemIdentification = {
  /**
   * Item identifier.
   *
   * Example value: 123455
   *
   * An identifier, assigned by the Buyer, for the item.
   */
  ID: string;
};

/**
 * Represents a standard item identification.
 */
export type StandardItemIdentification = {
  /**
   * Item standard identifier.
   *
   * Example value: 10986700
   *
   * An item identifier based on a registered scheme.
   */
  ID: string;
  /**
   * Item standard identifier identification scheme identifier.
   *
   * Example value: 0160
   *
   * The identification scheme identifier of the Item standard identifier.
   */
  SchemeID: string;
};

/**
 * Represents a commodity classification.
 */
export type CommodityClassification = {
  /**
   * Item classification identifier.
   *
   * Example value: 9873242
   *
   * A code for classifying the item by its type or nature.
   */
  ItemClassificationCode: string;
  /**
   * Item classification identifier identification scheme identifier.
   *
   * Example value: STI
   *
   * The identification scheme identifier of the Item classification identifier.
   */
  ListID: string;
  /** Item classification identifier version identification scheme identifier. */
  ListVersionId?: string;
};

/**
 * Represents a classified tax category.
 */
export type ClassifiedTaxCategory = {
  /**
   * Invoiced item VAT category code.
   *
   * Example value: S
   *
   * The VAT category code for the invoiced item.
   */
  ID: string;
  /**
   * Invoiced item VAT rate.
   *
   * Example value: 25
   *
   * The VAT rate, represented as percentage that applies to the invoiced item.
   */
  Percent?: number;
  /** Tax scheme. */
  TaxScheme: TaxScheme;
};

/**
 * Represents an additional item property.
 */
export type AdditionalItemProperty = {
  /**
   * Item attribute name.
   *
   * Example value: Color
   *
   * The name of the attribute or property of the item.
   */
  Name: string;
  /**
   * Item attribute value.
   *
   * Example value: Black
   *
   * The value of the attribute or property of the item.
   */
  Value: string;
};

/**
 * Represents a price.
 */
export type Price = {
  /**
   * Item net price.
   *
   * Example value: 23.45
   *
   * The price of an item, exclusive of VAT, after subtracting item price discount. The Item net price has to be equal with the Item gross price less the Item price discount, if they are both provided. Item price can not be negative.
   */
  PriceAmount: Amount;
  /** Item price base quantity. */
  BaseQuantity?: Quantity;
  /** Allowance. */
  AllowanceCharge?: AllowanceCharge;
};

/**
 * Represents an attachment.
 */
export type Attachment = {
  /**
   * Attached document.
   *
   * Example value: aHR0cHM6Ly90ZXN0LXZlZmEuZGlmaS5uby9wZXBwb2xiaXMvcG9hY2MvYmlsbGluZy8zLjAvYmlzLw==
   *
   * An attached document embedded as binary object (Base64) or sent together with the invoice.
   */
  EmbeddedDocumentBinaryObject: string;
  /**
   * Attached document Mime code.
   *
   * Example value: text/csv
   *
   * The mime code of the attached document.
   */
  MimeCode: string;
  /**
   * Attached document Filename.
   *
   * Example value: Hours-spent.csv
   *
   * The file name of the attached document.
   */
  Filename: string;
  /** External reference. */
  ExternalReference?: ExternalReference;
};

/**
 * Represents an external reference.
 */
export type ExternalReference = {
  /**
   * External document location.
   *
   * Example value: http://www.example.com/index.html
   *
   * The URL (Uniform Resource Locator) that identifies where the external document is located. A means of locating the resource, including its primary access mechanism, e.g. http:// or ftp://.
   */
  URI: string;
};

/**
 * Represents a tax category.
 */
export type TaxCategory = {
  /**
   * Document level allowance or charge VAT category code.
   *
   * Example value: S
   *
   * A coded identification of what VAT category applies to the document level allowance or charge.
   */
  ID: string;
  /**
   * Document level allowance or charge VAT rate.
   *
   * Example value: 25
   *
   * The VAT rate, represented as percentage that applies to the document level allowance or charge.
   */
  Percent?: number;
  /** Tax scheme. */
  TaxScheme: TaxScheme;
};

/**
 * Represents a tax subtotal.
 */
export type TaxSubtotal = {
  /**
   * VAT category taxable amount.
   *
   * Example value: 1945.00
   *
   * Sum of all taxable amounts subject to a specific VAT category code and VAT category rate (if the VAT category rate is applicable). Must be rounded to maximum 2 decimals.
   */
  TaxableAmount: Amount;
  /**
   * VAT category tax amount.
   *
   * Example value: 486.25
   *
   * The total VAT amount for a given VAT category. Must be rounded to maximum 2 decimals.
   */
  TaxAmount: Amount;
  /** VAT category. */
  TaxCategory: TaxCategory;
};

/**
 * Represents an endpoint identifier.
 */
export type EndpointID = {
  /**
   * Identifier value.
   *
   * Example value: 7300010000001
   *
   * Identifies the Seller's electronic address to which the application level response to the invoice may be delivered.
   */
  Value: string;
  /**
   * Identification scheme identifier.
   *
   * Example value: 0088
   *
   * The identification scheme identifier of the Seller electronic address.
   */
  SchemeID: string;
};

/**
 * Represents a UBL invoice.
 */
export type UBLInvoice = {
  /**
   * Specification identifier.
   *
   * Default value: urn:cen.eu:en16931:2017#compliant#urn:fdc:peppol.eu:2017:poacc:billing:3.0
   *
   * An identification of the specification containing the total set of rules regarding semantic content, cardinalities and business rules to which the data contained in the instance document conforms.
   */
  CustomizationID: string;
  /**
   * Business process type.
   *
   * Default value: urn:fdc:peppol.eu:2017:poacc:billing:01:1.0
   *
   * Identifies the business process context in which the transaction appears, to enable the Buyer to process the Invoice in an appropriate way.
   */
  ProfileID: string;
  /**
   * Invoice number.
   *
   * Example value: 33445566
   *
   * A unique identification of the Invoice. The sequential number required in Article 226(2) of the directive 2006/112/EC [2], to uniquely identify the Invoice within the business context, time-frame, operating systems and records of the Seller. No identification scheme is to be used.
   */
  ID: string;
  /**
   * Invoice issue date.
   *
   * Format "YYYY-MM-DD".
   *
   * Example value: 2017-11-01
   *
   * The date when the Invoice was issued. Format "YYYY-MM-DD".
   */
  IssueDate: string;
  /**
   * Payment due date.
   *
   * Format "YYYY-MM-DD".
   *
   * Example value: 2017-11-01
   *
   * The date when the payment is due.Format "YYYY-MM-DD". In case the Amount due for payment (BT-115) is positive, either the Payment due date (BT-9) or the Payment terms (BT-20) shall be present.
   */
  DueDate?: string;
  /**
   * Invoice type code.
   *
   * Example value: 380
   *
   * A code specifying the functional type of the Invoice.
   *
   */
  InvoiceTypeCode: string;
  /**
   * Invoice note.
   *
   * Example value: Please note our new phone number 33 44 55 66
   *
   * A textual note that gives unstructured information that is relevant to the Invoice as a whole.Such as the reason for any correction or assignment note in case the invoice has been factored.
   */
  Note?: string;
  /**
   * Value added tax point date.
   *
   * Example value: 2017-11-01
   *
   * The date when the VAT becomes accountable for the Seller and for the Buyer in so far as that date can be determined and differs from the date of issue of the invoice, according to the VAT directive.This element is required if the Value added tax point date is different from the Invoice issue date.
   */
  TaxPointDate?: string;
  /**
   * Invoice currency code.
   *
   * Example value: EUR
   *
   * The currency in which all Invoice amounts are given, except for the Total VAT amount in accounting currency. Only one currency shall be used in the Invoice, except for the VAT accounting currency code (BT-6) and the invoice total VAT amount in accounting currency (BT-111).
   */
  DocumentCurrencyCode: string;
  /**
   * VAT accounting currency code.
   *
   * Example value: SEK
   *
   * The currency used for VAT accounting and reporting purposes as accepted or required in the country of the Seller. Shall be used in combination with the Invoice total VAT amount in accounting currency (BT-111), when the VAT accounting currency code differs from the Invoice currency code.
   */
  TaxCurrencyCode?: string;
  /**
   * Buyer accounting reference.
   *
   * Example value: 4217:2323:2323
   *
   * A textual value that specifies where to book the relevant data into the Buyer's financial accounts.
   */
  AccountingCost?: string;
  /**
   * Buyer reference.
   *
   * Example value: abs1234
   *
   * An identifier assigned by the Buyer used for internal routing purposes. An invoice must have buyer reference or purchase order reference (BT-13).
   */
  BuyerReference?: string;
  /** Delivery or invoice period. */
  InvoicePeriod?: InvoicePeriod;
  /** Order and sales order reference. */
  OrderReference?: OrderReference;
  /** Preceding invoice reference. */
  BillingReference?: BillingReference[];
  /** Despatch advice reference. */
  DespatchDocumentReference?: DocumentReference;
  /** Receipt advice reference. */
  ReceiptDocumentReference?: DocumentReference;
  /** Tender or lot reference. */
  OriginatorDocumentReference?: DocumentReference;
  /** Contract reference. */
  ContractDocumentReference?: DocumentReference;
  /** Additional supporting documents. */
  AdditionalDocumentReference?: AdditionalDocumentReference[];
  /** Project reference. */
  ProjectReference?: ProjectReference;
  /** Seller. */
  AccountingSupplierParty: SupplierParty;
  /** Buyer. */
  AccountingCustomerParty: CustomerParty;
  /** Payee. */
  PayeeParty?: PayeeParty;
  /** Seller tax representative party. */
  TaxRepresentativeParty?: TaxRepresentativeParty;
  /** Delivery information. */
  Delivery?: Delivery;
  /** Payment instructions. */
  PaymentMeans?: PaymentMeans[];
  /**
   * Payment terms.
   *
   * Example value: Net within 30 days
   *
   * A textual description of the payment terms that apply to the amount due for payment (Including description of possible penalties). In case the Amount due for payment (BT-115) is positive, either the Payment due date (BT-9) or the Payment terms (BT-20) shall be present.
   */
  PaymentTerms?: PaymentTerms;
  /** Document level allowances and charges. */
  AllowanceCharge?: AllowanceCharge[];
  /** Tax total. */
  TaxTotal: TaxTotal[];
  /** Document totals. */
  LegalMonetaryTotal: LegalMonetaryTotal;
  /** Invoice line. */
  InvoiceLine: InvoiceLine[];
};
