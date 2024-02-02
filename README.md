# Hardhat starter
Hardhat, Typescript, mocha test env., 

Hardhat 
### Installation
```bash
# Initiate Project
yarn init -y

# Install devDependencies
yarn add -D hardhat @nomicfoundation/hardhat-toolbox hardhat-watcher ts-node typescript ethers chai@4 @types/node @types/mocha @types/chai@4 "@nomicfoundation/hardhat-chai-matchers@^2.0.0" "@nomicfoundation/hardhat-ethers@^3.0.0" "@nomicfoundation/hardhat-network-helpers@^1.0.0" "@nomicfoundation/hardhat-verify@^2.0.0" "@typechain/ethers-v6@^0.5.0" "@typechain/hardhat@^9.0.0" "hardhat-gas-reporter@^1.0.8" "solidity-coverage@^0.8.1" "typechain@^8.3.0"

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

## Resources 
Install the following extension package to ease the Hardhat smart contract development, testing and deployment

[Hardhat Developer Pack](https://marketplace.visualstudio.com/items?itemName=maratib.hardhat-developer-pack)