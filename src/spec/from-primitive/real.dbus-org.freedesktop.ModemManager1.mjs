export const string = `[Unit]
Description=Modem Manager
After=polkit.service
Requires=polkit.service

[Service]
Type=dbus
BusName=org.freedesktop.ModemManager1
ExecStart=/usr/bin/ModemManager
StandardError=null
Restart=on-abort
CapabilityBoundingSet=CAP_SYS_ADMIN
ProtectSystem=true
ProtectHome=true
PrivateTmp=true
RestrictAddressFamilies=AF_NETLINK AF_UNIX
NoNewPrivileges=true
User=root

[Install]
WantedBy=multi-user.target
Alias=dbus-org.freedesktop.ModemManager1.service`;

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
          "value": "Modem Manager"
        },
        {
          "type": "setting",
          "name": "After",
          "value": "polkit.service"
        },
        {
          "type": "setting",
          "name": "Requires",
          "value": "polkit.service"
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
          "value": "org.freedesktop.ModemManager1"
        },
        {
          "type": "setting",
          "name": "ExecStart",
          "value": "/usr/bin/ModemManager"
        },
        {
          "type": "setting",
          "name": "StandardError",
          "value": "null"
        },
        {
          "type": "setting",
          "name": "Restart",
          "value": "on-abort"
        },
        {
          "type": "setting",
          "name": "CapabilityBoundingSet",
          "value": "CAP_SYS_ADMIN"
        },
        {
          "type": "setting",
          "name": "ProtectSystem",
          "value": "true"
        },
        {
          "type": "setting",
          "name": "ProtectHome",
          "value": "true"
        },
        {
          "type": "setting",
          "name": "PrivateTmp",
          "value": "true"
        },
        {
          "type": "setting",
          "name": "RestrictAddressFamilies",
          "value": "AF_NETLINK AF_UNIX"
        },
        {
          "type": "setting",
          "name": "NoNewPrivileges",
          "value": "true"
        },
        {
          "type": "setting",
          "name": "User",
          "value": "root"
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
          "name": "Alias",
          "value": "dbus-org.freedesktop.ModemManager1.service"
        }
      ]
    }
  ]
};
