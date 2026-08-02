import type { Inquiry } from '../domain/inquiry.js';
import type { QualificationAgent, QualificationDraft } from '../domain/qualification.js';

function includesAny(value: string | undefined, terms: string[]) {
  const text = value?.toLowerCase() ?? '';
  return terms.some((term) => text.includes(term));
}

function clampScore(score: number) {
  return Math.max(0, Math.min(100, score));
}

export class MockQualificationAgent implements QualificationAgent {
  async qualify(inquiry: Inquiry): Promise<QualificationDraft> {
    const strengths: string[] = [];
    const concerns: string[] = [];
    let score = 45;

    if (inquiry.customerName && !inquiry.customerName.startsWith('Unknown Inquiry')) {
      score += 8;
      strengths.push('Customer identity is available.');
    } else {
      concerns.push('Customer name is missing or unclear.');
    }

    if (inquiry.buyerType) {
      score += 10;
      strengths.push(`Buyer type is identified as ${inquiry.buyerType}.`);
    } else {
      concerns.push('Buyer type needs confirmation.');
    }

    if (includesAny(inquiry.buyerType, ['brand', 'distributor', 'importer', 'retailer', 'shop'])) {
      score += 10;
      strengths.push('Buyer profile matches QL Tea Life B2B target customers.');
    }

    if (inquiry.productInterest) {
      score += 8;
      strengths.push(`Product interest is clear: ${inquiry.productInterest}.`);
    } else {
      concerns.push('Tea category or product interest is not specified.');
    }

    if (inquiry.quantityRequirement) {
      score += 8;
      strengths.push(`Quantity requirement is available: ${inquiry.quantityRequirement}.`);
    } else {
      concerns.push('MOQ or estimated order quantity needs follow-up.');
    }

    if (inquiry.packagingRequirement || includesAny(inquiry.message, ['private label', 'oem', 'packaging', 'brand'])) {
      score += 8;
      strengths.push('Private label or packaging intent is present.');
    }

    if (inquiry.email) {
      score += 5;
      strengths.push('Email contact is available for follow-up.');
    } else {
      concerns.push('Email contact is missing.');
    }

    if (inquiry.timeline) {
      score += 4;
      strengths.push(`Timeline is noted: ${inquiry.timeline}.`);
    }

    if (!inquiry.message || inquiry.message.length < 30) {
      concerns.push('Inquiry details are limited; discovery questions are recommended.');
    }

    const finalScore = clampScore(score);
    const confidence = Math.min(0.92, 0.52 + strengths.length * 0.05 - concerns.length * 0.025);
    const recommendedAction =
      finalScore >= 75
        ? 'Prioritize follow-up, prepare samples or packaging options, and confirm MOQ, target market, and timeline.'
        : finalScore >= 55
          ? 'Follow up with qualification questions about products, quantity, packaging, budget, and launch timeline.'
          : 'Request missing buyer profile and project details before investing sales resources.';

    return {
      inquiryId: inquiry.id,
      customerName: inquiry.customerName,
      buyerType: inquiry.buyerType ?? 'Unknown',
      score: finalScore,
      confidence: Number(confidence.toFixed(2)),
      strengths,
      concerns,
      recommendedAction,
      summary: `${inquiry.customerName} is scored ${finalScore}/100 based on available inquiry information.`,
    };
  }
}
