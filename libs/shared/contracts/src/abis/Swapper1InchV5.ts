// DO NOT EDIT - GENERATED
export const Swapper1InchV5ABI = [
  {
    inputs: [],
    name: 'SWAP_ROUTER',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address[]', name: '_assets', type: 'address[]' }],
    name: 'approveAssets',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_fromAsset', type: 'address' },
      { internalType: 'address', name: '_toAsset', type: 'address' },
      { internalType: 'uint256', name: '_fromAssetAmount', type: 'uint256' },
      { internalType: 'uint256', name: '_minToAssetAmount', type: 'uint256' },
      { internalType: 'bytes', name: '_data', type: 'bytes' },
    ],
    name: 'swap',
    outputs: [
      { internalType: 'uint256', name: 'toAssetAmount', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;
