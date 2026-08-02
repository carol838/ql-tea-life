import type { Inquiry } from './inquiry.js';

export type QualificationDraft = {
  inquiryId: string;
  customerName: string;
  buyerType: string;
  score: number;
  confidence: number;
  strengths: string[];
  concerns: string[];
  recommendedAction: string;
  summary: string;
};

export type QualificationAgent = {
  qualify(inquiry: Inquiry): Promise<QualificationDraft>;
};
