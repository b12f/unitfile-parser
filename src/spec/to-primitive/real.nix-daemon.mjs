export const string = `[Unit]
Description=Nix Daemon
RequiresMountsFor=/nix/store
RequiresMountsFor=/nix/var
ConditionPathIsReadWrite=/nix/var/nix/daemon-socket

[Service]
ExecStart=@/nix/store/fwak7l5jjl0py4wldsqjbv7p7rdzql0b-nix-2.3.9/bin/nix-daemon nix-daemon --daemon
KillMode=process

[Install]
WantedBy=multi-user.target`;

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
          "value": "Nix Daemon"
        },
        {
          "type": "setting",
          "name": "RequiresMountsFor",
          "value": "/nix/store"
        },
        {
          "type": "setting",
          "name": "RequiresMountsFor",
          "value": "/nix/var"
        },
        {
          "type": "setting",
          "name": "ConditionPathIsReadWrite",
          "value": "/nix/var/nix/daemon-socket"
        }
      ]
    },
    {
      "type": "section",
      "title": "Service",
      "body": [
        {
          "type": "setting",
          "name": "ExecStart",
          "value": "@/nix/store/fwak7l5jjl0py4wldsqjbv7p7rdzql0b-nix-2.3.9/bin/nix-daemon nix-daemon --daemon"
        },
        {
          "type": "setting",
          "name": "KillMode",
          "value": "process"
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
          "value": "multi-user.target"
        }
      ]
    }
  ]
};

export const data = [
  {
    title: 'Unit',
    settings: {
      Description: 'Nix Daemon',
      RequiresMountsFor: [
        '/nix/store',
        '/nix/var',
      ],
      ConditionPathIsReadWrite: '/nix/var/nix/daemon-socket',
    },
  },
  {
    title: 'Service',
    settings: {
      ExecStart: '@/nix/store/fwak7l5jjl0py4wldsqjbv7p7rdzql0b-nix-2.3.9/bin/nix-daemon nix-daemon --daemon',
      KillMode: 'process',
    },
  },
  {
    title: 'Install',
    settings: {
      WantedBy: 'multi-user.target',
    },
  },
];
