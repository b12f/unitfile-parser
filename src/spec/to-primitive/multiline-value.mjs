export const string = `[Service]
ExecStart=/usr/bin/swayidle -w \\
          timeout 600 'swaylock-bg' \\
          timeout 900 'swaymsg "output * dpms off"' \\
               resume 'swaymsg "output * dpms on"' \\
          after-resume 'swaylock-bg'
ExecStop=/usr/bin/swayidle -w \\
          after-resume 'swaylock-bg'
ExecPause=/usr/bin/swayidle -w \\
          after-resume 'swaylock-bg'`;

export const ast = {
  type: 'unitFile',
  comments: [],
  sections: [
    {
      type: 'section',
      title: 'Service',
      body: [
        {
          type: 'setting',
          name: 'ExecStart',
          value: '/usr/bin/swayidle -w \\\n' +
            "          timeout 600 'swaylock-bg' \\\n" +
            `          timeout 900 'swaymsg "output * dpms off"' \\\n` +
            `               resume 'swaymsg "output * dpms on"' \\\n` +
            "          after-resume 'swaylock-bg'",
        },
        {
          type: 'setting',
          name: 'ExecStop',
          value: "/usr/bin/swayidle -w \\\n          after-resume 'swaylock-bg'",
        },
        {
          type: 'setting',
          name: 'ExecPause',
          value: "/usr/bin/swayidle -w \\\n          after-resume 'swaylock-bg'",
        }
      ]
    }
  ]
};

export const data = [
  {
    title: 'Service',
    settings: {
      ExecStart: '/usr/bin/swayidle -w \\\n' +
            "          timeout 600 'swaylock-bg' \\\n" +
            `          timeout 900 'swaymsg "output * dpms off"' \\\n` +
            `               resume 'swaymsg "output * dpms on"' \\\n` +
            "          after-resume 'swaylock-bg'",
      ExecStop: "/usr/bin/swayidle -w \\\n          after-resume 'swaylock-bg'",
      ExecPause: "/usr/bin/swayidle -w \\\n          after-resume 'swaylock-bg'",
    },
  },
];
