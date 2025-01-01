# Challenge 04: String Reverser

## Overview
For this challenge, you need to write three functions:

1. Simple string reverse:
```javascript
reverseString('hello') // returns 'olleh'
```

2. Word reverse (keep words intact, reverse their order):
```javascript
reverseWords('hello world') // returns 'world hello'
```

3. Sentence reverse (keep spaces and punctuation in place):
```javascript
reverseSentence('hi, how are you?') // returns 'you are how hi?'
```

## Rules
Follow the same Git workflow practices:

1. Fork this repo to your own Git
2. Create your working branch using this naming convention:
   - `feat/` - for the main work
   - `fix/` - for things you need to improve
   - `chore/` - for things you need to clean up

Example:
```bash
git checkout -b feat/CC-challenge-4-string-reverser
```

## Requirements
Your functions should handle:
- Single words
- Multiple words
- Punctuation
- Special characters
- Spaces (multiple spaces should be preserved)
- Empty strings

## Edge Cases to Consider
- Empty strings
- Single character strings
- Strings with only spaces
- Strings with special characters
- Multiple spaces between words
- Punctuation at start/end
- Numbers in strings

## Project Setup
```bash
npm init -y
npm install --save-dev jest
npm install --save-dev eslint prettier
```

Update your package.json with:
```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "lint": "eslint .",
    "format": "prettier --write ."
  }
}
```

## Submission
- Complete your solution
- Merge everything into main
- Post your solution link in the challenge thread

Good luck! 🔄