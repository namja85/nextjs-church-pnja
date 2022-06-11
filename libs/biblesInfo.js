const biblesInfo = [
  {
    title: { korean: '창세기', english: 'Genesis', short: '창' },
    vlIndex: 1,
    cnMax: 50,
  },
  {
    title: { korean: '출애굽기', english: 'Exodus', short: '출' },
    vlIndex: 2,
    cnMax: 40,
  },
  {
    title: { korean: '레위기', english: 'Leviticus', short: '레' },
    vlIndex: 3,
    cnMax: 27,
  },
  {
    title: { korean: '민수기', english: 'Numbers', short: '민' },
    vlIndex: 4,
    cnMax: 36,
  },
  {
    title: { korean: '신명기', english: 'Deuteronomy', short: '신' },
    vlIndex: 5,
    cnMax: 34,
  },
  {
    title: { korean: '여호수아', english: 'Joshua', short: '수' },
    vlIndex: 6,
    cnMax: 24,
  },
  {
    title: { korean: '사사기', english: 'Judges', short: '삿' },
    vlIndex: 7,
    cnMax: 21,
  },
  {
    title: { korean: '룻기', english: 'Ruth', short: '룻' },
    vlIndex: 8,
    cnMax: 4,
  },
  {
    title: { korean: '사무엘상', english: '1 Samuel', short: '삼상' },
    vlIndex: 9,
    cnMax: 31,
  },
  {
    title: { korean: '사무엘하', english: '2 Samuel', short: '삼하' },
    vlIndex: 10,
    cnMax: 24,
  },
  {
    title: { korean: '열왕기상', english: '1 Kings', short: '왕상' },
    vlIndex: 11,
    cnMax: 22,
  },
  {
    title: { korean: '열왕기하', english: '2 Kings', short: '왕하' },
    vlIndex: 12,
    cnMax: 25,
  },
  {
    title: { korean: '역대상', english: '1 Chronicles', short: '대상' },
    vlIndex: 13,
    cnMax: 29,
  },
  {
    title: { korean: '역대하', english: '2 Chronicles', short: '대하' },
    vlIndex: 14,
    cnMax: 36,
  },
  {
    title: { korean: '에스라', english: 'Ezra', short: '스' },
    vlIndex: 15,
    cnMax: 10,
  },
  {
    title: { korean: '느헤미야', english: 'Nehemiah', short: '느' },
    vlIndex: 16,
    cnMax: 13,
  },
  {
    title: { korean: '에스더', english: 'Esther', short: '에' },
    vlIndex: 17,
    cnMax: 10,
  },
  {
    title: { korean: '욥기', english: 'Job', short: '욥' },
    vlIndex: 18,
    cnMax: 42,
  },
  {
    title: { korean: '시편', english: 'Psalms', short: '시' },
    vlIndex: 19,
    cnMax: 150,
  },
  {
    title: { korean: '잠언', english: 'Proverbs', short: '잠' },
    vlIndex: 20,
    cnMax: 31,
  },
  {
    title: { korean: '전도서', english: 'Ecclesiastes', short: '전' },
    vlIndex: 21,
    cnMax: 12,
  },
  {
    title: { korean: '아가', english: 'Song of Songs', short: '아' },
    vlIndex: 22,
    cnMax: 8,
  },
  {
    title: { korean: '이사야', english: 'Isaiah', short: '사' },
    vlIndex: 23,
    cnMax: 66,
  },
  {
    title: { korean: '예레미야', english: 'Jeremiah', short: '렘' },
    vlIndex: 24,
    cnMax: 52,
  },
  {
    title: { korean: '예레미야 애가', english: 'Lamentations', short: '애' },
    vlIndex: 25,
    cnMax: 5,
  },
  {
    title: { korean: '에스겔', english: 'Ezekiel', short: '겔' },
    vlIndex: 26,
    cnMax: 48,
  },
  {
    title: { korean: '다니엘', english: 'Daniel', short: '단' },
    vlIndex: 27,
    cnMax: 12,
  },
  {
    title: { korean: '호세아', english: 'Hosea', short: '호' },
    vlIndex: 28,
    cnMax: 14,
  },
  {
    title: { korean: '요엘', english: 'Joel', short: '욜' },
    vlIndex: 29,
    cnMax: 3,
  },
  {
    title: { korean: '아모스', english: 'Amos', short: '암' },
    vlIndex: 30,
    cnMax: 9,
  },
  {
    title: { korean: '오바댜', english: 'Obadiah', short: '옵' },
    vlIndex: 31,
    cnMax: 1,
  },
  {
    title: { korean: '요나', english: 'Jonah', short: '욘' },
    vlIndex: 32,
    cnMax: 4,
  },
  {
    title: { korean: '미가', english: 'Micah', short: '미' },
    vlIndex: 33,
    cnMax: 7,
  },
  {
    title: { korean: '나훔', english: 'Nahum', short: '나' },
    vlIndex: 34,
    cnMax: 3,
  },
  {
    title: { korean: '하박국', english: 'Habakkuk', short: '합' },
    vlIndex: 35,
    cnMax: 3,
  },
  {
    title: { korean: '스바냐', english: 'Zephaniah', short: '습' },
    vlIndex: 36,
    cnMax: 3,
  },
  {
    title: { korean: '학개', english: 'Haggai', short: '학' },
    vlIndex: 37,
    cnMax: 2,
  },
  {
    title: { korean: '스가랴', english: 'Zechariah', short: '슥' },
    vlIndex: 38,
    cnMax: 14,
  },
  {
    title: { korean: '말라기', english: 'Malachi', short: '말' },
    vlIndex: 39,
    cnMax: 4,
  },
  {
    title: { korean: '마태복음', english: 'Matthew', short: '마' },
    vlIndex: 40,
    cnMax: 28,
  },
  {
    title: { korean: '마가복음', english: 'Mark', short: '막' },
    vlIndex: 41,
    cnMax: 16,
  },
  {
    title: { korean: '누가복음', english: 'Luke', short: '눅' },
    vlIndex: 42,
    cnMax: 24,
  },
  {
    title: { korean: '요한복음', english: 'John', short: '요' },
    vlIndex: 43,
    cnMax: 21,
  },
  {
    title: { korean: '사도행전', english: 'Acts', short: '행' },
    vlIndex: 44,
    cnMax: 28,
  },
  {
    title: { korean: '로마서', english: 'Romans', short: '롬' },
    vlIndex: 45,
    cnMax: 16,
  },
  {
    title: { korean: '고린도전서', english: '1 Corinthians', short: '고전' },
    vlIndex: 46,
    cnMax: 16,
  },
  {
    title: { korean: '고린도후서', english: '2 Corinthians', short: '고후' },
    vlIndex: 47,
    cnMax: 13,
  },
  {
    title: { korean: '갈라디아서', english: 'Galatians', short: '갈' },
    vlIndex: 48,
    cnMax: 6,
  },
  {
    title: { korean: '에베소서', english: 'Ephesians', short: '엡' },
    vlIndex: 49,
    cnMax: 6,
  },
  {
    title: { korean: '빌립보서', english: 'Philippians', short: '빌' },
    vlIndex: 50,
    cnMax: 4,
  },
  {
    title: { korean: '골로새서', english: 'Colossians', short: '골' },
    vlIndex: 51,
    cnMax: 4,
  },
  {
    title: {
      korean: '데살로니가전서',
      english: '1 Thessalonians',
      short: '살전',
    },
    vlIndex: 52,
    cnMax: 5,
  },
  {
    title: {
      korean: '데살로니가후서',
      english: '2 Thessalonians',
      short: '살후',
    },
    vlIndex: 53,
    cnMax: 3,
  },
  {
    title: { korean: '디모데전서', english: '1 Timothy', short: '딤전' },
    vlIndex: 54,
    cnMax: 6,
  },
  {
    title: { korean: '디모데후서', english: '2 Timothy', short: '딤후' },
    vlIndex: 55,
    cnMax: 4,
  },
  {
    title: { korean: '디도서', english: 'Titus', short: '딛' },
    vlIndex: 56,
    cnMax: 3,
  },
  {
    title: { korean: '빌레몬서', english: 'Philemon', short: '몬' },
    vlIndex: 57,
    cnMax: 1,
  },
  {
    title: { korean: '히브리서', english: 'Hebrews', short: '히' },
    vlIndex: 58,
    cnMax: 13,
  },
  {
    title: { korean: '야고보서', english: 'James', short: '약' },
    vlIndex: 59,
    cnMax: 5,
  },
  {
    title: { korean: '베드로전서', english: '1 Peter', short: '벧전' },
    vlIndex: 60,
    cnMax: 5,
  },
  {
    title: { korean: '베드로후서', english: '2 Peter', short: '벧후' },
    vlIndex: 61,
    cnMax: 3,
  },
  {
    title: { korean: '요한1서', english: '1 John', short: '요일' },
    vlIndex: 62,
    cnMax: 5,
  },
  {
    title: { korean: '요한2서', english: '2 John', short: '요이' },
    vlIndex: 63,
    cnMax: 1,
  },
  {
    title: { korean: '요한3서', english: '3 John', short: '요삼' },
    vlIndex: 64,
    cnMax: 1,
  },
  {
    title: { korean: '유다서', english: 'Jude', short: '유' },
    vlIndex: 65,
    cnMax: 1,
  },
  {
    title: { korean: '요한계시록', english: 'Revelation', short: '계' },
    vlIndex: 66,
    cnMax: 22,
  },
];

export default biblesInfo;
