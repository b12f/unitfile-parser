import astToString from "./ast-to-string.mjs";
import dataToAst from "./data-to-ast.mjs";

export default function dataToString(data) {
  return astToString(dataToAst(data));
}
