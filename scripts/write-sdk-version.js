/**
 * Writes the package version into src/constants/sdk.ts.
 *
 * release-it runs the tests before it bumps package.json, so without this the
 * published package would send the previous version in its User-Agent header.
 * Run by the release-it after:bump hook: node scripts/write-sdk-version.js <version>
 */
const fs = require('fs');
const path = require('path');

const DEFAULT_FILE = path.join(__dirname, '..', 'src', 'constants', 'sdk.ts');
const VERSION = /^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/;
const CONSTANT = /export const SDK_VERSION = '[^']*';/;

function writeSdkVersion(version, file = DEFAULT_FILE) {
  if (!VERSION.test(version)) {
    throw new Error(`Not a version: ${version}`);
  }
  const source = fs.readFileSync(file, 'utf8');
  if (!CONSTANT.test(source)) {
    throw new Error(`SDK_VERSION not found in ${file}`);
  }
  fs.writeFileSync(
    file,
    source.replace(CONSTANT, `export const SDK_VERSION = '${version}';`)
  );
}

module.exports = { writeSdkVersion };

if (require.main === module) {
  writeSdkVersion(process.argv[2]);
}
