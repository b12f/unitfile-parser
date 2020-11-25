import chevrotain from "chevrotain";
const { createToken, Lexer } = chevrotain; 

function valueParser(text, startOffset) { 
  for (let i = startOffset; i < text.length; i += 1) {
    if (text[i] === '\\') {
      i += 1;
      continue;
    }

    if (['\n', '#'].includes(text[i])) {
      if (i !== startOffset) {
        return [text.substring(startOffset, i)]; 
      } else {
        return null;
      }
    }
  }

  return [text.substr(startOffset)]; 
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
  pattern: { exec: valueParser },
  line_breaks: true,
  pop_mode: true,
});
export const Comment = createToken({
  name: "Comment",
  pattern: /#.*/,
  line_breaks: false,
});
export const WhiteSpace = createToken({
  name: "WhiteSpace",
  pattern: /\s+/,
  group: Lexer.SKIPPED,
});
export const Newline = createToken({
  name: "Newline",
  pattern: /\n+/,
});

export const tokens = [
  Value,
  Comment,
  SectionHeading,
  Property,
  WhiteSpace,
  Newline,
];

export default new Lexer({
  defaultMode: "line_mode",
  modes: {
    line_mode: [
      Comment,
      SectionHeading,
      Property,
      Newline,
      WhiteSpace,
    ],
    value_mode: [ Value ],
  },
});
