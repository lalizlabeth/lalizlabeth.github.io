'use strict';

const fs = require('fs');

function readlinkSyncOrNull(path) {
  try {
    return fs.readlinkSync(path);
  } catch (e) {
    if (typeof e === 'object' && e !== null) {
      if (e.code === 'EINVAL' /* posix */ || e.code === 'UNKNOWN' /* win32 */) {
        // if something else (like a file) already exists
        return path;
      } else if (e.code === 'ENOENT') {
        // no LINK exists
        return null;
      }
    }
    throw e;
  }
}

function symlinkSyncUnlessPresent(from, to) {
  try {
    fs.symlinkSync(from, to);
  } catch (e) {
    if (typeof e === 'object' && e !== null && e.code === 'EEXIST') {
      return;
    } else {
      throw e;
    }
  }
}

function unlinkIfPresent(path) {
  try {
    fs.unlinkSync(path);
  } catch (e) {
    if (typeof e === 'object' && e !== null && e.code === 'ENOENT') {
      return;
    } else {
      throw e;
    }
  }
}

module.exports = ensureSymlinkSync;
function ensureSymlinkSync(from, to) {
  let existingFrom = readlinkSyncOrNull(to);
  if (existingFrom === from) {
    return;
  }
  if (existingFrom) {
    unlinkIfPresent(to);
  }
  symlinkSyncUnlessPresent(from, to);
}
