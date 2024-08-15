/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/kinobi-so/kinobi
 */

import {
  combineCodec,
  fixDecoderSize,
  fixEncoderSize,
  getAddressEncoder,
  getBytesDecoder,
  getBytesEncoder,
  getProgramDerivedAddress,
  getStructDecoder,
  getStructEncoder,
  getU64Decoder,
  getU64Encoder,
  transformEncoder,
  type Address,
  type Codec,
  type Decoder,
  type Encoder,
  type IAccountMeta,
  type IInstruction,
  type IInstructionWithAccounts,
  type IInstructionWithData,
  type ReadonlyAccount,
  type ReadonlyUint8Array,
} from '@solana/web3.js';
import { WEN_TRANSFER_GUARD_PROGRAM_ADDRESS } from '../programs';
import {
  expectAddress,
  getAccountMetaFactory,
  type ResolvedAccount,
} from '../shared';

export const EXECUTE_DISCRIMINATOR = new Uint8Array([
  105, 37, 101, 197, 75, 251, 102, 26,
]);

export function getExecuteDiscriminatorBytes() {
  return fixEncoderSize(getBytesEncoder(), 8).encode(EXECUTE_DISCRIMINATOR);
}

export type ExecuteInstruction<
  TProgram extends string = typeof WEN_TRANSFER_GUARD_PROGRAM_ADDRESS,
  TAccountSourceAccount extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountDestinationAccount extends string | IAccountMeta<string> = string,
  TAccountOwnerDelegate extends string | IAccountMeta<string> = string,
  TAccountExtraMetasAccount extends string | IAccountMeta<string> = string,
  TAccountGuard extends string | IAccountMeta<string> = string,
  TAccountInstructionSysvarAccount extends
    | string
    | IAccountMeta<string> = 'Sysvar1nstructions1111111111111111111111111',
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountSourceAccount extends string
        ? ReadonlyAccount<TAccountSourceAccount>
        : TAccountSourceAccount,
      TAccountMint extends string
        ? ReadonlyAccount<TAccountMint>
        : TAccountMint,
      TAccountDestinationAccount extends string
        ? ReadonlyAccount<TAccountDestinationAccount>
        : TAccountDestinationAccount,
      TAccountOwnerDelegate extends string
        ? ReadonlyAccount<TAccountOwnerDelegate>
        : TAccountOwnerDelegate,
      TAccountExtraMetasAccount extends string
        ? ReadonlyAccount<TAccountExtraMetasAccount>
        : TAccountExtraMetasAccount,
      TAccountGuard extends string
        ? ReadonlyAccount<TAccountGuard>
        : TAccountGuard,
      TAccountInstructionSysvarAccount extends string
        ? ReadonlyAccount<TAccountInstructionSysvarAccount>
        : TAccountInstructionSysvarAccount,
      ...TRemainingAccounts,
    ]
  >;

export type ExecuteInstructionData = {
  discriminator: ReadonlyUint8Array;
  amount: bigint;
};

export type ExecuteInstructionDataArgs = { amount: number | bigint };

export function getExecuteInstructionDataEncoder(): Encoder<ExecuteInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', fixEncoderSize(getBytesEncoder(), 8)],
      ['amount', getU64Encoder()],
    ]),
    (value) => ({ ...value, discriminator: EXECUTE_DISCRIMINATOR })
  );
}

export function getExecuteInstructionDataDecoder(): Decoder<ExecuteInstructionData> {
  return getStructDecoder([
    ['discriminator', fixDecoderSize(getBytesDecoder(), 8)],
    ['amount', getU64Decoder()],
  ]);
}

export function getExecuteInstructionDataCodec(): Codec<
  ExecuteInstructionDataArgs,
  ExecuteInstructionData
> {
  return combineCodec(
    getExecuteInstructionDataEncoder(),
    getExecuteInstructionDataDecoder()
  );
}

export type ExecuteAsyncInput<
  TAccountSourceAccount extends string = string,
  TAccountMint extends string = string,
  TAccountDestinationAccount extends string = string,
  TAccountOwnerDelegate extends string = string,
  TAccountExtraMetasAccount extends string = string,
  TAccountGuard extends string = string,
  TAccountInstructionSysvarAccount extends string = string,
