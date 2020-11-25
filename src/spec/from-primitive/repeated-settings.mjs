export const string = `[Install]
After=something.service
After=something-else.service
After=something-different.service`;

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

export const data = [
  {
    title: 'Install',
    settings: {
      After: [
        'something.service',
        'something-else.service',
        'something-different.service',
      ],
    },
  }
];
