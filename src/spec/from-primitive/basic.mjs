export const string = `[Unit]
Description=Idle manager for Wayland`;

export const ast = {
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

export const data = [
  {
    title: 'Unit',
    settings: {
      Description: 'Idle manager for Wayland',
    },
  }
];
