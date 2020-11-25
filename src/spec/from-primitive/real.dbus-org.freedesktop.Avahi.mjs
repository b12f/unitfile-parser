export const string = `# This file is part of avahi.
#
# avahi is free software; you can redistribute it and/or modify it
# under the terms of the GNU Lesser General Public License as
# published by the Free Software Foundation; either version 2 of the
# License, or (at your option) any later version.
#
# avahi is distributed in the hope that it will be useful, but WITHOUT
# ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
# or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public
# License for more details.
#
# You should have received a copy of the GNU Lesser General Public
# License along with avahi; if not, write to the Free Software
# Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307
# USA.

[Unit]
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
  "comments": [
    {
      "type": "comment",
      "value": "This file is part of avahi."
    },
    {
      "type": "comment",
      "value": ""
    },
    {
      "type": "comment",
      "value": "avahi is free software; you can redistribute it and/or modify it"
    },
    {
      "type": "comment",
      "value": "under the terms of the GNU Lesser General Public License as"
    },
    {
      "type": "comment",
      "value": "published by the Free Software Foundation; either version 2 of the"
    },
    {
      "type": "comment",
      "value": "License, or (at your option) any later version."
    },
    {
      "type": "comment",
      "value": ""
    },
    {
      "type": "comment",
      "value": "avahi is distributed in the hope that it will be useful, but WITHOUT"
    },
    {
      "type": "comment",
      "value": "ANY WARRANTY; without even the implied warranty of MERCHANTABILITY"
    },
    {
      "type": "comment",
      "value": "or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public"
    },
    {
      "type": "comment",
      "value": "License for more details."
    },
    {
      "type": "comment",
      "value": ""
    },
    {
      "type": "comment",
      "value": "You should have received a copy of the GNU Lesser General Public"
    },
    {
      "type": "comment",
      "value": "License along with avahi; if not, write to the Free Software"
    },
    {
      "type": "comment",
      "value": "Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307"
    },
    {
      "type": "comment",
      "value": "USA."
    }
  ],
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