> = {
  sourceAccount: Address<TAccountSourceAccount>;
  mint: Address<TAccountMint>;
  destinationAccount: Address<TAccountDestinationAccount>;
  ownerDelegate: Address<TAccountOwnerDelegate>;
  extraMetasAccount?: Address<TAccountExtraMetasAccount>;
  guard: Address<TAccountGuard>;
  instructionSysvarAccount?: Address<TAccountInstructionSysvarAccount>;
  amount: ExecuteInstructionDataArgs['amount'];
};

export async function getExecuteInstructionAsync<
  TAccountSourceAccount extends string,
  TAccountMint extends string,
  TAccountDestinationAccount extends string,
  TAccountOwnerDelegate extends string,
  TAccountExtraMetasAccount extends string,
  TAccountGuard extends string,
  TAccountInstructionSysvarAccount extends string,
>(
  input: ExecuteAsyncInput<
    TAccountSourceAccount,
    TAccountMint,
    TAccountDestinationAccount,
    TAccountOwnerDelegate,
    TAccountExtraMetasAccount,
    TAccountGuard,
    TAccountInstructionSysvarAccount
  >
): Promise<
  ExecuteInstruction<
    typeof WEN_TRANSFER_GUARD_PROGRAM_ADDRESS,
    TAccountSourceAccount,
    TAccountMint,
    TAccountDestinationAccount,
    TAccountOwnerDelegate,
    TAccountExtraMetasAccount,
    TAccountGuard,
    TAccountInstructionSysvarAccount
  >
> {
  // Program address.
  const programAddress = WEN_TRANSFER_GUARD_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    sourceAccount: { value: input.sourceAccount ?? null, isWritable: false },
    mint: { value: input.mint ?? null, isWritable: false },
    destinationAccount: {
      value: input.destinationAccount ?? null,
      isWritable: false,
    },
    ownerDelegate: { value: input.ownerDelegate ?? null, isWritable: false },
    extraMetasAccount: {
      value: input.extraMetasAccount ?? null,
      isWritable: false,
    },
    guard: { value: input.guard ?? null, isWritable: false },
    instructionSysvarAccount: {
      value: input.instructionSysvarAccount ?? null,
      isWritable: false,
    },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.extraMetasAccount.value) {
    accounts.extraMetasAccount.value = await getProgramDerivedAddress({
      programAddress,
      seeds: [
        getBytesEncoder().encode(
          new Uint8Array([
            101, 120, 116, 114, 97, 45, 97, 99, 99, 111, 117, 110, 116, 45, 109,
            101, 116, 97, 115,
          ])
        ),
        getAddressEncoder().encode(expectAddress(accounts.mint.value)),
      ],
    });
  }
  if (!accounts.instructionSysvarAccount.value) {
    accounts.instructionSysvarAccount.value =
      'Sysvar1nstructions1111111111111111111111111' as Address<'Sysvar1nstructions1111111111111111111111111'>;
  }

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.sourceAccount),
      getAccountMeta(accounts.mint),
      getAccountMeta(accounts.destinationAccount),
      getAccountMeta(accounts.ownerDelegate),
      getAccountMeta(accounts.extraMetasAccount),
      getAccountMeta(accounts.guard),
      getAccountMeta(accounts.instructionSysvarAccount),
    ],
    programAddress,
    data: getExecuteInstructionDataEncoder().encode(
      args as ExecuteInstructionDataArgs
    ),
  } as ExecuteInstruction<
    typeof WEN_TRANSFER_GUARD_PROGRAM_ADDRESS,
    TAccountSourceAccount,
    TAccountMint,
    TAccountDestinationAccount,
    TAccountOwnerDelegate,
    TAccountExtraMetasAccount,
    TAccountGuard,
    TAccountInstructionSysvarAccount
  >;

  return instruction;
}

export type ExecuteInput<
  TAccountSourceAccount extends string = string,
  TAccountMint extends string = string,
  TAccountDestinationAccount extends string = string,
  TAccountOwnerDelegate extends string = string,
  TAccountExtraMetasAccount extends string = string,
  TAccountGuard extends string = string,
  TAccountInstructionSysvarAccount extends string = string,
