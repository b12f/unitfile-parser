import astToData from "../ast-to-data.mjs";

function runTest(input, expectedOutput) {
  const result = astToData(input);
  
  const expectedOutputString = JSON.stringify(expectedOutput);
  const resultString = JSON.stringify(result);
  if (expectedOutputString !== resultString) {
    console.dir(input, { depth: Infinity });
    throw new Error(`Mismatching result on testcase:
=======Result======

${resultString}

=======Expected======

${expectedOutputString}\n\n`);
  }
}


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
    /*
    "./parser/real.dbus-org.bluez.mjs",
    "./parser/real.display-manager.mjs",
    "./parser/real.systemd-fsck-silent@.mjs",
    "./parser/real.systemd-fsck-silent-root.mjs",
    "./parser/real.dbus-org.freedesktop.Avahi.mjs",
    "./parser/real.dbus-org.freedesktop.ModemManager1.mjs",
    "./parser/real.dbus-org.freedesktop.nm-dispatcher.mjs",
    */
  ].map(file => import(file)));
  const results = cases.forEach(({ ast, data }) => runTest(ast, data));
})();

