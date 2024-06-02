/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/kinobi-so/kinobi
 */

import {
  combineCodec,
  getStructDecoder,
  getStructEncoder,
  getU8Decoder,
  getU8Encoder,
  transformEncoder,
  type Address,
  type Codec,
  type Decoder,
  type Encoder,
  type IAccountMeta,
  type IInstruction,
  type IInstructionWithAccounts,
  type IInstructionWithData,
  type WritableAccount,
} from '@solana/web3.js';
import { TOKEN_PROGRAM_ADDRESS } from '../programs';
import { getAccountMetaFactory, type ResolvedAccount } from '../shared';

export type InitializeImmutableOwnerInstruction<
  TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
  TAccountAccount extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountAccount extends string
        ? WritableAccount<TAccountAccount>
        : TAccountAccount,
      ...TRemainingAccounts,
    ]
  >;

export type InitializeImmutableOwnerInstructionData = { discriminator: number };

export type InitializeImmutableOwnerInstructionDataArgs = {};

export function getInitializeImmutableOwnerInstructionDataEncoder(): Encoder<InitializeImmutableOwnerInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([['discriminator', getU8Encoder()]]),
    (value) => ({ ...value, discriminator: 22 })
  );
}

export function getInitializeImmutableOwnerInstructionDataDecoder(): Decoder<InitializeImmutableOwnerInstructionData> {
  return getStructDecoder([['discriminator', getU8Decoder()]]);
}

export function getInitializeImmutableOwnerInstructionDataCodec(): Codec<
  InitializeImmutableOwnerInstructionDataArgs,
  InitializeImmutableOwnerInstructionData
> {
  return combineCodec(
    getInitializeImmutableOwnerInstructionDataEncoder(),
    getInitializeImmutableOwnerInstructionDataDecoder()
  );
}

export type InitializeImmutableOwnerInput<
  TAccountAccount extends string = string,
> = {
  /** The account to initialize. */
  account: Address<TAccountAccount>;
};

export function getInitializeImmutableOwnerInstruction<
  TAccountAccount extends string,
>(
  input: InitializeImmutableOwnerInput<TAccountAccount>
): InitializeImmutableOwnerInstruction<
  typeof TOKEN_PROGRAM_ADDRESS,
  TAccountAccount
> {
  // Program address.
  const programAddress = TOKEN_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    account: { value: input.account ?? null, isWritable: true },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [getAccountMeta(accounts.account)],
    programAddress,
    data: getInitializeImmutableOwnerInstructionDataEncoder().encode({}),
  } as InitializeImmutableOwnerInstruction<
    typeof TOKEN_PROGRAM_ADDRESS,
    TAccountAccount
  >;

  return instruction;
}

export type ParsedInitializeImmutableOwnerInstruction<
  TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** The account to initialize. */
    account: TAccountMetas[0];
  };
  data: InitializeImmutableOwnerInstructionData;
};

export function parseInitializeImmutableOwnerInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedInitializeImmutableOwnerInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 1) {
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
      account: getNextAccount(),
    },
    data: getInitializeImmutableOwnerInstructionDataDecoder().decode(
      instruction.data
    ),
  };
}
