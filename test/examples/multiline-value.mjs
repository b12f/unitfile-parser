export const content = `
[Service]
ExecStart=/usr/bin/swayidle -w \\
          timeout 600 'swaylock-bg' \\
          timeout 900 'swaymsg "output * dpms off"' \\
               resume 'swaymsg "output * dpms on"' \\
          after-resume 'swaylock-bg'
ExecStop=/usr/bin/swayidle -w \\
          after-resume 'swaylock-bg' # Comment at the end
ExecPause=/usr/bin/swayidle -w \\
          after-resume 'swaylock-bg'#No space comment
`;

export const result = {
  type: 'unitFile',
  comments: [],
  sections: [
    {
      type: 'section',
      title: 'Service',
      titleComment: undefined,
      body: [
        {
          type: 'setting',
          name: 'ExecStart',
          value: '/usr/bin/swayidle -w \\\n' +
            "          timeout 600 'swaylock-bg' \\\n" +
            `          timeout 900 'swaymsg "output * dpms off"' \\\n` +
            `               resume 'swaymsg "output * dpms on"' \\\n` +
            "          after-resume 'swaylock-bg'",
          comment: undefined
        },
        {
          type: 'setting',
          name: 'ExecStop',
          value: "/usr/bin/swayidle -w \\\n          after-resume 'swaylock-bg'",
          comment: { type: 'comment', value: 'Comment at the end' }
        },
        {
          type: 'setting',
          name: 'ExecPause',
          value: "/usr/bin/swayidle -w \\\n          after-resume 'swaylock-bg'",
          comment: { type: 'comment', value: 'No space comment' }
        }
      ]
    }
  ]
};
