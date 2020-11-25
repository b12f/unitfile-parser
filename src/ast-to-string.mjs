function nodeToString(node) {
  switch (node.type) {
    case "unitFile":
      return [
        (node.comments || []).map(nodeToString).join('\n'),
        (node.sections || []).map(nodeToString).join('\n\n'),
      ]
        .filter(n => n !== '')
        .join('\n');
    case "comment":
      return `# ${node.value}`;
    case "section":
      const titleComment = node.titleComment ? ' ' + nodeToString(node.titleComment) : '';
      return `[${node.title}]${titleComment}\n${(node.body || []).map(nodeToString).join('\n')}`;
    case "setting":
      const comment = node.comment ? ' ' + nodeToString(node.comment) : '';
      return `${node.name}=${node.value}${comment}`;
    default: 
      throw new Error(`Unrecognized node type: ${node.type}`);
      break;
  }
}

export default function astToString(file) {
  return nodeToString(file);
}