> = {
  sourceAccount: Address<TAccountSourceAccount>;
  mint: Address<TAccountMint>;
  destinationAccount: Address<TAccountDestinationAccount>;
  ownerDelegate: Address<TAccountOwnerDelegate>;
  extraMetasAccount: Address<TAccountExtraMetasAccount>;
  guard: Address<TAccountGuard>;
  instructionSysvarAccount?: Address<TAccountInstructionSysvarAccount>;
  amount: ExecuteInstructionDataArgs['amount'];
};

export function getExecuteInstruction<
  TAccountSourceAccount extends string,
  TAccountMint extends string,
  TAccountDestinationAccount extends string,
  TAccountOwnerDelegate extends string,
  TAccountExtraMetasAccount extends string,
  TAccountGuard extends string,
  TAccountInstructionSysvarAccount extends string,
>(
  input: ExecuteInput<
    TAccountSourceAccount,
    TAccountMint,
    TAccountDestinationAccount,
    TAccountOwnerDelegate,
    TAccountExtraMetasAccount,
    TAccountGuard,
    TAccountInstructionSysvarAccount
  >
): ExecuteInstruction<
  typeof WEN_TRANSFER_GUARD_PROGRAM_ADDRESS,
  TAccountSourceAccount,
  TAccountMint,
  TAccountDestinationAccount,
  TAccountOwnerDelegate,
  TAccountExtraMetasAccount,
  TAccountGuard,
  TAccountInstructionSysvarAccount
> {
  // Program address.
  const programAddress = WEN_TRANSFER_GUARD_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    sourceAccount: { value: input.sourceAccount ?? null, isWritable: false },
    mint: { value: input.mint ?? null, isWritable: false },
    destinationAccount: {
      value: input.destinationAccount ?? null,
      isWritable: false,
    },
    ownerDelegate: { value: input.ownerDelegate ?? null, isWritable: false },
    extraMetasAccount: {
      value: input.extraMetasAccount ?? null,
      isWritable: false,
    },
    guard: { value: input.guard ?? null, isWritable: false },
    instructionSysvarAccount: {
      value: input.instructionSysvarAccount ?? null,
      isWritable: false,
    },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.instructionSysvarAccount.value) {
    accounts.instructionSysvarAccount.value =
      'Sysvar1nstructions1111111111111111111111111' as Address<'Sysvar1nstructions1111111111111111111111111'>;
  }

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.sourceAccount),
      getAccountMeta(accounts.mint),
      getAccountMeta(accounts.destinationAccount),
      getAccountMeta(accounts.ownerDelegate),
      getAccountMeta(accounts.extraMetasAccount),
      getAccountMeta(accounts.guard),
      getAccountMeta(accounts.instructionSysvarAccount),
    ],
    programAddress,
    data: getExecuteInstructionDataEncoder().encode(
      args as ExecuteInstructionDataArgs
    ),
  } as ExecuteInstruction<
    typeof WEN_TRANSFER_GUARD_PROGRAM_ADDRESS,
    TAccountSourceAccount,
    TAccountMint,
    TAccountDestinationAccount,
    TAccountOwnerDelegate,
    TAccountExtraMetasAccount,
    TAccountGuard,
    TAccountInstructionSysvarAccount
  >;

  return instruction;
}

export type ParsedExecuteInstruction<
  TProgram extends string = typeof WEN_TRANSFER_GUARD_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    sourceAccount: TAccountMetas[0];
    mint: TAccountMetas[1];
    destinationAccount: TAccountMetas[2];
    ownerDelegate: TAccountMetas[3];
    extraMetasAccount: TAccountMetas[4];
    guard: TAccountMetas[5];
    instructionSysvarAccount: TAccountMetas[6];
  };
  data: ExecuteInstructionData;
};

export function parseExecuteInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedExecuteInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 7) {
    // TODO: Coded error.
    throw new Error('Not enough accounts');
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts![accountIndex]!;
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      sourceAccount: getNextAccount(),
      mint: getNextAccount(),
      destinationAccount: getNextAccount(),
      ownerDelegate: getNextAccount(),
      extraMetasAccount: getNextAccount(),
      guard: getNextAccount(),
      instructionSysvarAccount: getNextAccount(),
    },
    data: getExecuteInstructionDataDecoder().decode(instruction.data),
  };
}
