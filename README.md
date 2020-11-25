# unitfile-parser

This is a small utility library to parse systemd unitfiles to- and from JavaScript data structures. Three formats are available:
1. `string`, which is the representation inside a unit file,
2. `ast`, which is a JS object representation of the parser AST, including comments,
3. `data`, which is a normalized representation of the data, useful to do general computing. It hast the following format:

```
{
  title: String,
  settings: {
    [key:String]: String|String[],
  }
}[]
```

Conversions are available in all directions between these formats, with the only external dependency being `chevrotain`.

This package does not know or check whether the logic of a unit file is correct (e.g. are you using the correct names for options, etc.), it only know what the syntax is supposed to be.

## Usage

For most usecases, you'll only need two functions: `stringToData` and `dataToString`:

```
import { readFile, writeFile } from 'fs/promises';
import { stringToData, dataToString } from 'systemd-unitfiles';

(async () => {
  const unitFilePath = '~/.config/systemd/user/xsettingsd.service';

  // Read the current file from disk
  const fileContents = await readFile(unitFilePath);

  // Transform it to a useful data structure
  const unit = stringToData(fileContents);

  // Change it around
  const transformedUnit = doSomeTransformation(unit);

  // Transform the changed unit back to a string
  const newFileContents = dataToString(transformedUnit);

  // Write the changed file back to disk
  await writeFile(unitFilePath, newFileContents);
})();
```

## API

This package is written for esm5 and above, providing only JS modules (`.mjs` files) to work with.

### stringToAst(input: String): Object

Convert a unit file string to a JS AST.

```
import { readFile } from 'fs/promises';
import { stringToAst } from 'systemd-unitfiles';

readFile('~/.config/systemd/user/xsettingsd.service')
  .then(fileContents => {
    const ast = stringToAst(fileContents);
    console.log(ast);
  });

```

### stringToData(input: String): Array

Convert a unit file string to a normalized representation. This is equivalent to the following:

```
const data = astToData(stringToAst(string));
```

### astToData(ast: Object): Array

Convert the parser ast to a normalized representation.

### astToString(ast: Object): String

Convert an ast to a valid unit file string.

```
import { writeFile } from 'fs/promises';
import { astToString } from 'systemd-unitfiles';

const ast = // some ast here

const unitFile = astToString(ast);

writeFile('~/.config/systemd/user/xsettingsd.service', unitFile);
```

### dataToAst(data: Array): Object

Convert the normalized JS representation to the parser ast.

### dataToString(data: Array): String

Convert the normalized JS representation to a valid unit file string. This is equivalent to the following:

```
const string = astToString(dataToAst(data));
```

### Lexer 

Constructor for a lexer that extends the [chevrotain Lexer](https://sap.github.io/chevrotain/documentation/7_0_3/classes/lexer.html).

### Parser 

Constructor for a parser that extends the [chevrotain CSTParser](https://sap.github.io/chevrotain/documentation/7_0_3/classes/cstparser.html).

### visitorCreator(parser: Parser): ICSTVisitor

Function that takes a parser and returns a visitor for that parser that would normalize the ast to the abovementioned data format.

## Motivation

There already is a `systemd-unitfile` package on npm, but it is unmaintainted and has some bad behaviour, like not recognizing multiline values.

