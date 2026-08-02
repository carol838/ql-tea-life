import { notionInquiryPageToInquiry } from '../src/ai-os/notion/inquiryMapper.js';
import { NotionInquiryRepository } from '../src/ai-os/notion/notionInquiryRepository.js';
import { MockQualificationAgent } from '../src/ai-os/qualification/mockQualificationAgent.js';
import { qualifyInquiry } from '../src/ai-os/workflows/qualifyInquiry.js';

declare const process: {
  env: Record<string, string | undefined>;
  argv: string[];
  exitCode?: number;
};

function readArg(name: string) {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : undefined;
}

function printDraft(draft: Awaited<ReturnType<typeof qualifyInquiry>>) {
  console.log('Qualification Draft');
  console.log('-------------------');
  console.log(`Customer name: ${draft.customerName}`);
  console.log(`Buyer type: ${draft.buyerType}`);
  console.log(`Score: ${draft.score}`);
  console.log(`Confidence: ${draft.confidence}`);
  console.log('Strengths:');
  draft.strengths.forEach((item: string) => console.log(`- ${item}`));
  console.log('Concerns:');
  draft.concerns.forEach((item: string) => console.log(`- ${item}`));
  console.log(`Recommended Action: ${draft.recommendedAction}`);
}

async function main() {
  const token = process.env.NOTION_TOKEN;
  const databaseId = process.env.NOTION_INQUIRIES_DATABASE_ID;
  const pageId = readArg('--id') ?? process.env.NOTION_INQUIRY_PAGE_ID;
  const searchText = readArg('--name') ?? process.env.NOTION_INQUIRY_SEARCH ?? 'NURAMIL';

  if (!token || !databaseId) {
    throw new Error('Missing NOTION_TOKEN or NOTION_INQUIRIES_DATABASE_ID environment variable.');
  }

  const repository = new NotionInquiryRepository({ token, databaseId });
  const page = pageId ? await repository.getInquiryPage(pageId) : await repository.findInquiryPage(searchText);
  const inquiry = notionInquiryPageToInquiry(page);
  const draft = await qualifyInquiry(inquiry, new MockQualificationAgent());

  printDraft(draft);
}

main().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(message);
  process.exitCode = 1;
});
