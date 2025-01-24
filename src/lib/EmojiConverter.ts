import { EmojiMap } from "./types";
import { defaultEmojiMap } from "./emojiMap";

export class EmojiConverter {
  private emojiMap: EmojiMap;

  constructor(customEmojiMap?: EmojiMap) {
    this.emojiMap = {
      ...defaultEmojiMap,
      ...customEmojiMap
    };
  }

  /**
   * Convert text to emojis using the configured emoji map
   * @param text The input text to convert
   * @returns The text with words replaced by emojis
   */
  convert(text: string): string {
    // Split the text into lines to preserve line breaks
    const lines = text.split("\n");

    // Process each line separately while preserving whitespace
    const convertedLines = lines.map((line) => {
      let result = line;
      Object.entries(this.emojiMap).forEach(([word, emoji]) => {
        const regex = new RegExp(`\\b${word}(s)?\\b`, "gi");
        result = result.replace(regex, (match) => {
          if (match.length === 2 && match.toLowerCase().endsWith("s")) {
            return match;
          }
          return match.toLowerCase().endsWith("s") ? `${emoji}s` : emoji;
        });
      });
      return result;
    });

    // Join the lines back together with newlines
    return convertedLines.join("\n");
  }

  /**
   * Add new emoji mappings or override existing ones
   * @param newMappings Object containing word-to-emoji mappings
   */
  addMappings(newMappings: EmojiMap): void {
    this.emojiMap = {
      ...this.emojiMap,
      ...newMappings
    };
  }

  /**
   * Remove emoji mappings for specific words
   * @param words Array of words to remove from the emoji map
   */
  removeMappings(words: string[]): void {
    const newMap: EmojiMap = { ...this.emojiMap };
    words.forEach((word) => {
      delete newMap[word];
    });
    this.emojiMap = newMap;
  }

  /**
   * Get the current emoji mappings
   * @returns The current emoji map
   */
  getMappings(): EmojiMap {
    return { ...this.emojiMap };
  }

  /**
   * Reset the emoji map to default mappings
   */
  resetToDefault(): void {
    this.emojiMap = { ...defaultEmojiMap };
  }
}
