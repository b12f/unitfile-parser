export const string = `[Install]
Description=Test description(1) https://something/? \\#`;

export const ast = {
  type: 'unitFile',
  comments: [],
  sections: [
    {
      type: 'section',
      title: 'Install',
      body: [
        {
          type: 'setting',
          name: 'Description',
          value: 'Test description(1) https://something/? \\#',
        }
      ]
    }
  ]
};

export const data = [
  {
    title: 'Install',
    settings: {
      Description: 'Test description(1) https://something/? \\#',
    },
  }
];
