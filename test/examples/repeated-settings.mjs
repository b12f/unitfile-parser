export const content = `[Install]
After=something.service
After=something-else.service
After=something-different.service`;

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
          name: 'After',
          value: 'something.service',
          comment: undefined
        },
        {
          type: 'setting',
          name: 'After',
          value: 'something-else.service',
          comment: undefined
        },
        {
          type: 'setting',
          name: 'After',
          value: 'something-different.service',
          comment: undefined
        }
      ]
    }
  ]
};
