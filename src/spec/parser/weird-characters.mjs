export const string = `[Install]
Description=Test description(1) https://something/? \\# # test`;

export const ast = {
  type: 'unitFile',
  comments: [],
  sections: [
    {
      type: 'section',
      title: 'Install',
      titleComment: undefined,
      body: [
        {
          type: 'setting',
          name: 'Description',
          value: 'Test description(1) https://something/? \\#',
          comment: { type: 'comment', value: 'test' }
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
