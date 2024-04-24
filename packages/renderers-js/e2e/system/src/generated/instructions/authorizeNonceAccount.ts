/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Address,
  getAddressDecoder,
  getAddressEncoder,
} from '@solana/addresses';
import {
  Codec,
  Decoder,
  Encoder,
  combineCodec,
  getStructDecoder,
  getStructEncoder,
  getU32Decoder,
  getU32Encoder,
  transformEncoder,
} from '@solana/codecs';
import {
  IAccountMeta,
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  ReadonlySignerAccount,
  WritableAccount,
} from '@solana/instructions';
import { IAccountSignerMeta, TransactionSigner } from '@solana/signers';
import { SYSTEM_PROGRAM_ADDRESS } from '../programs';
import { ResolvedAccount, getAccountMetaFactory } from '../shared';

export type AuthorizeNonceAccountInstruction<
  TProgram extends string = typeof SYSTEM_PROGRAM_ADDRESS,
  TAccountNonceAccount extends string | IAccountMeta<string> = string,
  TAccountNonceAuthority extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountNonceAccount extends string
        ? WritableAccount<TAccountNonceAccount>
        : TAccountNonceAccount,
      TAccountNonceAuthority extends string
        ? ReadonlySignerAccount<TAccountNonceAuthority> &
            IAccountSignerMeta<TAccountNonceAuthority>
        : TAccountNonceAuthority,
      ...TRemainingAccounts,
    ]
  >;

export type AuthorizeNonceAccountInstructionData = {
  discriminator: number;
  newNonceAuthority: Address;
};

export type AuthorizeNonceAccountInstructionDataArgs = {
  newNonceAuthority: Address;
};

export function getAuthorizeNonceAccountInstructionDataEncoder(): Encoder<AuthorizeNonceAccountInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', getU32Encoder()],
      ['newNonceAuthority', getAddressEncoder()],
    ]),
    (value) => ({ ...value, discriminator: 7 })
  );
}

export function getAuthorizeNonceAccountInstructionDataDecoder(): Decoder<AuthorizeNonceAccountInstructionData> {
  return getStructDecoder([
    ['discriminator', getU32Decoder()],
    ['newNonceAuthority', getAddressDecoder()],
  ]);
}

export function getAuthorizeNonceAccountInstructionDataCodec(): Codec<
  AuthorizeNonceAccountInstructionDataArgs,
  AuthorizeNonceAccountInstructionData
> {
  return combineCodec(
    getAuthorizeNonceAccountInstructionDataEncoder(),
    getAuthorizeNonceAccountInstructionDataDecoder()
  );
}

export type AuthorizeNonceAccountInput<
  TAccountNonceAccount extends string = string,
  TAccountNonceAuthority extends string = string,
> = {
  nonceAccount: Address<TAccountNonceAccount>;
  nonceAuthority: TransactionSigner<TAccountNonceAuthority>;
  newNonceAuthority: AuthorizeNonceAccountInstructionDataArgs['newNonceAuthority'];
};

export function getAuthorizeNonceAccountInstruction<
  TAccountNonceAccount extends string,
  TAccountNonceAuthority extends string,
>(
  input: AuthorizeNonceAccountInput<
    TAccountNonceAccount,
    TAccountNonceAuthority
  >
): AuthorizeNonceAccountInstruction<
  typeof SYSTEM_PROGRAM_ADDRESS,
  TAccountNonceAccount,
  TAccountNonceAuthority
> {
  // Program address.
  const programAddress = SYSTEM_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    nonceAccount: { value: input.nonceAccount ?? null, isWritable: true },
    nonceAuthority: { value: input.nonceAuthority ?? null, isWritable: false },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.nonceAccount),
      getAccountMeta(accounts.nonceAuthority),
    ],
    programAddress,
    data: getAuthorizeNonceAccountInstructionDataEncoder().encode(
      args as AuthorizeNonceAccountInstructionDataArgs
    ),
  } as AuthorizeNonceAccountInstruction<
    typeof SYSTEM_PROGRAM_ADDRESS,
    TAccountNonceAccount,
    TAccountNonceAuthority
  >;

  return instruction;
}

export type ParsedAuthorizeNonceAccountInstruction<
  TProgram extends string = typeof SYSTEM_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    nonceAccount: TAccountMetas[0];
    nonceAuthority: TAccountMetas[1];
  };
  data: AuthorizeNonceAccountInstructionData;
};

export function parseAuthorizeNonceAccountInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedAuthorizeNonceAccountInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 2) {
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
      nonceAccount: getNextAccount(),
      nonceAuthority: getNextAccount(),
    },
    data: getAuthorizeNonceAccountInstructionDataDecoder().decode(
      instruction.data
    ),
  };
}
