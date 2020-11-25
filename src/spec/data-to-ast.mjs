import dataToAst from "../data-to-ast.mjs";

function runTest(input, expectedOutput) {
  const result = dataToAst(input);
  
  const expectedOutputString = JSON.stringify(expectedOutput);
  const resultString = JSON.stringify(result);
  if (expectedOutputString !== resultString) {
    console.dir(input, { depth: Infinity });
    throw new Error(`Mismatching result on data-to-ast testcase:

=======Result======

${resultString}

=======Expected======

${expectedOutputString}\n\n`);
  }
}


(async () => {
  const cases = await Promise.all([
    "./to-primitive/basic.mjs",
    // "./to-primitive/comments.mjs",
    // "./to-primitive/comment-only.mjs",
    "./to-primitive/multiline-value.mjs",
    "./to-primitive/weird-characters.mjs",
    "./to-primitive/repeated-settings.mjs",
    "./to-primitive/real.nix-daemon.mjs",
    "./to-primitive/real.maia-console@.mjs",
    /*
    "./to-primitive/real.dbus-org.bluez.mjs",
    "./to-primitive/real.display-manager.mjs",
    "./to-primitive/real.systemd-fsck-silent@.mjs",
    "./to-primitive/real.systemd-fsck-silent-root.mjs",
    "./to-primitive/real.dbus-org.freedesktop.Avahi.mjs",
    "./to-primitive/real.dbus-org.freedesktop.ModemManager1.mjs",
    "./to-primitive/real.dbus-org.freedesktop.nm-dispatcher.mjs",
    */
  ].map(file => import(file)));
  const results = cases.forEach(({ data, ast }) => runTest(data, ast));
})();

