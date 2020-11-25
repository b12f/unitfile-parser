function nodeToData(node) {
  switch (node.type) {
    case "unitFile":
      return node.sections.map(nodeToData);
    case "section":
      return {
        title: node.title,
        settings: node.body
          .filter(n => n.type === "setting")
          .reduce(
            (acc, setting) => {
              if (acc[setting.name]) {
                return {
                  ...acc,
                  [setting.name]: [acc[setting.name], setting.value].flat(),  
                };
              }

              return {
                ...acc,
                [setting.name]: nodeToData(setting),
              };
            },
            {},
          ),
      };
    case "setting":
      return node.value;
    default: 
      throw new Error(`Unrecognized node type: ${node.type}`);
      break;
  }
}

export default function astToData(file) {
  return nodeToData(file);
}
