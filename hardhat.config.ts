import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import 'hardhat-watcher'

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    ganache: {
      url: "HTTP://127.0.0.1:7545",
      accounts: [
        `0x2e733aa7c0f4814fb2cba7193a89390f6b9ac6519e88eabe3ccfdef08cc63fae`,
      ],
    }
  },
  paths: {
    artifacts: "./artifacts",
  },
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
        { command: 'compile', params: { quiet: true } }
      ],
    },
  },


};

export default config;
