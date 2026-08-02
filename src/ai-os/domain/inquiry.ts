export type InquirySource = 'notion' | 'website' | 'manual' | 'unknown';

export type Inquiry = {
  id: string;
  source: InquirySource;
  customerName: string;
  companyName?: string;
  email?: string;
  country?: string;
  buyerType?: string;
  productInterest?: string;
  quantityRequirement?: string;
  packagingRequirement?: string;
  budgetRange?: string;
  timeline?: string;
  message?: string;
  status?: string;
  createdAt?: string;
  raw?: Record<string, unknown>;
};

export function createUnknownInquiryName(id: string) {
  return `Unknown Inquiry ${id.slice(0, 8)}`;
}
