import glob from "glob";
import { join } from "path";
import {
  Lexer,
  Parser,
  visitorCreator,
} from "../src/mod.mjs";

const runTest = (input) => {
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
};

(async () => {
  const files = await Promise.all(
    process.argv
      .slice(2)
      .map(arg => new Promise(
        (resolve, reject) => glob(arg, {}, (err, files) => {
          if (err) {
            reject(err);
          } else {
            resolve(files.map(file => join(process.cwd(), file)));
          }
        })
      ))
  );

  const cases = await Promise.all(files.flat().map(file => import(file)));

  const results = cases.map(
    ({ content, result }) => {
      const ast = runTest(content);
      const resultString = JSON.stringify(ast);
      const expectedString = JSON.stringify(result);
      if (resultString !== expectedString) {
        console.dir(ast, { depth: Infinity });
        throw new Error(`Mismatching result on testcase:
${content}

=======Result======

${resultString}

=======Expected======

${expectedString}

`);
      }

      return null;
    },
  )
  .filter(r => r !== null);
  
  if (results.length) {
    results.forEach(err => console.error(err));
    throw new Error(`${results.length} failed tests`);
  }
})();