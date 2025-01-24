# Text to Emoji Converter

A flexible and customizable text-to-emoji converter for JavaScript and TypeScript applications.

## Installation

If you are using npm

```bash
npm install @kvpasupuleti/text-to-emoji-converter
```

If you are using yarn

```bash
yarn add @kvpasupuleti/text-to-emoji-converter
```

## Usage

### Basic Usage

```typescript
import { EmojiConverter } from '@kvpasupuleti/text-to-emoji-converter';

// Create a new converter instance
const converter = new EmojiConverter();

// Convert text to emojis
const result = converter.convert('I love pizza!');
console.log(result); // "🙋‍♂️ ❤️ 🍕!"
```

### Custom Emoji Mappings

```typescript
// Add custom mappings during initialization
const customMappings = {
  'awesome': '🌟',
  'coding': '👨‍💻',
};
const converter = new EmojiConverter(customMappings);

// Or add them later
converter.addMappings({
  'fantastic': '✨',
  'javascript': '💛',
});

// Remove specific mappings
converter.removeMappings(['coding', 'javascript']);

// Reset to default mappings
converter.resetToDefault();

// Get current mappings
const currentMappings = converter.getMappings();
```

## API Reference

### `EmojiConverter`

#### Constructor
```typescript
constructor(customEmojiMap?: EmojiMap)
```

Creates a new EmojiConverter instance with optional custom emoji mappings.

#### Methods

##### `convert(text: string): string`
Converts text to emojis using the configured emoji map.

##### `addMappings(newMappings: EmojiMap): void`
Adds new emoji mappings or overrides existing ones.

##### `removeMappings(words: string[]): void`
Removes emoji mappings for specific words.

##### `getMappings(): EmojiMap`
Returns the current emoji mappings.

##### `resetToDefault(): void`
Resets the emoji map to default mappings.

### Types

```typescript
type EmojiMap = {
  [key: string]: string;
};
```

## License

MIT