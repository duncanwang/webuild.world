const MAINET_RPC_URL = "https://mainnet.infura.io/aJZ5aKsYEChL8ve7kFzC";
const ROPSTEN_RPC_URL = "https://ropsten.infura.io/aJZ5aKsYEChL8ve7kFzC";
const KOVAN_RPC_URL = "https://kovan.infura.io/aJZ5aKsYEChL8ve7kFzC";
const RINKEBY_RPC_URL = "https://rinkeby.infura.io/aJZ5aKsYEChL8ve7kFzC";

export default {
  CONTRACT_ABI: [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "upgradeProvider",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_version",
          "type": "uint256"
        }
      ],
      "name": "getProviderDetails",
      "outputs": [
        {
          "name": "_start",
          "type": "uint256"
        },
        {
          "name": "_end",
          "type": "uint256"
        },
        {
          "name": "_address",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "getProviderById",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getAllProviders",
      "outputs": [
        {
          "name": "addresses",
          "type": "address[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getCurrentProvider",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "DENOMINATOR",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "currentVersion",
      "outputs": [
        {
          "name": "",
          "type": "uint16"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_newId",
          "type": "uint256"
        }
      ],
      "name": "resetCurrentIdTo",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "currentId",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "VERSION",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "payable": true,
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipRenounced",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_skip",
          "type": "uint256"
        },
        {
          "name": "_take",
          "type": "uint256"
        }
      ],
      "name": "getBrickIds",
      "outputs": [
        {
          "name": "brickIds",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_title",
          "type": "string"
        },
        {
          "name": "_url",
          "type": "string"
        },
        {
          "name": "_description",
          "type": "string"
        },
        {
          "name": "_tags",
          "type": "bytes32[]"
        }
      ],
      "name": "addBrick",
      "outputs": [
        {
          "name": "id",
          "type": "uint256"
        }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_brickId",
          "type": "uint256"
        },
        {
          "name": "_title",
          "type": "string"
        },
        {
          "name": "_url",
          "type": "string"
        },
        {
          "name": "_description",
          "type": "string"
        },
        {
          "name": "_tags",
          "type": "bytes32[]"
        }
      ],
      "name": "changeBrick",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_brickId",
          "type": "uint256"
        },
        {
          "name": "_winners",
          "type": "address[]"
        },
        {
          "name": "_weights",
          "type": "uint256[]"
        }
      ],
      "name": "accept",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_brickId",
          "type": "uint256"
        }
      ],
      "name": "cancel",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_brickId",
          "type": "uint256"
        },
        {
          "name": "_builderId",
          "type": "bytes32"
        },
        {
          "name": "_nickName",
          "type": "bytes32"
        }
      ],
      "name": "startWork",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_brickId",
          "type": "uint256"
        }
      ],
      "name": "getBrick",
      "outputs": [
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        },
        {
          "name": "dateCreated",
          "type": "uint256"
        },
        {
          "name": "dateCompleted",
          "type": "uint256"
        },
        {
          "name": "status",
          "type": "uint32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_brickId",
          "type": "uint256"
        }
      ],
      "name": "getBrickDetail",
      "outputs": [
        {
          "name": "tags",
          "type": "bytes32[]"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "builders",
          "type": "uint32"
        },
        {
          "name": "winners",
          "type": "address[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_brickId",
          "type": "uint256"
        }
      ],
      "name": "getBrickBuilders",
      "outputs": [
        {
          "name": "addresses",
          "type": "address[]"
        },
        {
          "name": "dates",
          "type": "uint256[]"
        },
        {
          "name": "keys",
          "type": "bytes32[]"
        },
        {
          "name": "names",
          "type": "bytes32[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  // CONTRACT_ADDRESS: "0xbabb3faec25ff0dc5c34fe9e202d815a49594b41",
  CONTRACT_ADDRESS: "0x51EC288D994b037e7b94a263793Be80e49BAE0cb",
  network: {
    kovan: KOVAN_RPC_URL,
    mainnet: MAINET_RPC_URL,
    rinkeby: RINKEBY_RPC_URL,
    ropsten: ROPSTEN_RPC_URL
  },
  networkName: "kovan",
  // tslint:disable-next-line:object-literal-sort-keys
  chainId: 42
};
