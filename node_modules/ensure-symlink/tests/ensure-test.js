'use strict';

const fs = require('fs-extra');
const ensureSymlinkSync = require('../');
const expect = require('chai').expect;
const path = require('path');

const TMP_DIR = path.resolve(__dirname + '/../tmp');
const INPUT_FILE = path.join(TMP_DIR, 'foo.js');
const OTHER_FILE = path.join(TMP_DIR, 'other.js');
const OUTPUT_FILE = path.join(TMP_DIR, 'bar.js');

fs.removeSync(TMP_DIR);

describe('ensureSymlinkSync', function() {
  beforeEach(function() {
    fs.mkdirSync(TMP_DIR);
  });

  afterEach(function() {
    fs.removeSync(TMP_DIR);
  });

  it('links when target is missing', function() {
    fs.writeFileSync(INPUT_FILE, 'OMG');
    ensureSymlinkSync(INPUT_FILE, OUTPUT_FILE);

    expect(fs.readlinkSync(OUTPUT_FILE)).to.eql(INPUT_FILE);
    expect(fs.readFileSync(OUTPUT_FILE, 'UTF8')).to.eql('OMG');
  });

  it('does nothing when target is identical', function() {
    fs.writeFileSync(INPUT_FILE, 'OMG');
    fs.symlinkSync(INPUT_FILE, OUTPUT_FILE);

    expect(fs.readlinkSync(OUTPUT_FILE)).to.eql(INPUT_FILE);
    expect(fs.readFileSync(OUTPUT_FILE, 'UTF8')).to.eql('OMG');

    ensureSymlinkSync(INPUT_FILE, OUTPUT_FILE);

    expect(fs.readlinkSync(OUTPUT_FILE)).to.eql(INPUT_FILE);
    expect(fs.readFileSync(OUTPUT_FILE, 'UTF8')).to.eql('OMG');
  });

  it('overwrites if target is different', function() {
    fs.writeFileSync(INPUT_FILE, 'OMG');
    fs.writeFileSync(OTHER_FILE, 'OMG (OTHER)');

    fs.symlinkSync(OTHER_FILE, OUTPUT_FILE); // existing, but different symlink

    expect(fs.readFileSync(OUTPUT_FILE, 'UTF8')).to.eql('OMG (OTHER)');
    expect(fs.readlinkSync(OUTPUT_FILE)).to.eql(OTHER_FILE);

    ensureSymlinkSync(INPUT_FILE, OUTPUT_FILE); // new link

    expect(fs.readlinkSync(OUTPUT_FILE)).to.eql(INPUT_FILE);
    expect(fs.readFileSync(OUTPUT_FILE, 'UTF8')).to.eql('OMG');

    fs.unlinkSync(OUTPUT_FILE);

    fs.writeFileSync(OUTPUT_FILE, 'FILE IN OUTPUT');

    ensureSymlinkSync(INPUT_FILE, OUTPUT_FILE); // new link
    expect(fs.readFileSync(OUTPUT_FILE, 'UTF8')).to.eql('OMG');
  });
});
