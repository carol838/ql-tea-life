import { notionInquiryPageToInquiry, type NotionInquiryPage } from '../src/ai-os/notion/inquiryMapper.js';
import { MockQualificationAgent } from '../src/ai-os/qualification/mockQualificationAgent.js';
import { qualifyInquiry } from '../src/ai-os/workflows/qualifyInquiry.js';

const fixture: NotionInquiryPage = {
  id: 'nuramil-fixture-inquiry',
  created_time: '2026-08-02T00:00:00.000Z',
  properties: {
    'Customer Name': { type: 'title', title: [{ plain_text: 'NURAMIL' }] },
    'Buyer Type': { type: 'select', select: { name: 'Tea brand' } },
    Email: { type: 'email', email: 'buyer@example.com' },
    Country: { type: 'rich_text', rich_text: [{ plain_text: 'International market' }] },
    'Product Interest': { type: 'multi_select', multi_select: [{ name: 'Jasmine Tea' }, { name: 'Private Label Tea Bags' }] },
    Quantity: { type: 'rich_text', rich_text: [{ plain_text: 'Trial order, then scale after sample approval' }] },
    Packaging: { type: 'rich_text', rich_text: [{ plain_text: 'Custom packaging and OEM private label support' }] },
    Timeline: { type: 'rich_text', rich_text: [{ plain_text: 'Launch planning stage' }] },
    Message: {
      type: 'rich_text',
      rich_text: [
        {
          plain_text:
            'NURAMIL is exploring private label tea products with custom packaging and needs sample options for a branded tea collection.',
        },
      ],
    },
  },
};

function assert(condition: boolean, message: string) {
  if (!condition) {
    throw new Error(message);
  }
}

const inquiry = notionInquiryPageToInquiry(fixture);
const draft = await qualifyInquiry(inquiry, new MockQualificationAgent());

assert(inquiry.customerName === 'NURAMIL', 'Expected customer name to map from Notion title.');
assert(inquiry.buyerType === 'Tea brand', 'Expected buyer type to map from Notion select.');
assert(draft.customerName === 'NURAMIL', 'Expected draft customer name.');
assert(draft.score > 70, 'Expected a qualified B2B inquiry score.');
assert(draft.confidence > 0.6, 'Expected useful confidence value.');
assert(draft.strengths.length > 0, 'Expected strengths.');
assert(draft.concerns.length >= 0, 'Expected concerns array.');
assert(draft.recommendedAction.length > 0, 'Expected recommended action.');

console.log('Qualification workflow test passed.');
console.log(`Customer name: ${draft.customerName}`);
console.log(`Buyer type: ${draft.buyerType}`);
console.log(`Score: ${draft.score}`);
console.log(`Confidence: ${draft.confidence}`);
console.log('Strengths:');
draft.strengths.forEach((item: string) => console.log(`- ${item}`));
console.log('Concerns:');
draft.concerns.forEach((item: string) => console.log(`- ${item}`));
console.log(`Recommended Action: ${draft.recommendedAction}`);
