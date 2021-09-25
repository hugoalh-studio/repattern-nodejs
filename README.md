# REPattern (NodeJS Edition)

[`REPattern.NodeJS`](https://github.com/hugoalh-studio/repattern-nodejs)
[![GitHub Contributors](https://img.shields.io/github/contributors/hugoalh-studio/repattern-nodejs?label=Contributors&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/repattern-nodejs/graphs/contributors)
[![GitHub Issues](https://img.shields.io/github/issues-raw/hugoalh-studio/repattern-nodejs?label=Issues&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/repattern-nodejs/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr-raw/hugoalh-studio/repattern-nodejs?label=Pull%20Requests&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/repattern-nodejs/pulls)
[![GitHub Discussions](https://img.shields.io/github/discussions/hugoalh-studio/repattern-nodejs?label=Discussions&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/repattern-nodejs/discussions)
[![GitHub Stars](https://img.shields.io/github/stars/hugoalh-studio/repattern-nodejs?label=Stars&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/repattern-nodejs/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/hugoalh-studio/repattern-nodejs?label=Forks&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/repattern-nodejs/network/members)
![GitHub Languages](https://img.shields.io/github/languages/count/hugoalh-studio/repattern-nodejs?label=Languages&logo=github&logoColor=ffffff&style=flat-square)
[![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/hugoalh-studio/repattern-nodejs?label=Grade&logo=codefactor&logoColor=ffffff&style=flat-square)](https://www.codefactor.io/repository/github/hugoalh-studio/repattern-nodejs)
[![LGTM Alerts](https://img.shields.io/lgtm/alerts/g/hugoalh-studio/repattern-nodejs?label=Alerts&logo=lgtm&logoColor=ffffff&style=flat-square)
![LGTM Grade](https://img.shields.io/lgtm/grade/javascript/g/hugoalh-studio/repattern-nodejs?label=Grade&logo=lgtm&logoColor=ffffff&style=flat-square)](https://lgtm.com/projects/g/hugoalh-studio/repattern-nodejs)
[![License](https://img.shields.io/static/v1?label=License&message=MIT&color=brightgreen&style=flat-square)](./LICENSE.md)

| **Release** | **Latest** (![GitHub Latest Release Date](https://img.shields.io/github/release-date/hugoalh-studio/repattern-nodejs?label=%20&style=flat-square)) | **Pre** (![GitHub Latest Pre-Release Date](https://img.shields.io/github/release-date-pre/hugoalh-studio/repattern-nodejs?label=%20&style=flat-square)) |
|:-:|:-:|:-:|
| [**GitHub**](https://github.com/hugoalh-studio/repattern-nodejs/releases) ![GitHub Total Downloads](https://img.shields.io/github/downloads/hugoalh-studio/repattern-nodejs/total?label=%20&style=flat-square) | ![GitHub Latest Release Version](https://img.shields.io/github/release/hugoalh-studio/repattern-nodejs?sort=semver&label=%20&style=flat-square) | ![GitHub Latest Pre-Release Version](https://img.shields.io/github/release/hugoalh-studio/repattern-nodejs?include_prereleases&sort=semver&label=%20&style=flat-square) |
| [**NPM**](https://www.npmjs.com/package/@hugoalh/repattern) ![NPM Total Downloads](https://img.shields.io/npm/dt/@hugoalh/repattern?label=%20&style=flat-square) | ![NPM Latest Release Version](https://img.shields.io/npm/v/@hugoalh/repattern/latest?label=%20&style=flat-square) | ![NPM Latest Pre-Release Version](https://img.shields.io/npm/v/@hugoalh/repattern/pre?label=%20&style=flat-square) |

## 📝 Description

A NodeJS module to provide regular expression pattern.

### Pattern

- **`base64`**
- **`base64URL`**
- **`bigInteger`:** Big integer number.
- **`blake2b384`**
- **`blake2b512`**
- **`blake2s224`**
- **`blake2s256`**
- **`blake224`**
- **`blake256`**
- **`blake384`**
- **`blake512`**
- **`colourCMYK`:** CMYK colour.
- **`colourHex`:** Hex colour.
- **`colourHexAlpha`:** Hex-alpha colour.
- **`colourHSL`:** HSL colour.
- **`colourHSLA`:** HSLA colour.
- **`colourHWB`:** HWB colour.
- **`colourHWBA`:** HWBA colour.
- **`colourNCol`:** NCol colour.
- **`colourRGB`:** RGB colour.
- **`colourRGBA`:** RGBA colour.
- **`email`:** Electronic mail (email) address.
- **`githubRepository`:** GitHub repository.
- **`hash160`**
- **`hash224`**
- **`hash256`**
- **`hash384`**
- **`hash512`**
- **`ip`:** Internet Protocol address version 4 (IPV4) and 6 (IPV6).
- **`ipv4`:** Internet Protocol address version 4 (IPV4).
- **`ipv6`:** Internet Protocol address version 6 (IPV6).
- **`macAddress`:** MAC address.
- **`md2`**
- **`md4`**
- **`md5`**
- **`md6`**
- **`number`:** Number.
- **`regularExpression`:** Regular expression.
- **`semanticVersioning`:** Semantic Versioning version 2.0.0 (SemVer2).
- **`sha1`**
- **`sha224`**
- **`sha256`**
- **`sha384`**
- **`sha512`**
- **`shebang`:** Shebang; Not support flag.

### Flag

- **`boundary`:** `<boolean = false>` Boundary; Cannot use with flag `exactly`.
- **`caseInsensitive`:** `<boolean = false>` Case insensitive.
- **`exactly`:** `<boolean = false>` Exact(ly); Cannot use with flag `boundary`.
- **`global`:** `<boolean = false>` Global.

## 📚 Documentation

### Getting Started

#### Install

NodeJS (>= v14.15.0) + NPM (>= v6.14.8):

```sh
npm install @hugoalh/repattern
```

#### Use In CommonJS

```js
const repattern = require("@hugoalh/repattern");
```

#### Use In ModuleJS

```js
import repattern from "@hugoalh/repattern";
```

### API

```ts
repattern(
  name: string,
  flag?: string = ""
): RegExp
```
