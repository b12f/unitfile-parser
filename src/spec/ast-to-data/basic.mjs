export const input = {
  type: 'unitFile',
  comments: [],
  sections: [
    {
      type: 'section',
      title: 'Unit',
      titleComment: undefined,
      body: [
        {
          type: 'setting',
          name: 'Description',
          value: 'Idle manager for Wayland'
        }
      ]
    }
  ]
};

export const output = [
  {
    title: 'Unit',
    settings: {
      Description: 'Idle manager for Wayland',
    },
  }
];
