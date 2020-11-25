import astToData from "../ast-to-data.mjs";

function runTest(input, expectedOutput) {
  const result = astToData(input);
  
  const expectedOutputString = JSON.stringify(expectedOutput);
  const resultString = JSON.stringify(result);
  if (expectedOutputString !== resultString) {
    console.dir(input, { depth: Infinity });
    throw new Error(`Mismatching result on ast-to-data testcase:
=======Result======

${resultString}

=======Expected======

${expectedOutputString}\n\n`);
  }
}


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
    /*
    "./from-primitive/real.dbus-org.bluez.mjs",
    "./from-primitive/real.display-manager.mjs",
    "./from-primitive/real.systemd-fsck-silent@.mjs",
    "./from-primitive/real.systemd-fsck-silent-root.mjs",
    "./from-primitive/real.dbus-org.freedesktop.Avahi.mjs",
    "./from-primitive/real.dbus-org.freedesktop.ModemManager1.mjs",
    "./from-primitive/real.dbus-org.freedesktop.nm-dispatcher.mjs",
    */
  ].map(file => import(file)));
  const results = cases.forEach(({ ast, data }) => runTest(ast, data));
})();

