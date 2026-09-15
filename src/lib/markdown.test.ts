import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { encodeShieldParam, generateMarkdown } from './markdown';
import type { ProjectData } from '@/types';

function makeProject(version: string, license: string): ProjectData {
  return {
    name: 'demo',
    description: 'demo project',
    version,
    author: 'tester',
    license,
    repository: '',
    homepage: '',
    keywords: [],
    sections: [
      {
        id: 'header',
        type: 'header',
        title: 'Header',
        content: '',
        enabled: true,
        order: 0,
      },
    ],
  };
}

describe('encodeShieldParam (shields.io badge encoding)', () => {
  it('encodes license with space (Apache 2.0)', () => {
    assert.equal(encodeShieldParam('Apache 2.0'), 'Apache_2.0');
  });

  it('encodes license with space (GPL v3)', () => {
    assert.equal(encodeShieldParam('GPL v3'), 'GPL_v3');
  });

  it('escapes dashes and encodes slashes in semver (v1.0.0-beta/1)', () => {
    const encoded = encodeShieldParam('v1.0.0-beta/1');
    // `-` must be escaped as `--` so shields.io does not treat it as a separator.
    assert.ok(encoded.includes('--'), `expected escaped dash in "${encoded}"`);
    // `/` must not appear raw in the URL path segment.
    assert.ok(!encoded.includes('/'), `expected no raw slash in "${encoded}"`);
    assert.ok(encoded.includes('%2F'), `expected percent-encoded slash in "${encoded}"`);
    assert.equal(encoded, 'v1.0.0--beta%2F1');
  });

  it('leaves simple values untouched', () => {
    assert.equal(encodeShieldParam('MIT'), 'MIT');
    assert.equal(encodeShieldParam('1.0.0'), '1.0.0');
  });
});

describe('renderHeader badges via generateMarkdown', () => {
  it('produces valid badge URLs for Apache 2.0 and semver-with-slash', () => {
    const md = generateMarkdown(makeProject('v1.0.0-beta/1', 'Apache 2.0'));

    // Encoded values appear in badge URLs.
    assert.ok(md.includes('license-Apache_2.0-green'), `license badge not encoded:\n${md}`);
    assert.ok(
      md.includes('version-v1.0.0--beta%2F1-blue'),
      `version badge not encoded:\n${md}`,
    );

    // Raw broken values must not appear inside badge URLs.
    assert.ok(!md.includes('license-Apache 2.0-green'), 'raw space leaked into license badge URL');
    assert.ok(!md.includes('version-v1.0.0-beta/1-blue'), 'raw slash leaked into version badge URL');
  });
});
