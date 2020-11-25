import stringToAst from "../string-to-ast.mjs";

function runTest(input, result) {
  const ast = stringToAst(input);

  const resultString = JSON.stringify(ast, null, 2);
  const expectedString = JSON.stringify(result, null, 2);
  if (resultString !== expectedString) {
    throw new Error(`mismatching result on testcase:
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
    "./parser/basic.mjs",
    "./parser/comments.mjs",
    "./parser/comment-only.mjs",
    "./parser/multiline-value.mjs",
    "./parser/weird-characters.mjs",
    "./parser/repeated-settings.mjs",
    "./parser/real.nix-daemon.mjs",
    "./parser/real.maia-console@.mjs",
    "./parser/real.dbus-org.bluez.mjs",
    "./parser/real.display-manager.mjs",
    "./parser/real.systemd-fsck-silent@.mjs",
    "./parser/real.systemd-fsck-silent-root.mjs",
    "./parser/real.dbus-org.freedesktop.Avahi.mjs",
    "./parser/real.dbus-org.freedesktop.ModemManager1.mjs",
    "./parser/real.dbus-org.freedesktop.nm-dispatcher.mjs",
  ].map(file => import(file)));
  const results = cases.forEach(({ string, ast }) => runTest(string, ast));
})();
