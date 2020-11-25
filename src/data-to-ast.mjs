function sectionToAst(section) {
  return {
    type: "section",
    title: section.title,
    body: Object.keys(section.settings)
      .reduce(
        (acc, key) => {
          const val = section.settings[key];
          if (Array.isArray(val)) {
            return [
              ...acc,
              ...val.map(value => ({
                type: "setting",
                name: key,
                value,
              })),
            ];
          }

          return [
            ...acc,
            {
              type: "setting",
              name: key,
              value: val,
            },
          ];
        },
        [],
      ),
  };
}

export default function dataToAst(file) {
  return {
    type: "unitFile",
    comments: [],
    sections: file.map(sectionToAst),
  };
}
