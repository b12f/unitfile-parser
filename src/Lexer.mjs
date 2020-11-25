import chevrotain from "chevrotain";
const { createToken, Lexer } = chevrotain; 

function getValueParser(...stoppers) {
  return function exec(text, startOffset) { 
    for (let i = startOffset; i < text.length; i += 1) {
      if (text[i] === '\\') {
        i += 1;
        continue;
      }

      if (stoppers.includes(text[i])) {
        if (i !== startOffset) {
          return [text.substring(startOffset, i)]; 
        } else {
          return null;
        }
      }
    }

    return [text.substr(startOffset)]; 
  }
}

export const SectionHeading = createToken({
  name: "SectionHeading",
  pattern: /\[[A-z]+\]/,
});
export const Property = createToken({
  name: "Property",
  pattern: /[A-z][A-z]+=/,
  push_mode: "value_mode",
});
export const Value = createToken({
  name: "Value",
  pattern: { exec: getValueParser('\n', '#') },
  line_breaks: true,
  pop_mode: true,
});
export const CommentStartNewline = createToken({
  name: "CommentStartNewline",
  pattern: '\n#',
  push_mode: "comment_mode",
});
export const CommentStart = createToken({
  name: "CommentStart",
  pattern: '#',
  push_mode: "comment_mode",
});
export const Comment = createToken({
  name: "Comment",
  pattern: { exec: getValueParser('\n') },
  line_breaks: true,
  pop_mode: true,
});
export const WhiteSpace = createToken({
  name: "WhiteSpace",
  pattern: /\s+/,
  group: Lexer.SKIPPED,
});

export const tokens = [
  CommentStart,
  CommentStartNewline,
  Value,
  Comment,
  SectionHeading,
  Property,
  WhiteSpace,
];

export default new Lexer({
  defaultMode: "line_mode",
  modes: {
    line_mode: [
      CommentStartNewline,
      CommentStart,
      SectionHeading,
      Property,
      WhiteSpace,
    ],
    value_mode: [ Value ],
    comment_mode: [ Comment ],
  },
});
