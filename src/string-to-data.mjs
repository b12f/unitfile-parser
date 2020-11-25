import stringToAst from "./string-to-ast.mjs";
import astToData from "./astToData.mjs";

export default function stringToData(data) {
  return astToData(stringToAst(data));
}
