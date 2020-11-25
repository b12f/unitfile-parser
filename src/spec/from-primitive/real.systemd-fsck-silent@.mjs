export const string = `#  SPDX-License-Identifier: LGPL-2.1+
#
#  This file is part of systemd.
#
#  systemd is free software; you can redistribute it and/or modify it
#  under the terms of the GNU Lesser General Public License as published by
#  the Free Software Foundation; either version 2.1 of the License, or
#  (at your option) any later version.

[Unit]
Description=File System Check on %f
Documentation=man:systemd-fsck@.service(8)
DefaultDependencies=no
BindsTo=%i.device
After=%i.device systemd-fsck-silent-root.service local-fs-pre.target
Before=systemd-quotacheck.service shutdown.target

[Service]
Type=oneshot
RemainAfterExit=yes
ExecStart=/usr/lib/systemd/systemd-fsck
StandardOutput=null
StandardError=journal+console
TimeoutSec=0`;

export const ast = {
  "type": "unitFile",
  "comments": [
    {
      "type": "comment",
      "value": " SPDX-License-Identifier: LGPL-2.1+"
    },
    {
      "type": "comment",
      "value": ""
    },
    {
      "type": "comment",
      "value": " This file is part of systemd."
    },
    {
      "type": "comment",
      "value": ""
    },
    {
      "type": "comment",
      "value": " systemd is free software; you can redistribute it and/or modify it"
    },
    {
      "type": "comment",
      "value": " under the terms of the GNU Lesser General Public License as published by"
    },
    {
      "type": "comment",
      "value": " the Free Software Foundation; either version 2.1 of the License, or"
    },
    {
      "type": "comment",
      "value": " (at your option) any later version."
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
          "value": "File System Check on %f"
        },
        {
          "type": "setting",
          "name": "Documentation",
          "value": "man:systemd-fsck@.service(8)"
        },
        {
          "type": "setting",
          "name": "DefaultDependencies",
          "value": "no"
        },
        {
          "type": "setting",
          "name": "BindsTo",
          "value": "%i.device"
        },
        {
          "type": "setting",
          "name": "After",
          "value": "%i.device systemd-fsck-silent-root.service local-fs-pre.target"
        },
        {
          "type": "setting",
          "name": "Before",
          "value": "systemd-quotacheck.service shutdown.target"
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
          "name": "RemainAfterExit",
          "value": "yes"
        },
        {
          "type": "setting",
          "name": "ExecStart",
          "value": "/usr/lib/systemd/systemd-fsck"
        },
        {
          "type": "setting",
          "name": "StandardOutput",
          "value": "null"
        },
        {
          "type": "setting",
          "name": "StandardError",
          "value": "journal+console"
        },
        {
          "type": "setting",
          "name": "TimeoutSec",
          "value": "0"
        }
      ]
    }
  ]
};
