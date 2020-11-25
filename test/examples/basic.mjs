export const content = `[Unit]
Description=Idle manager for Wayland`;

export const result = {
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
