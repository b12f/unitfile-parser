export const string = `[Unit]
Description=File System Check on Root Device
Documentation=man:systemd-fsck-root.service(8)
DefaultDependencies=no
Before=local-fs.target shutdown.target
ConditionPathIsReadWrite=!/

[Service]
Type=oneshot
RemainAfterExit=yes
ExecStart=/usr/lib/systemd/systemd-fsck
StandardOutput=null
StandardError=journal+console
TimeoutSec=0`;

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
          "value": "File System Check on Root Device"
        },
        {
          "type": "setting",
          "name": "Documentation",
          "value": "man:systemd-fsck-root.service(8)"
        },
        {
          "type": "setting",
          "name": "DefaultDependencies",
          "value": "no"
        },
        {
          "type": "setting",
          "name": "Before",
          "value": "local-fs.target shutdown.target"
        },
        {
          "type": "setting",
          "name": "ConditionPathIsReadWrite",
          "value": "!/"
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
