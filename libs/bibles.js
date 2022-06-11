import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import biblesInfo from './biblesInfo';

const biblesDirectory = path.join(process.cwd(), 'bibles');

export function getBiblesData() {
  const biblesData = [];
  biblesInfo.forEach(({ title, cnMax }) => {
    for (let i = 1; i <= cnMax; i++) {
      biblesData.push({
        korean: `${title.korean} ${i}장`,
        english: `${title.english}-${i}`,
      });
    }
  });
  return biblesData;
}

export function getBibleIds() {
  const bibleIds = [];
  biblesInfo.forEach(({ title, cnMax }) => {
    for (let i = 1; i <= cnMax; i++) {
      bibleIds.push(`${title.english}-${i}`);
    }
  });
  return bibleIds;
}

export async function getBibleContent(id) {
  const fileName = `${id}.md`;
  const fullPath = path.join(biblesDirectory, fileName);
  const fileContent = fs.readFileSync(fullPath, 'utf-8');
  const matterResult = matter(fileContent);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return contentHtml;
}
