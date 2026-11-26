import fs from 'fs';
import os from 'os';
import path from 'path';

const { writeSdkVersion } = require('../../scripts/write-sdk-version');

/**
 * release-it runs the tests before it bumps the version, so the published
 * package would carry the previous SDK_VERSION unless the bump rewrites it.
 */
describe('writeSdkVersion', () => {
  it('replaces the version and keeps the rest of the file', () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'sdk-version-'));
    const file = path.join(dir, 'sdk.ts');
    fs.writeFileSync(file, "/** doc */\nexport const SDK_VERSION = '0.8.4';\n");

    writeSdkVersion('0.9.0', file);

    expect(fs.readFileSync(file, 'utf8')).toEqual(
      "/** doc */\nexport const SDK_VERSION = '0.9.0';\n"
    );
  });

  it('refuses a value that is not a version', () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'sdk-version-'));
    const file = path.join(dir, 'sdk.ts');
    fs.writeFileSync(file, "export const SDK_VERSION = '0.8.4';\n");

    expect(() => writeSdkVersion("1.0.0'; evil()", file)).toThrow();
    expect(fs.readFileSync(file, 'utf8')).toContain("'0.8.4'");
  });

  it('fails when the constant is not in the file', () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'sdk-version-'));
    const file = path.join(dir, 'sdk.ts');
    fs.writeFileSync(file, 'export {};\n');

    expect(() => writeSdkVersion('0.9.0', file)).toThrow();
  });

  it('is run by release-it after the version bump', () => {
    const pkg = require('../../package.json');

    expect(pkg['release-it'].hooks['after:bump']).toContain(
      'node scripts/write-sdk-version.js ${version}'
    );
  });
});
