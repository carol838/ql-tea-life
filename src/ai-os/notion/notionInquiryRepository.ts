import type { NotionInquiryPage } from './inquiryMapper.js';

export type NotionInquiryRepositoryOptions = {
  token: string;
  databaseId: string;
  notionVersion?: string;
};

export class NotionInquiryRepository {
  private readonly token: string;
  private readonly databaseId: string;
  private readonly notionVersion: string;

  constructor(options: NotionInquiryRepositoryOptions) {
    this.token = options.token;
    this.databaseId = options.databaseId;
    this.notionVersion = options.notionVersion ?? '2022-06-28';
  }

  async getInquiryPage(pageId: string): Promise<NotionInquiryPage> {
    const response = await fetch(`https://api.notion.com/v1/pages/${pageId}`, {
      headers: this.headers(),
    });

    return this.parsePageResponse(response);
  }

  async findInquiryPage(searchText: string): Promise<NotionInquiryPage> {
    const response = await fetch(`https://api.notion.com/v1/databases/${this.databaseId}/query`, {
      method: 'POST',
      headers: {
        ...this.headers(),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ page_size: 25 }),
    });

    if (!response.ok) {
      throw new Error(`Notion database query failed: ${response.status} ${await response.text()}`);
    }

    const payload = (await response.json()) as { results?: NotionInquiryPage[] };
    const query = searchText.toLowerCase();
    const match = payload.results?.find((page) => JSON.stringify(page.properties).toLowerCase().includes(query));

    if (!match) {
      throw new Error(`No Notion Inquiry matched "${searchText}" in the configured database.`);
    }

    return match;
  }

  private headers() {
    return {
      Authorization: `Bearer ${this.token}`,
      'Notion-Version': this.notionVersion,
    };
  }

  private async parsePageResponse(response: Response): Promise<NotionInquiryPage> {
    if (!response.ok) {
      throw new Error(`Notion page request failed: ${response.status} ${await response.text()}`);
    }

    return (await response.json()) as NotionInquiryPage;
  }
}
