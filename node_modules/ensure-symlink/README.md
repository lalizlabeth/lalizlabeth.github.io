# ensure-symlink

[![Build Status](https://travis-ci.org/stefanpenner/ensure-symlink.svg?branch=master)](https://travis-ci.org/stefanpenner/ensure-symlink)
[![Build status](https://ci.appveyor.com/api/projects/status/am8b5krhnbgf7yvj/branch/master?svg=true)](https://ci.appveyor.com/project/embercli/ensure-symlink/branch/master)


used to implement a resilient "best-effort last write wins" symlink

## Usage

```sh
yarn add ensure-symlink

# or

npm install ensure-symlink
```

```js
const ensureSymlink = require('ensure-symlink');

ensureSymlink(from, to);
```
