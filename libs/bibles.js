import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const biblesInfo = [
  {
    title: { korean: '창세기', english: 'Genesis' },
    vlIndex: 1,
    cnMax: 50,
  },
  {
    title: { korean: '출애굽기', english: 'Exodus' },
    vlIndex: 2,
    cnMax: 40,
  },
  {
    title: { korean: '레위기', english: 'Leviticus' },
    vlIndex: 3,
    cnMax: 27,
  },
  {
    title: { korean: '민수기', english: 'Numbers' },
    vlIndex: 4,
    cnMax: 36,
  },
  {
    title: { korean: '신명기', english: 'Deuteronomy' },
    vlIndex: 5,
    cnMax: 34,
  },
  {
    title: { korean: '여호수아', english: 'Joshua' },
    vlIndex: 6,
    cnMax: 24,
  },
  {
    title: { korean: '사사기', english: 'Judges' },
    vlIndex: 7,
    cnMax: 21,
  },
  { title: { korean: '룻기', english: 'Ruth' }, vlIndex: 8, cnMax: 4 },
  {
    title: { korean: '사무엘상', english: '1 Samuel' },
    vlIndex: 9,
    cnMax: 31,
  },
  {
    title: { korean: '사무엘하', english: '2 Samuel' },
    vlIndex: 10,
    cnMax: 24,
  },
  {
    title: { korean: '열왕기상', english: '1 Kings' },
    vlIndex: 11,
    cnMax: 22,
  },
  {
    title: { korean: '열왕기하', english: '2 Kings' },
    vlIndex: 12,
    cnMax: 25,
  },
  {
    title: { korean: '역대상', english: '1 Chronicles' },
    vlIndex: 13,
    cnMax: 29,
  },
  {
    title: { korean: '역대하', english: '2 Chronicles' },
    vlIndex: 14,
    cnMax: 36,
  },
  { title: { korean: '에스라', english: 'Ezra' }, vlIndex: 15, cnMax: 10 },
  {
    title: { korean: '느헤미야', english: 'Nehemiah' },
    vlIndex: 16,
    cnMax: 13,
  },
  {
    title: { korean: '에스더', english: 'Esther' },
    vlIndex: 17,
    cnMax: 10,
  },
  { title: { korean: '욥기', english: 'Job' }, vlIndex: 18, cnMax: 42 },
  {
    title: { korean: '시편', english: 'Psalms' },
    vlIndex: 19,
    cnMax: 150,
  },
  {
    title: { korean: '잠언', english: 'Proverbs' },
    vlIndex: 20,
    cnMax: 31,
  },
  {
    title: { korean: '전도서', english: 'Ecclesiastes' },
    vlIndex: 21,
    cnMax: 12,
  },
  {
    title: { korean: '아가', english: 'Song of Songs' },
    vlIndex: 22,
    cnMax: 8,
  },
  {
    title: { korean: '이사야', english: 'Isaiah' },
    vlIndex: 23,
    cnMax: 66,
  },
  {
    title: { korean: '예레미야', english: 'Jeremiah' },
    vlIndex: 24,
    cnMax: 52,
  },
  {
    title: { korean: '예레미야 애가', english: 'Lamentations' },
    vlIndex: 25,
    cnMax: 5,
  },
  {
    title: { korean: '에스겔', english: 'Ezekiel' },
    vlIndex: 26,
    cnMax: 48,
  },
  {
    title: { korean: '다니엘', english: 'Daniel' },
    vlIndex: 27,
    cnMax: 12,
  },
  {
    title: { korean: '호세아', english: 'Hosea' },
    vlIndex: 28,
    cnMax: 14,
  },
  { title: { korean: '요엘', english: 'Joel' }, vlIndex: 29, cnMax: 3 },
  { title: { korean: '아모스', english: 'Amos' }, vlIndex: 30, cnMax: 9 },
  {
    title: { korean: '오바댜', english: 'Obadiah' },
    vlIndex: 31,
    cnMax: 1,
  },
  { title: { korean: '요나', english: 'Jonah' }, vlIndex: 32, cnMax: 4 },
  { title: { korean: '미가', english: 'Micah' }, vlIndex: 33, cnMax: 7 },
  { title: { korean: '나훔', english: 'Nahum' }, vlIndex: 34, cnMax: 3 },
  {
    title: { korean: '하박국', english: 'Habakkuk' },
    vlIndex: 35,
    cnMax: 3,
  },
  {
    title: { korean: '스바냐', english: 'Zephaniah' },
    vlIndex: 36,
    cnMax: 3,
  },
  { title: { korean: '학개', english: 'Haggai' }, vlIndex: 37, cnMax: 2 },
  {
    title: { korean: '스가랴', english: 'Zechariah' },
    vlIndex: 38,
    cnMax: 14,
  },
  {
    title: { korean: '말라기', english: 'Malachi' },
    vlIndex: 39,
    cnMax: 4,
  },
  {
    title: { korean: '마태복음', english: 'Matthew' },
    vlIndex: 40,
    cnMax: 28,
  },
  {
    title: { korean: '마가복음', english: 'Mark' },
    vlIndex: 41,
    cnMax: 16,
  },
  {
    title: { korean: '누가복음', english: 'Luke' },
    vlIndex: 42,
    cnMax: 24,
  },
  {
    title: { korean: '요한복음', english: 'John' },
    vlIndex: 43,
    cnMax: 21,
  },
  {
    title: { korean: '사도행전', english: 'Acts' },
    vlIndex: 44,
    cnMax: 28,
  },
  {
    title: { korean: '로마서', english: 'Romans' },
    vlIndex: 45,
    cnMax: 16,
  },
  {
    title: { korean: '고린도전서', english: '1 Corinthians' },
    vlIndex: 46,
    cnMax: 16,
  },
  {
    title: { korean: '고린도후서', english: '2 Corinthians' },
    vlIndex: 47,
    cnMax: 13,
  },
  {
    title: { korean: '갈라디아서', english: 'Galatians' },
    vlIndex: 48,
    cnMax: 6,
  },
  {
    title: { korean: '에베소서', english: 'Ephesians' },
    vlIndex: 49,
    cnMax: 6,
  },
  {
    title: { korean: '빌립보서', english: 'Philippians' },
    vlIndex: 50,
    cnMax: 4,
  },
  {
    title: { korean: '골로새서', english: 'Colossians' },
    vlIndex: 51,
    cnMax: 4,
  },
  {
    title: { korean: '데살로니가전서', english: '1 Thessalonians' },
    vlIndex: 52,
    cnMax: 5,
  },
  {
    title: { korean: '데살로니가후서', english: '2 Thessalonians' },
    vlIndex: 53,
    cnMax: 3,
  },
  {
    title: { korean: '디모데전서', english: '1 Timothy' },
    vlIndex: 54,
    cnMax: 6,
  },
  {
    title: { korean: '디모데후서', english: '2 Timothy' },
    vlIndex: 55,
    cnMax: 4,
  },
  { title: { korean: '디도서', english: 'Titus' }, vlIndex: 56, cnMax: 3 },
  {
    title: { korean: '빌레몬서', english: 'Philemon' },
    vlIndex: 57,
    cnMax: 1,
  },
  {
    title: { korean: '히브리서', english: 'Hebrews' },
    vlIndex: 58,
    cnMax: 13,
  },
  {
    title: { korean: '야고보서', english: 'James' },
    vlIndex: 59,
    cnMax: 5,
  },
  {
    title: { korean: '베드로전서', english: '1 Peter' },
    vlIndex: 60,
    cnMax: 5,
  },
  {
    title: { korean: '베드로후서', english: '2 Peter' },
    vlIndex: 61,
    cnMax: 3,
  },
  {
    title: { korean: '요한1서', english: '1 John' },
    vlIndex: 62,
    cnMax: 5,
  },
  {
    title: { korean: '요한2서', english: '2 John' },
    vlIndex: 63,
    cnMax: 1,
  },
  {
    title: { korean: '요한3서', english: '3 John' },
    vlIndex: 64,
    cnMax: 1,
  },
  { title: { korean: '유다서', english: 'Jude' }, vlIndex: 65, cnMax: 1 },
  {
    title: { korean: '요한계시록', english: 'Revelation' },
    vlIndex: 66,
    cnMax: 22,
  },
];

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
  console.log(fileName);
  const fullPath = path.join(biblesDirectory, fileName);
  const fileContent = fs.readFileSync(fullPath, 'utf-8');
  const matterResult = matter(fileContent);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return contentHtml;
}
