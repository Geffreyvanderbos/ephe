export const WRITING_QUOTES = [
  "Just write."
];

export const getRandomQuote = (): string => {
  return WRITING_QUOTES[Math.floor(Math.random() * WRITING_QUOTES.length)];
};
