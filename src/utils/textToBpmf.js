// 純中文文字轉台灣標準注音 tokens 自動標音器

import { getCharBopomofo } from './bopomofoDictionary';
import { parseBopomofoString } from './bopomofoHelper';

/**
 * 將中文純文字句子轉換為標準注音 Tokens 陣列
 * @param {string} sentenceText 中文句子 (例如: "台灣黑熊在森林散步。")
 * @returns {Array} tokens 陣列，每個元素為 { char, bopomofo, initial, medial, final, tone }
 */
export function convertTextToBpmfTokens(sentenceText) {
  if (!sentenceText) return [];

  const tokens = [];
  const chars = Array.from(sentenceText.trim());

  for (const char of chars) {
    if (/[，。！？、…—\s：；「」『』（）《》]/.test(char)) {
      tokens.push({
        char,
        bopomofo: '',
        initial: '',
        medial: '',
        final: '',
        tone: ''
      });
      continue;
    }

    const bopomofo = getCharBopomofo(char);
    const parsed = parseBopomofoString(bopomofo);

    tokens.push({
      char,
      bopomofo,
      initial: parsed.initial,
      medial: parsed.medial,
      final: parsed.final,
      tone: parsed.tone
    });
  }

  return tokens;
}

/**
 * 將長篇新聞或文章智慧斷句為多個短句
 * @param {string} rawText 新聞純文字
 * @returns {Array<string>} 斷句後的乾淨句子清單
 */
export function splitTextIntoSentences(rawText) {
  if (!rawText) return [];
  // 依句號、問號、驚嘆號或換行斷句
  return rawText
    .split(/([。！？\n]+)/)
    .filter(Boolean)
    .reduce((acc, curr, idx, arr) => {
      if (idx % 2 === 0) {
        const punctuation = arr[idx + 1] || '。';
        const fullSentence = (curr + punctuation).trim();
        if (fullSentence.length >= 4 && !/^[。！？\s]+$/.test(fullSentence)) {
          acc.push(fullSentence);
        }
      }
      return acc;
    }, []);
}
