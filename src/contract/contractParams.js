const address = '0x245ef47d4d0505ecf3ac463f4d81f41ade8f1fd1';

const abi = [
  {
    constant: true,
    inputs: [],
    name: 'name',
    outputs: [
      {
        name: '',
        type: 'string',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'spender',
        type: 'address',
      },
      {
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'newStakedHearts',
        type: 'uint256',
      },
      {
        name: 'newStakedDays',
        type: 'uint256',
      },
    ],
    name: 'startStake',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'bytes20',
      },
    ],
    name: 'claimedBtcAddresses',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'sender',
        type: 'address',
      },
      {
        name: 'recipient',
        type: 'address',
      },
      {
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'merkleLeaf',
        type: 'bytes32',
      },
      {
        name: 'proof',
        type: 'bytes32[]',
      },
    ],
    name: 'merkleProofIsValid',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'pure',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'pubKeyX',
        type: 'bytes32',
      },
      {
        name: 'pubKeyY',
        type: 'bytes32',
      },
      {
        name: 'addrType',
        type: 'uint8',
      },
    ],
    name: 'pubKeyToBtcAddress',
    outputs: [
      {
        name: '',
        type: 'bytes20',
      },
    ],
    payable: false,
    stateMutability: 'pure',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'joinDay',
        type: 'uint256',
      },
      {
        name: 'count',
        type: 'uint256',
      },
    ],
    name: 'leaveXfLobby',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'claimToAddr',
        type: 'address',
      },
      {
        name: 'pubKeyX',
        type: 'bytes32',
      },
      {
        name: 'pubKeyY',
        type: 'bytes32',
      },
      {
        name: 'v',
        type: 'uint8',
      },
      {
        name: 'r',
        type: 'bytes32',
      },
      {
        name: 's',
        type: 'bytes32',
      },
    ],
    name: 'signatureMatchesClaim',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'pure',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'pubKeyX',
        type: 'bytes32',
      },
      {
        name: 'pubKeyY',
        type: 'bytes32',
      },
    ],
    name: 'pubKeyToEthAddress',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'pure',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        name: '',
        type: 'uint8',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'spender',
        type: 'address',
      },
      {
        name: 'addedValue',
        type: 'uint256',
      },
    ],
    name: 'increaseAllowance',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'allocatedSupply',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getCurrentDay',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'beforeDay',
        type: 'uint256',
      },
    ],
    name: 'storeDailyDataBefore',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'uint256',
      },
      {
        name: '',
        type: 'address',
      },
    ],
    name: 'xfLobbyMembers',
    outputs: [
      {
        name: 'headIndex',
        type: 'uint40',
      },
      {
        name: 'tailIndex',
        type: 'uint40',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'memberAddr',
        type: 'address',
      },
      {
        name: 'entryId',
        type: 'uint256',
      },
    ],
    name: 'getXfLobbyEntry',
    outputs: [
      {
        name: 'rawAmount',
        type: 'uint256',
      },
      {
        name: 'referrerAddr',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'btcAddr',
        type: 'bytes20',
      },
      {
        name: 'rawSatoshis',
        type: 'uint256',
      },
      {
        name: 'proof',
        type: 'bytes32[]',
      },
    ],
    name: 'canClaimBtcAddress',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'flush',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'account',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'referrerAddr',
        type: 'address',
      },
    ],
    name: 'joinXfLobby',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    name: 'xfLobby',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'stakeIndex',
        type: 'uint256',
      },
      {
        name: 'stakeIdParam',
        type: 'uint40',
      },
    ],
    name: 'endStake',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'address',
      },
      {
        name: '',
        type: 'uint256',
      },
    ],
    name: 'staked',
    outputs: [
      {
        name: 'stakeId',
        type: 'uint40',
      },
      {
        name: 'stakedHearts',
        type: 'uint72',
      },
      {
        name: 'stakeShares',
        type: 'uint72',
      },
      {
        name: 'pooledDay',
        type: 'uint16',
      },
      {
        name: 'stakedDays',
        type: 'uint16',
      },
      {
        name: 'unpooledDay',
        type: 'uint16',
      },
      {
        name: 'isAutoStake',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    name: 'dailyData',
    outputs: [
      {
        name: 'dayPayoutTotal',
        type: 'uint72',
      },
      {
        name: 'dayStakeSharesTotal',
        type: 'uint72',
      },
      {
        name: 'dayUnclaimedSatoshisTotal',
        type: 'uint56',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        name: '',
        type: 'string',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'spender',
        type: 'address',
      },
      {
        name: 'subtractedValue',
        type: 'uint256',
      },
    ],
    name: 'decreaseAllowance',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'recipient',
        type: 'address',
      },
      {
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'rawSatoshis',
        type: 'uint256',
      },
      {
        name: 'proof',
        type: 'bytes32[]',
      },
      {
        name: 'claimToAddr',
        type: 'address',
      },
      {
        name: 'pubKeyX',
        type: 'bytes32',
      },
      {
        name: 'pubKeyY',
        type: 'bytes32',
      },
      {
        name: 'addrType',
        type: 'uint8',
      },
      {
        name: 'v',
        type: 'uint8',
      },
      {
        name: 'r',
        type: 'bytes32',
      },
      {
        name: 's',
        type: 'bytes32',
      },
      {
        name: 'autoStakeDays',
        type: 'uint256',
      },
      {
        name: 'referrerAddr',
        type: 'address',
      },
    ],
    name: 'claimBtcAddress',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'stakerAddr',
        type: 'address',
      },
      {
        name: 'stakeIndex',
        type: 'uint256',
      },
      {
        name: 'stakeIdParam',
        type: 'uint40',
      },
    ],
    name: 'goodAccounting',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'globals',
    outputs: [
      {
        name: 'lockedHeartsTotal',
        type: 'uint72',
      },
      {
        name: 'nextStakeSharesTotal',
        type: 'uint72',
      },
      {
        name: 'shareRate',
        type: 'uint40',
      },
      {
        name: 'stakePenaltyPool',
        type: 'uint72',
      },
      {
        name: 'daysStored',
        type: 'uint16',
      },
      {
        name: 'stakeSharesTotal',
        type: 'uint72',
      },
      {
        name: 'latestStakeId',
        type: 'uint40',
      },
      {
        name: 'claimsValues',
        type: 'uint128',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'ethAddr',
        type: 'address',
      },
    ],
    name: 'getStakeCount',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'offset',
        type: 'uint256',
      },
      {
        name: 'count',
        type: 'uint256',
      },
    ],
    name: 'getDailyDataRange',
    outputs: [
      {
        name: 'list',
        type: 'uint256[]',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getGlobalInfo',
    outputs: [
      {
        name: '',
        type: 'uint256[12]',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'owner',
        type: 'address',
      },
      {
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'allowance',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'btcAddr',
        type: 'bytes20',
      },
      {
        name: 'rawSatoshis',
        type: 'uint256',
      },
      {
        name: 'proof',
        type: 'bytes32[]',
      },
    ],
    name: 'btcAddressIsValid',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    payable: true,
    stateMutability: 'payable',
    type: 'fallback',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'timestamp',
        type: 'uint40',
      },
      {
        indexed: true,
        name: 'memberAddr',
        type: 'address',
      },
      {
        indexed: true,
        name: 'entryId',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'rawAmount',
        type: 'uint256',
      },
      {
        indexed: true,
        name: 'referrerAddr',
        type: 'address',
      },
    ],
    name: 'JoinXfLobby',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'timestamp',
        type: 'uint40',
      },
      {
        indexed: true,
        name: 'memberAddr',
        type: 'address',
      },
      {
        indexed: true,
        name: 'entryId',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'xfAmount',
        type: 'uint256',
      },
      {
        indexed: true,
        name: 'referrerAddr',
        type: 'address',
      },
    ],
    name: 'LeaveXfLobby',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'timestamp',
        type: 'uint40',
      },
      {
        indexed: false,
        name: 'daysStoredAdded',
        type: 'uint16',
      },
      {
        indexed: false,
        name: 'daysStoredTotal',
        type: 'uint16',
      },
      {
        indexed: true,
        name: 'updaterAddr',
        type: 'address',
      },
    ],
    name: 'DailyDataUpdate',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'timestamp',
        type: 'uint40',
      },
      {
        indexed: true,
        name: 'claimToAddr',
        type: 'address',
      },
      {
        indexed: true,
        name: 'btcAddr',
        type: 'bytes20',
      },
      {
        indexed: false,
        name: 'rawSatoshis',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'adjSatoshis',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'claimedHearts',
        type: 'uint256',
      },
      {
        indexed: true,
        name: 'referrerAddr',
        type: 'address',
      },
      {
        indexed: false,
        name: 'senderAddr',
        type: 'address',
      },
    ],
    name: 'Claim',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'timestamp',
        type: 'uint40',
      },
      {
        indexed: false,
        name: 'claimToAddr',
        type: 'address',
      },
      {
        indexed: false,
        name: 'btcAddr',
        type: 'bytes20',
      },
      {
        indexed: false,
        name: 'rawSatoshis',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'adjSatoshis',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'claimedHearts',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'referrerAddr',
        type: 'address',
      },
      {
        indexed: true,
        name: 'senderAddr',
        type: 'address',
      },
    ],
    name: 'ClaimAssist',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'timestamp',
        type: 'uint40',
      },
      {
        indexed: true,
        name: 'stakerAddr',
        type: 'address',
      },
      {
        indexed: true,
        name: 'stakeId',
        type: 'uint40',
      },
      {
        indexed: false,
        name: 'stakedHearts',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'stakeShares',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'stakedDays',
        type: 'uint16',
      },
      {
        indexed: false,
        name: 'isAutoStake',
        type: 'bool',
      },
    ],
    name: 'StartStake',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'timestamp',
        type: 'uint40',
      },
      {
        indexed: true,
        name: 'stakerAddr',
        type: 'address',
      },
      {
        indexed: true,
        name: 'stakeId',
        type: 'uint40',
      },
      {
        indexed: false,
        name: 'payout',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'penalty',
        type: 'uint256',
      },
      {
        indexed: true,
        name: 'senderAddr',
        type: 'address',
      },
    ],
    name: 'GoodAccounting',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'timestamp',
        type: 'uint40',
      },
      {
        indexed: true,
        name: 'stakerAddr',
        type: 'address',
      },
      {
        indexed: true,
        name: 'stakeId',
        type: 'uint40',
      },
      {
        indexed: false,
        name: 'payout',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'penalty',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'servedDays',
        type: 'uint16',
      },
    ],
    name: 'EndStake',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'timestamp',
        type: 'uint40',
      },
      {
        indexed: false,
        name: 'shareRate',
        type: 'uint256',
      },
      {
        indexed: true,
        name: 'stakeId',
        type: 'uint40',
      },
    ],
    name: 'ShareRateChange',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
];

export default {
  address,
  abi,
};