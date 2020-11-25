import stringToAst from "../string-to-ast.mjs";

function runTest(input, result) {
  const ast = stringToAst(input);

  const resultString = JSON.stringify(ast, null, 2);
  const expectedString = JSON.stringify(result, null, 2);
  if (resultString !== expectedString) {
    throw new Error(`mismatching result on string-to-ast testcase:
${input}

=======result======

${resultString}

=======expected======

${expectedString}

`);
  }
};

(async () => {
  const cases = await Promise.all([
    "./from-primitive/basic.mjs",
    "./from-primitive/comments.mjs",
    "./from-primitive/comment-only.mjs",
    "./from-primitive/multiline-value.mjs",
    "./from-primitive/weird-characters.mjs",
    "./from-primitive/repeated-settings.mjs",
    "./from-primitive/real.nix-daemon.mjs",
    "./from-primitive/real.maia-console@.mjs",
    "./from-primitive/real.dbus-org.bluez.mjs",
    "./from-primitive/real.display-manager.mjs",
    "./from-primitive/real.systemd-fsck-silent@.mjs",
    "./from-primitive/real.systemd-fsck-silent-root.mjs",
    "./from-primitive/real.dbus-org.freedesktop.Avahi.mjs",
    "./from-primitive/real.dbus-org.freedesktop.ModemManager1.mjs",
    "./from-primitive/real.dbus-org.freedesktop.nm-dispatcher.mjs",
  ].map(file => import(file)));
  const results = cases.forEach(({ string, ast }) => runTest(string, ast));
})();
