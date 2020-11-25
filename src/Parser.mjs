import chevrotain from "chevrotain";
const { CstParser } = chevrotain; 
import {
  tokens,
  Comment,
  Property,
  SectionHeading,
  Newline,
  Value,
} from "./Lexer.mjs";

export default class UnitFileParser extends CstParser {
  constructor() {
    super(tokens);
    const $ = this;

    $.RULE("value", () => {
      $.CONSUME(Value);
    });

    $.RULE("comment", () => {
      $.CONSUME(Comment);
    });

    $.RULE("sectionHeadingStatement", () => {
      $.CONSUME(SectionHeading);
      $.OPTION(() => {
        $.SUBRULE($.comment);
      });
      $.OPTION1(() => {
        $.CONSUME(Newline);
      });
    });

    $.RULE("propertyStatement", () => {
      $.CONSUME(Property);
      $.SUBRULE($.value);
      $.OPTION(() => {
        $.SUBRULE($.comment);
      });
    });

    $.RULE("sectionStatement", () => {
      $.OR([
        { ALT: () => $.SUBRULE($.propertyStatement) },
        { ALT: () => $.SUBRULE($.comment) },
      ]);
    });
    
    $.RULE("section", () => {
      $.SUBRULE($.sectionHeadingStatement);
      $.MANY(() => {
        $.SUBRULE($.sectionStatement);
        $.OPTION(() => {
          $.CONSUME(Newline);
        });
      });
    });

    $.RULE("unitFile", () => {
      $.MANY(() => {
        $.OR([
          { ALT: () => $.SUBRULE($.section) },
          { ALT: () => $.SUBRULE($.comment) },
          { ALT: () => $.CONSUME(Newline) },
        ]);
      });
    });

    this.performSelfAnalysis();
  }
}
