export const content = `# Outside comment
[Unit] # Heading comment
# Inline comment
Description=Idle manager for Wayland # End of value comment
ExecStart=echo\
  "some string" # End of value comment
Alias=asdf#Comment Without spaces

[Install]
# Comment only in this body
`;

export const result = {
  type: 'unitFile',
  comments: [ { type: 'comment', value: 'Outside comment' } ],
  sections: [
    {
      type: 'section',
      title: 'Unit',
      titleComment: { type: 'comment', value: 'Heading comment' },
      body: [
        { type: 'comment', value: 'Inline comment' },
        {
          type: 'setting',
          name: 'Description',
          value: 'Idle manager for Wayland',
          comment: { type: 'comment', value: 'End of value comment' }
        },
        {
          type: 'setting',
          name: 'ExecStart',
          value: 'echo  "some string"',
          comment: { type: 'comment', value: 'End of value comment' }
        },
        {
          type: 'setting',
          name: 'Alias',
          value: 'asdf',
          comment: { type: 'comment', value: 'Comment Without spaces' }
        }
      ]
    },
    {
      type: 'section',
      title: 'Install',
      titleComment: { type: 'comment', value: 'Comment only in this body' },
      body: []
    }
  ]
};
