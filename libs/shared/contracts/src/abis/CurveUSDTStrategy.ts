// DO NOT EDIT - GENERATED
export const CurveUSDTStrategyABI = [
  {
    constant: false,
    inputs: [],
    name: 'collectRewardToken',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'governor',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { internalType: 'address', name: '_asset', type: 'address' },
      { internalType: 'address', name: '_pToken', type: 'address' },
    ],
    name: 'setPTokenAddress',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ internalType: 'address', name: '', type: 'address' }],
    name: 'assetToPToken',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { internalType: 'address', name: '_asset', type: 'address' },
      { internalType: 'uint256', name: '_amount', type: 'uint256' },
    ],
    name: 'transferToken',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'rewardTokenAddress',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'liquidate',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { internalType: 'address', name: '_platformAddress', type: 'address' },
      { internalType: 'address', name: '_vaultAddress', type: 'address' },
      { internalType: 'address', name: '_rewardTokenAddress', type: 'address' },
      { internalType: 'address', name: '_asset', type: 'address' },
      { internalType: 'address', name: '_pToken', type: 'address' },
      { internalType: 'address', name: '_crvGaugeAddress', type: 'address' },
      { internalType: 'address', name: '_crvMinterAddress', type: 'address' },
    ],
    name: 'initialize',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'vaultAddress',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { internalType: 'address', name: '_asset', type: 'address' },
      { internalType: 'uint256', name: '_amount', type: 'uint256' },
    ],
    name: 'deposit',
    outputs: [
      { internalType: 'uint256', name: 'amountDeposited', type: 'uint256' },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'rewardLiquidationThreshold',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'claimGovernance',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ internalType: 'address', name: '_asset', type: 'address' }],
    name: 'checkBalance',
    outputs: [{ internalType: 'uint256', name: 'balance', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { internalType: 'address', name: '_platformAddress', type: 'address' },
      { internalType: 'address', name: '_vaultAddress', type: 'address' },
      { internalType: 'address', name: '_rewardTokenAddress', type: 'address' },
      { internalType: 'address[]', name: '_assets', type: 'address[]' },
      { internalType: 'address[]', name: '_pTokens', type: 'address[]' },
    ],
    name: 'initialize',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { internalType: 'address', name: '_rewardTokenAddress', type: 'address' },
    ],
    name: 'setRewardTokenAddress',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ internalType: 'address', name: '_asset', type: 'address' }],
    name: 'supportsAsset',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'safeApproveAllTokens',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'isGovernor',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ internalType: 'uint256', name: '_threshold', type: 'uint256' }],
    name: 'setRewardLiquidationThreshold',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { internalType: 'address', name: '_newGovernor', type: 'address' },
    ],
    name: 'transferGovernance',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { internalType: 'address', name: '_recipient', type: 'address' },
      { internalType: 'address', name: '_asset', type: 'address' },
      { internalType: 'uint256', name: '_amount', type: 'uint256' },
    ],
    name: 'withdraw',
    outputs: [
      { internalType: 'uint256', name: 'amountWithdrawn', type: 'uint256' },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'platformAddress',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'RewardTokenCollected',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_asset',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: '_pToken',
        type: 'address',
      },
    ],
    name: 'PTokenAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_asset',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: '_pToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'Deposit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_asset',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: '_pToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'Withdrawal',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousGovernor',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newGovernor',
        type: 'address',
      },
    ],
    name: 'PendingGovernorshipTransfer',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousGovernor',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newGovernor',
        type: 'address',
      },
    ],
    name: 'GovernorshipTransferred',
    type: 'event',
  },
] as const;
