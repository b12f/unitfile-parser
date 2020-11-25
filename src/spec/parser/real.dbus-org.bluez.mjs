export const string = `[Unit]
Description=Bluetooth service
Documentation=man:bluetoothd(8)
ConditionPathIsDirectory=/sys/class/bluetooth

[Service]
Type=dbus
BusName=org.bluez
ExecStart=/usr/lib/bluetooth/bluetoothd
NotifyAccess=main
#WatchdogSec=10
#Restart=on-failure
CapabilityBoundingSet=CAP_NET_ADMIN CAP_NET_BIND_SERVICE
LimitNPROC=1
ProtectHome=true
ProtectSystem=full

[Install]
WantedBy=bluetooth.target
Alias=dbus-org.bluez.service`;

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
          "value": "Bluetooth service"
        },
        {
          "type": "setting",
          "name": "Documentation",
          "value": "man:bluetoothd(8)"
        },
        {
          "type": "setting",
          "name": "ConditionPathIsDirectory",
          "value": "/sys/class/bluetooth"
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
          "value": "org.bluez"
        },
        {
          "type": "setting",
          "name": "ExecStart",
          "value": "/usr/lib/bluetooth/bluetoothd"
        },
        {
          "type": "setting",
          "name": "NotifyAccess",
          "value": "main"
        },
        {
          "type": "comment",
          "value": "WatchdogSec=10"
        },
        {
          "type": "comment",
          "value": "Restart=on-failure"
        },
        {
          "type": "setting",
          "name": "CapabilityBoundingSet",
          "value": "CAP_NET_ADMIN CAP_NET_BIND_SERVICE"
        },
        {
          "type": "setting",
          "name": "LimitNPROC",
          "value": "1"
        },
        {
          "type": "setting",
          "name": "ProtectHome",
          "value": "true"
        },
        {
          "type": "setting",
          "name": "ProtectSystem",
          "value": "full"
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
          "value": "bluetooth.target"
        },
        {
          "type": "setting",
          "name": "Alias",
          "value": "dbus-org.bluez.service"
        }
      ]
    }
  ]
};
