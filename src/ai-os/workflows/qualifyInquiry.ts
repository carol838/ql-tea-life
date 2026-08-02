import type { Inquiry } from '../domain/inquiry.js';
import type { QualificationAgent, QualificationDraft } from '../domain/qualification.js';

export async function qualifyInquiry(
  inquiry: Inquiry,
  qualificationAgent: QualificationAgent,
): Promise<QualificationDraft> {
  return qualificationAgent.qualify(inquiry);
}
