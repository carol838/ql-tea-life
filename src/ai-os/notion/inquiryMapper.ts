import { createUnknownInquiryName, type Inquiry } from '../domain/inquiry.js';

export type NotionPropertyValue = {
  type?: string;
  title?: Array<{ plain_text?: string }>;
  rich_text?: Array<{ plain_text?: string }>;
  email?: string | null;
  phone_number?: string | null;
  select?: { name?: string } | null;
  multi_select?: Array<{ name?: string }>;
  number?: number | null;
  date?: { start?: string | null } | null;
  status?: { name?: string } | null;
  created_time?: string;
  url?: string | null;
  checkbox?: boolean;
};

export type NotionInquiryPage = {
  id: string;
  created_time?: string;
  properties: Record<string, NotionPropertyValue>;
};

function textFromProperty(property: NotionPropertyValue | undefined): string | undefined {
  if (!property) return undefined;

  if (property.title?.length) {
    return property.title.map((item) => item.plain_text ?? '').join('').trim() || undefined;
  }

  if (property.rich_text?.length) {
    return property.rich_text.map((item) => item.plain_text ?? '').join('').trim() || undefined;
  }

  if (property.email) return property.email;
  if (property.phone_number) return property.phone_number;
  if (property.select?.name) return property.select.name;
  if (property.status?.name) return property.status.name;
  if (property.multi_select?.length) {
    return property.multi_select.map((item) => item.name).filter(Boolean).join(', ') || undefined;
  }
  if (typeof property.number === 'number') return String(property.number);
  if (property.date?.start) return property.date.start;
  if (property.created_time) return property.created_time;
  if (property.url) return property.url;
  if (typeof property.checkbox === 'boolean') return property.checkbox ? 'Yes' : 'No';

  return undefined;
}

function findProperty(properties: Record<string, NotionPropertyValue>, names: string[]): string | undefined {
  const normalized = new Map(
    Object.entries(properties).map(([key, value]) => [key.toLowerCase().replace(/[^a-z0-9]/g, ''), value]),
  );

  for (const name of names) {
    const direct = properties[name];
    const directValue = textFromProperty(direct);
    if (directValue) return directValue;

    const normalizedValue = textFromProperty(normalized.get(name.toLowerCase().replace(/[^a-z0-9]/g, '')));
    if (normalizedValue) return normalizedValue;
  }

  return undefined;
}

export function notionInquiryPageToInquiry(page: NotionInquiryPage): Inquiry {
  const properties = page.properties;
  const customerName =
    findProperty(properties, ['Customer Name', 'Customer', 'Name', 'Company Name', 'Company', 'Client']) ??
    createUnknownInquiryName(page.id);

  return {
    id: page.id,
    source: 'notion',
    customerName,
    companyName: findProperty(properties, ['Company Name', 'Company', 'Brand Name', 'Business Name']),
    email: findProperty(properties, ['Email', 'Email Address', 'Contact Email']),
    country: findProperty(properties, ['Country', 'Market', 'Region']),
    buyerType: findProperty(properties, ['Buyer Type', 'Customer Type', 'Lead Type', 'Business Type']),
    productInterest: findProperty(properties, ['Product Interest', 'Tea Interest', 'Products', 'Tea Type', 'Interested Products']),
    quantityRequirement: findProperty(properties, ['Quantity', 'MOQ', 'Order Quantity', 'Estimated Quantity', 'Volume']),
    packagingRequirement: findProperty(properties, ['Packaging', 'Packaging Requirement', 'Private Label', 'OEM Requirement']),
    budgetRange: findProperty(properties, ['Budget', 'Budget Range', 'Target Price', 'Price Range']),
    timeline: findProperty(properties, ['Timeline', 'Purchase Timeline', 'Launch Timeline', 'Delivery Time']),
    message: findProperty(properties, ['Message', 'Inquiry', 'Inquiry Details', 'Notes', 'Requirement', 'Requirements']),
    status: findProperty(properties, ['Status', 'Stage', 'Lead Status']),
    createdAt: findProperty(properties, ['Created Time', 'Created']) ?? page.created_time,
    raw: properties,
  };
}
