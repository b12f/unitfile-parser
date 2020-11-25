export const string = `[Unit]
Description=maia color scheme for the console
After=getty@%i.service

[Service]
Type=oneshot
ExecStart=/usr/bin/maia-console
StandardOutput=tty
TTYPath=/dev/%i
TTYVTDisallocate=yes

[Install]
WantedBy=getty@%i.service`;

export const ast = {
  "type": "unitFile",
  "comments": [],
  "sections": [
    {
      "type": "section",
      "title": "Unit",
      "body": [
        {
          "type": "setting",
          "name": "Description",
          "value": "maia color scheme for the console"
        },
        {
          "type": "setting",
          "name": "After",
          "value": "getty@%i.service"
        }
      ]
    },
    {
      "type": "section",
      "title": "Service",
      "body": [
        {
          "type": "setting",
          "name": "Type",
          "value": "oneshot"
        },
        {
          "type": "setting",
          "name": "ExecStart",
          "value": "/usr/bin/maia-console"
        },
        {
          "type": "setting",
          "name": "StandardOutput",
          "value": "tty"
        },
        {
          "type": "setting",
          "name": "TTYPath",
          "value": "/dev/%i"
        },
        {
          "type": "setting",
          "name": "TTYVTDisallocate",
          "value": "yes"
        }
      ]
    },
    {
      "type": "section",
      "title": "Install",
      "body": [
        {
          "type": "setting",
          "name": "WantedBy",
          "value": "getty@%i.service"
        }
      ]
    }
  ]
};

export const data = [
  {
    title: 'Unit',
    settings: {
      Description: 'maia color scheme for the console',
      After: 'getty@%i.service',
    },
  },
  {
    title: 'Service',
    settings: {
      Type: 'oneshot',
      ExecStart: '/usr/bin/maia-console',
      StandardOutput: 'tty',
      TTYPath: '/dev/%i',
      TTYVTDisallocate: 'yes',
    },
  },
  {
    title: 'Install',
    settings: {
      WantedBy: 'getty@%i.service',
    },
  },
];
