export const string = `[Unit]
Description=TUI display manager
After=systemd-user-sessions.service plymouth-quit-wait.service
After=getty@tty2.service

[Service]
Type=idle
ExecStart=/usr/bin/ly
StandardInput=tty
TTYPath=/dev/tty2
TTYReset=yes
TTYVHangup=yes

[Install]
Alias=display-manager.service`;

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
          "value": "TUI display manager"
        },
        {
          "type": "setting",
          "name": "After",
          "value": "systemd-user-sessions.service plymouth-quit-wait.service"
        },
        {
          "type": "setting",
          "name": "After",
          "value": "getty@tty2.service"
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
          "value": "idle"
        },
        {
          "type": "setting",
          "name": "ExecStart",
          "value": "/usr/bin/ly"
        },
        {
          "type": "setting",
          "name": "StandardInput",
          "value": "tty"
        },
        {
          "type": "setting",
          "name": "TTYPath",
          "value": "/dev/tty2"
        },
        {
          "type": "setting",
          "name": "TTYReset",
          "value": "yes"
        },
        {
          "type": "setting",
          "name": "TTYVHangup",
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
          "name": "Alias",
          "value": "display-manager.service"
        }
      ]
    }
  ]
};
