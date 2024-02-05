# Hardhat starter
Hardhat, Typescript, mocha test env., Smart Contracts development, testing and deployment.

`Hardhat development using yarn`

### Installation
```bash
# Install hardhat shorthand (Instead of writting full npx hardhat, you can just use `hh`)
npm install --global hardhat-shorthand
# Some of hardhat's common commands
hh help
hh compile 
hh clean
hh watch


# Initiate Project
yarn init -y

# Install devDependencies
yarn add -D hardhat @nomicfoundation/hardhat-toolbox hardhat-watcher ts-node typescript ethers chai@4 @types/node @types/mocha @types/chai@4 @nomicfoundation/hardhat-chai-matchers@^2.0.0 @nomicfoundation/hardhat-ethers@^3.0.0 @nomicfoundation/hardhat-network-helpers@^1.0.0 @nomicfoundation/hardhat-verify@^2.0.0 @typechain/ethers-v6@^0.5.0 @typechain/hardhat@^9.0.0 hardhat-gas-reporter@^1.0.8 solidity-coverage@^0.8.1 typechain@^8.3.0

# Create required folders
mkdir contracts scripts test

```

### Hardhat Watcher
To watch the contracts and compile them on change 
```javascript
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import 'hardhat-watcher'

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  watcher: {
    compilation: {
      tasks: ['compile'],
      files: ['./contracts'],
      ignoredFiles: ['**/.vscode'],
      verbose: true,
      clearOnStart: true,
      start: 'echo Running my compilation task now..',
    },
    ci: {
      tasks: [
        'clean',
        { command: 'compile', params: { quiet: true } },
        // { command: 'test', params: { noCompile: true, testFiles: ['testfile.ts'] } },
      ],
    },
  }

};

export default config;
```

### Package.json add scripts
```json
{
  "scripts": {
    "dev": "npx hardhat watch"
  },
  
}
```

### Typescript test settings

To Enable Test explorer (`Cmd+Shift+P -> Mocha Test Explorer: Enable for a workspace folder`)

There are two ways to make Mocha Test Explorer works with Hardhat typescript testing

```javascript
//1 . Add the following to vs-code settings.json
    "mochaExplorer.files": "test/**/*.{js,ts}",
    "mochaExplorer.require": "hardhat/register"
```

```javascript
//OR add .mocharc.json to root folder and add the following
{
  "require": "hardhat/register",
  "timeout": 40000,
  "_": [
    "test/**/*.ts"
  ]
}

```

## Resources 
Install the following extension package to ease the Hardhat smart contract development, testing and deployment

[Hardhat Developer Pack](https://marketplace.visualstudio.com/items?itemName=maratib.hardhat-developer-pack)