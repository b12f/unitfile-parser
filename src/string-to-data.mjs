import stringToAst from "./string-to-ast.mjs";
import astToData from "./ast-to-data.mjs";

export default function stringToData(data) {
  return astToData(stringToAst(data));
}
