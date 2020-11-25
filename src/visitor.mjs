export default (parser) => {
  const BaseSQLVisitorWithDefaults = parser.getBaseCstVisitorConstructorWithDefaults();

  return class UnitFileVisitor extends BaseSQLVisitorWithDefaults {
    constructor() {
      super();
      this.validateVisitor();
    };

    comment(ctx) {
      return {
        type: "comment",
        value: ctx.Comment.map(({ image }) => image.replace(/^\s/, '').replace(/\s$/, '')).join(''),
      };
    }

    propertyStatement(ctx) {
      const name = ctx.Property[0].image;
      return {
        type: "setting",
        name: name.substring(0, name.length - 1),
        value: ctx.value.map(v => v.children.Value.map(({ image }) => image.replace(/\s$/, '')).join('')).join(''),
        comment: this.visit(ctx.comment?.[0]),
      };
    }

    sectionStatement(ctx) {
      const content = ctx.propertyStatement?.[0] || ctx.comment?.[0];
      return this.visit(content);
    }

    section(ctx) {
      const titleString = ctx.sectionHeadingStatement[0].children.SectionHeading[0].image;
      const titleComment = this.visit(ctx.sectionHeadingStatement[0].children.comment?.[0])
      return {
        type: "section",
        title: titleString.substring(1, titleString.length - 1),
        titleComment, 
        body: ctx.sectionStatement?.map(this.visit.bind(this)) || [],
      };
    }

    unitFile(ctx) {
      const comments = ctx.comment?.map(comment => this.visit(comment)) || [];
      const sections = ctx.section?.map(section => this.visit(section)) || [];
      return {
        type: "unitFile", 
        comments,
        sections,
      };
    }
  };
};
