import Parser from "./Parser.mjs";
import Lexer from "./Lexer.mjs";
import visitorCreator from "./visitor-creator.mjs";

export default function stringToAst(input, c) {
  const config = c || { strict: true };
  const parser = new Parser([], { outputCst: true });
  const lexingresult = Lexer.tokenize(input);

  if (config.strict && lexingresult.errors.length > 0) {
    console.log(input);
    console.dir(lexingresult, { depth: Infinity });
    throw new Error("Lexing errors detected")
  }

  parser.input = lexingresult.tokens;
  const cst = parser.unitFile();

  if (config.strict && parser.errors.length > 0) {
    console.log(input);
    //console.dir(lexingresult, { depth: Infinity });
    console.dir(parser.errors, { depth: Infinity });
    throw new Error("Parsing errors detected")
  }

  const Visitor = visitorCreator(parser);
  const visitor = new Visitor();
  const ast = visitor.visit(cst);
  return ast;
}
