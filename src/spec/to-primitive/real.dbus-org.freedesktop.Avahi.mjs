export const string = `[Unit]
Description=Avahi mDNS/DNS-SD Stack
Requires=avahi-daemon.socket

[Service]
Type=dbus
BusName=org.freedesktop.Avahi
ExecStart=/usr/bin/avahi-daemon -s
ExecReload=/usr/bin/avahi-daemon -r
NotifyAccess=main

[Install]
WantedBy=multi-user.target
Also=avahi-daemon.socket
Alias=dbus-org.freedesktop.Avahi.service`

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
          "value": "Avahi mDNS/DNS-SD Stack"
        },
        {
          "type": "setting",
          "name": "Requires",
          "value": "avahi-daemon.socket"
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
          "value": "dbus"
        },
        {
          "type": "setting",
          "name": "BusName",
          "value": "org.freedesktop.Avahi"
        },
        {
          "type": "setting",
          "name": "ExecStart",
          "value": "/usr/bin/avahi-daemon -s"
        },
        {
          "type": "setting",
          "name": "ExecReload",
          "value": "/usr/bin/avahi-daemon -r"
        },
        {
          "type": "setting",
          "name": "NotifyAccess",
          "value": "main"
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
        },
        {
          "type": "setting",
          "name": "Also",
          "value": "avahi-daemon.socket"
        },
        {
          "type": "setting",
          "name": "Alias",
          "value": "dbus-org.freedesktop.Avahi.service"
        }
      ]
    }
  ]
};
