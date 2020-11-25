export { default as Lexer } from "./Lexer.mjs";
export { default as Parser } from "./Parser.mjs";
export { default as visitorCreator } from "./visitor.mjs";

import Parser from "./Parser.mjs";
import Lexer from "./Lexer.mjs";
import visitorCreator from "./visitor.mjs";

export default (input) => {
  const parser = new Parser([], { outputCst: true });
  const lexingresult = Lexer.tokenize(input);

  if (lexingresult.errors.length > 0) {
    console.dir(lexingresult, { depth: Infinity });
    throw new Error("Lexing errors detected")
  }

  parser.input = lexingresult.tokens;
  const cst = parser.unitFile();

  if (parser.errors.length > 0) {
    console.dir(parser.errors, { depth: Infinity });
    throw new Error("Parsing errors detected")
  }

  const Visitor = visitorCreator(parser);
  const visitor = new Visitor();
  const ast = visitor.visit(cst);
  return ast;
}
