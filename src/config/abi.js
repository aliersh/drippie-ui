const abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_owner",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "string",
                name: "nameref",
                type: "string",
            },
            {
                indexed: false,
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                components: [
                    {
                        internalType: "bool",
                        name: "reentrant",
                        type: "bool",
                    },
                    {
                        internalType: "uint256",
                        name: "interval",
                        type: "uint256",
                    },
                    {
                        internalType: "contract IDripCheck",
                        name: "dripcheck",
                        type: "address",
                    },
                    {
                        internalType: "bytes",
                        name: "checkparams",
                        type: "bytes",
                    },
                    {
                        components: [
                            {
                                internalType: "address payable",
                                name: "target",
                                type: "address",
                            },
                            {
                                internalType: "bytes",
                                name: "data",
                                type: "bytes",
                            },
                            {
                                internalType: "uint256",
                                name: "value",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Drippie.DripAction[]",
                        name: "actions",
                        type: "tuple[]",
                    },
                ],
                indexed: false,
                internalType: "struct Drippie.DripConfig",
                name: "config",
                type: "tuple",
            },
        ],
        name: "DripCreated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "string",
                name: "nameref",
                type: "string",
            },
            {
                indexed: false,
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                indexed: false,
                internalType: "address",
                name: "executor",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
        ],
        name: "DripExecuted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "string",
                name: "nameref",
                type: "string",
            },
            {
                indexed: false,
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                indexed: false,
                internalType: "enum Drippie.DripStatus",
                name: "status",
                type: "uint8",
            },
        ],
        name: "DripStatusUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnerUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "ReceivedETH",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "withdrawer",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "asset",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "WithdrewERC20",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "withdrawer",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "asset",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
        ],
        name: "WithdrewERC721",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "withdrawer",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "WithdrewETH",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_target",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
            {
                internalType: "uint256",
                name: "_value",
                type: "uint256",
            },
        ],
        name: "CALL",
        outputs: [
            {
                internalType: "bool",
                name: "success_",
                type: "bool",
            },
            {
                internalType: "bytes",
                name: "data_",
                type: "bytes",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_target",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
        ],
        name: "DELEGATECALL",
        outputs: [
            {
                internalType: "bool",
                name: "success_",
                type: "bool",
            },
            {
                internalType: "bytes",
                name: "data_",
                type: "bytes",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "_name",
                type: "string",
            },
            {
                components: [
                    {
                        internalType: "bool",
                        name: "reentrant",
                        type: "bool",
                    },
                    {
                        internalType: "uint256",
                        name: "interval",
                        type: "uint256",
                    },
                    {
                        internalType: "contract IDripCheck",
                        name: "dripcheck",
                        type: "address",
                    },
                    {
                        internalType: "bytes",
                        name: "checkparams",
                        type: "bytes",
                    },
                    {
                        components: [
                            {
                                internalType: "address payable",
                                name: "target",
                                type: "address",
                            },
                            {
                                internalType: "bytes",
                                name: "data",
                                type: "bytes",
                            },
                            {
                                internalType: "uint256",
                                name: "value",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Drippie.DripAction[]",
                        name: "actions",
                        type: "tuple[]",
                    },
                ],
                internalType: "struct Drippie.DripConfig",
                name: "_config",
                type: "tuple",
            },
        ],
        name: "create",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "created",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "_name",
                type: "string",
            },
        ],
        name: "drip",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        name: "drips",
        outputs: [
            {
                internalType: "enum Drippie.DripStatus",
                name: "status",
                type: "uint8",
            },
            {
                components: [
                    {
                        internalType: "bool",
                        name: "reentrant",
                        type: "bool",
                    },
                    {
                        internalType: "uint256",
                        name: "interval",
                        type: "uint256",
                    },
                    {
                        internalType: "contract IDripCheck",
                        name: "dripcheck",
                        type: "address",
                    },
                    {
                        internalType: "bytes",
                        name: "checkparams",
                        type: "bytes",
                    },
                    {
                        components: [
                            {
                                internalType: "address payable",
                                name: "target",
                                type: "address",
                            },
                            {
                                internalType: "bytes",
                                name: "data",
                                type: "bytes",
                            },
                            {
                                internalType: "uint256",
                                name: "value",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Drippie.DripAction[]",
                        name: "actions",
                        type: "tuple[]",
                    },
                ],
                internalType: "struct Drippie.DripConfig",
                name: "config",
                type: "tuple",
            },
            {
                internalType: "uint256",
                name: "last",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "count",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "_name",
                type: "string",
            },
        ],
        name: "executable",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getDripCount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "_name",
                type: "string",
            },
        ],
        name: "getDripInterval",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "_name",
                type: "string",
            },
        ],
        name: "getDripStatus",
        outputs: [
            {
                internalType: "enum Drippie.DripStatus",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "setOwner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "_name",
                type: "string",
            },
            {
                internalType: "enum Drippie.DripStatus",
                name: "_status",
                type: "uint8",
            },
        ],
        name: "status",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ERC20",
                name: "_asset",
                type: "address",
            },
            {
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "withdrawERC20",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ERC20",
                name: "_asset",
                type: "address",
            },
            {
                internalType: "address",
                name: "_to",
                type: "address",
            },
        ],
        name: "withdrawERC20",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ERC721",
                name: "_asset",
                type: "address",
            },
            {
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_id",
                type: "uint256",
            },
        ],
        name: "withdrawERC721",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address payable",
                name: "_to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "withdrawETH",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address payable",
                name: "_to",
                type: "address",
            },
        ],
        name: "withdrawETH",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        stateMutability: "payable",
        type: "receive",
    },
];

export default { abi };