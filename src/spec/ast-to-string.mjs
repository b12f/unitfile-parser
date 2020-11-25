import astToString from "../ast-to-string.mjs";

function runTest(input, expectedString) {
  const resultString = astToString(input);

  if (resultString !== expectedString) {
    throw new Error(`mismatching result on ast-to-string testcase:

=======result======

${JSON.stringify(resultString)}

=======expected======

${JSON.stringify(expectedString)}

`);
  }
};

(async () => {
  const cases = await Promise.all([
    "./to-primitive/basic.mjs",
    "./to-primitive/comments.mjs",
    "./to-primitive/comment-only.mjs",
    "./to-primitive/multiline-value.mjs",
    "./to-primitive/weird-characters.mjs",
    "./to-primitive/repeated-settings.mjs",
    "./to-primitive/real.nix-daemon.mjs",
    "./to-primitive/real.maia-console@.mjs",
    "./to-primitive/real.dbus-org.bluez.mjs",
    "./to-primitive/real.display-manager.mjs",
    "./to-primitive/real.systemd-fsck-silent@.mjs",
    "./to-primitive/real.systemd-fsck-silent-root.mjs",
    "./to-primitive/real.dbus-org.freedesktop.Avahi.mjs",
    "./to-primitive/real.dbus-org.freedesktop.ModemManager1.mjs",
    "./to-primitive/real.dbus-org.freedesktop.nm-dispatcher.mjs",
  ].map(file => import(file)));
  const results = cases.forEach(({ ast, string }) => runTest(ast, string));
})();
