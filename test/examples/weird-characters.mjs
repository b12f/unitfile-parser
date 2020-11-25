export const content = `[Install]
Description=Test description(1) https://something/? \\# # test`;

export const result = {
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
