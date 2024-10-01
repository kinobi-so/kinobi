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
  type IAccountSignerMeta,
  type IInstruction,
  type IInstructionWithAccounts,
  type IInstructionWithData,
  type ReadonlyAccount,
  type TransactionSigner,
  type WritableAccount,
  type WritableSignerAccount,
} from '@solana/web3.js';
import { findAssociatedTokenPda } from '../pdas';
import { ASSOCIATED_TOKEN_PROGRAM_ADDRESS } from '../programs';
import {
  expectAddress,
  getAccountMetaFactory,
  type ResolvedAccount,
} from '../shared';

export const RECOVER_NESTED_ASSOCIATED_TOKEN_DISCRIMINATOR = 2;

export function getRecoverNestedAssociatedTokenDiscriminatorBytes() {
  return getU8Encoder().encode(RECOVER_NESTED_ASSOCIATED_TOKEN_DISCRIMINATOR);
}

export type RecoverNestedAssociatedTokenInstruction<
  TProgram extends string = typeof ASSOCIATED_TOKEN_PROGRAM_ADDRESS,
  TAccountNestedAssociatedAccountAddress extends
    | string
    | IAccountMeta<string> = string,
  TAccountNestedTokenMintAddress extends string | IAccountMeta<string> = string,
  TAccountDestinationAssociatedAccountAddress extends
    | string
    | IAccountMeta<string> = string,
  TAccountOwnerAssociatedAccountAddress extends
    | string
    | IAccountMeta<string> = string,
  TAccountOwnerTokenMintAddress extends string | IAccountMeta<string> = string,
  TAccountWalletAddress extends string | IAccountMeta<string> = string,
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountNestedAssociatedAccountAddress extends string
        ? WritableAccount<TAccountNestedAssociatedAccountAddress>
        : TAccountNestedAssociatedAccountAddress,
      TAccountNestedTokenMintAddress extends string
        ? ReadonlyAccount<TAccountNestedTokenMintAddress>
        : TAccountNestedTokenMintAddress,
      TAccountDestinationAssociatedAccountAddress extends string
        ? WritableAccount<TAccountDestinationAssociatedAccountAddress>
        : TAccountDestinationAssociatedAccountAddress,
      TAccountOwnerAssociatedAccountAddress extends string
        ? ReadonlyAccount<TAccountOwnerAssociatedAccountAddress>
        : TAccountOwnerAssociatedAccountAddress,
      TAccountOwnerTokenMintAddress extends string
        ? ReadonlyAccount<TAccountOwnerTokenMintAddress>
        : TAccountOwnerTokenMintAddress,
      TAccountWalletAddress extends string
        ? WritableSignerAccount<TAccountWalletAddress> &
            IAccountSignerMeta<TAccountWalletAddress>
        : TAccountWalletAddress,
      TAccountTokenProgram extends string
        ? ReadonlyAccount<TAccountTokenProgram>
        : TAccountTokenProgram,
      ...TRemainingAccounts,
    ]
  >;

export type RecoverNestedAssociatedTokenInstructionData = {
  discriminator: number;
};

export type RecoverNestedAssociatedTokenInstructionDataArgs = {};

export function getRecoverNestedAssociatedTokenInstructionDataEncoder(): Encoder<RecoverNestedAssociatedTokenInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([['discriminator', getU8Encoder()]]),
    (value) => ({
      ...value,
      discriminator: RECOVER_NESTED_ASSOCIATED_TOKEN_DISCRIMINATOR,
    })
  );
}

export function getRecoverNestedAssociatedTokenInstructionDataDecoder(): Decoder<RecoverNestedAssociatedTokenInstructionData> {
  return getStructDecoder([['discriminator', getU8Decoder()]]);
}

export function getRecoverNestedAssociatedTokenInstructionDataCodec(): Codec<
  RecoverNestedAssociatedTokenInstructionDataArgs,
  RecoverNestedAssociatedTokenInstructionData
> {
  return combineCodec(
    getRecoverNestedAssociatedTokenInstructionDataEncoder(),
    getRecoverNestedAssociatedTokenInstructionDataDecoder()
  );
}

export type RecoverNestedAssociatedTokenAsyncInput<
  TAccountNestedAssociatedAccountAddress extends string = string,
  TAccountNestedTokenMintAddress extends string = string,
  TAccountDestinationAssociatedAccountAddress extends string = string,
  TAccountOwnerAssociatedAccountAddress extends string = string,
  TAccountOwnerTokenMintAddress extends string = string,
  TAccountWalletAddress extends string = string,
  TAccountTokenProgram extends string = string,
> = {
  /** Nested associated token account, must be owned by `ownerAssociatedAccountAddress`. */
  nestedAssociatedAccountAddress?: Address<TAccountNestedAssociatedAccountAddress>;
  /** Token mint for the nested associated token account. */
  nestedTokenMintAddress: Address<TAccountNestedTokenMintAddress>;
  /** Wallet's associated token account. */
  destinationAssociatedAccountAddress?: Address<TAccountDestinationAssociatedAccountAddress>;
  /** Owner associated token account address, must be owned by `walletAddress`. */
  ownerAssociatedAccountAddress?: Address<TAccountOwnerAssociatedAccountAddress>;
  /** Token mint for the owner associated token account. */
  ownerTokenMintAddress: Address<TAccountOwnerTokenMintAddress>;
  /** Wallet address for the owner associated token account. */
  walletAddress: TransactionSigner<TAccountWalletAddress>;
  /** SPL Token program. */
  tokenProgram?: Address<TAccountTokenProgram>;
};

export async function getRecoverNestedAssociatedTokenInstructionAsync<
  TAccountNestedAssociatedAccountAddress extends string,
  TAccountNestedTokenMintAddress extends string,
  TAccountDestinationAssociatedAccountAddress extends string,
  TAccountOwnerAssociatedAccountAddress extends string,
  TAccountOwnerTokenMintAddress extends string,
  TAccountWalletAddress extends string,
  TAccountTokenProgram extends string,
  TProgramAddress extends Address = typeof ASSOCIATED_TOKEN_PROGRAM_ADDRESS,
>(
  input: RecoverNestedAssociatedTokenAsyncInput<
    TAccountNestedAssociatedAccountAddress,
    TAccountNestedTokenMintAddress,
    TAccountDestinationAssociatedAccountAddress,
    TAccountOwnerAssociatedAccountAddress,
    TAccountOwnerTokenMintAddress,
    TAccountWalletAddress,
    TAccountTokenProgram
  >,
  config?: { programAddress?: TProgramAddress }
): Promise<
  RecoverNestedAssociatedTokenInstruction<
    TProgramAddress,
    TAccountNestedAssociatedAccountAddress,
    TAccountNestedTokenMintAddress,
    TAccountDestinationAssociatedAccountAddress,
    TAccountOwnerAssociatedAccountAddress,
    TAccountOwnerTokenMintAddress,
    TAccountWalletAddress,
    TAccountTokenProgram
  >
> {
  // Program address.
  const programAddress =
    config?.programAddress ?? ASSOCIATED_TOKEN_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    nestedAssociatedAccountAddress: {
      value: input.nestedAssociatedAccountAddress ?? null,
      isWritable: true,
    },
    nestedTokenMintAddress: {
      value: input.nestedTokenMintAddress ?? null,
      isWritable: false,
    },
    destinationAssociatedAccountAddress: {
      value: input.destinationAssociatedAccountAddress ?? null,
      isWritable: true,
    },
    ownerAssociatedAccountAddress: {
      value: input.ownerAssociatedAccountAddress ?? null,
      isWritable: false,
    },
    ownerTokenMintAddress: {
      value: input.ownerTokenMintAddress ?? null,
      isWritable: false,
    },
    walletAddress: { value: input.walletAddress ?? null, isWritable: true },
    tokenProgram: { value: input.tokenProgram ?? null, isWritable: false },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Resolve default values.
  if (!accounts.tokenProgram.value) {
    accounts.tokenProgram.value =
      'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Address<'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'>;
  }
  if (!accounts.ownerAssociatedAccountAddress.value) {
    accounts.ownerAssociatedAccountAddress.value = await findAssociatedTokenPda(
      {
        owner: expectAddress(accounts.walletAddress.value),
        tokenProgram: expectAddress(accounts.tokenProgram.value),
        mint: expectAddress(accounts.ownerTokenMintAddress.value),
      }
    );
  }
  if (!accounts.nestedAssociatedAccountAddress.value) {
    accounts.nestedAssociatedAccountAddress.value =
      await findAssociatedTokenPda({
        owner: expectAddress(accounts.ownerAssociatedAccountAddress.value),
        tokenProgram: expectAddress(accounts.tokenProgram.value),
        mint: expectAddress(accounts.nestedTokenMintAddress.value),
      });
  }
  if (!accounts.destinationAssociatedAccountAddress.value) {
    accounts.destinationAssociatedAccountAddress.value =
      await findAssociatedTokenPda({
        owner: expectAddress(accounts.walletAddress.value),
        tokenProgram: expectAddress(accounts.tokenProgram.value),
        mint: expectAddress(accounts.nestedTokenMintAddress.value),
      });
  }

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.nestedAssociatedAccountAddress),
      getAccountMeta(accounts.nestedTokenMintAddress),
      getAccountMeta(accounts.destinationAssociatedAccountAddress),
      getAccountMeta(accounts.ownerAssociatedAccountAddress),
      getAccountMeta(accounts.ownerTokenMintAddress),
      getAccountMeta(accounts.walletAddress),
      getAccountMeta(accounts.tokenProgram),
    ],
    programAddress,
    data: getRecoverNestedAssociatedTokenInstructionDataEncoder().encode({}),
  } as RecoverNestedAssociatedTokenInstruction<
    TProgramAddress,
    TAccountNestedAssociatedAccountAddress,
    TAccountNestedTokenMintAddress,
    TAccountDestinationAssociatedAccountAddress,
    TAccountOwnerAssociatedAccountAddress,
    TAccountOwnerTokenMintAddress,
    TAccountWalletAddress,
    TAccountTokenProgram
  >;

  return instruction;
}

export type RecoverNestedAssociatedTokenInput<
  TAccountNestedAssociatedAccountAddress extends string = string,
  TAccountNestedTokenMintAddress extends string = string,
  TAccountDestinationAssociatedAccountAddress extends string = string,
  TAccountOwnerAssociatedAccountAddress extends string = string,
  TAccountOwnerTokenMintAddress extends string = string,
  TAccountWalletAddress extends string = string,
  TAccountTokenProgram extends string = string,
> = {
  /** Nested associated token account, must be owned by `ownerAssociatedAccountAddress`. */
  nestedAssociatedAccountAddress: Address<TAccountNestedAssociatedAccountAddress>;
  /** Token mint for the nested associated token account. */
  nestedTokenMintAddress: Address<TAccountNestedTokenMintAddress>;
  /** Wallet's associated token account. */
  destinationAssociatedAccountAddress: Address<TAccountDestinationAssociatedAccountAddress>;
  /** Owner associated token account address, must be owned by `walletAddress`. */
  ownerAssociatedAccountAddress: Address<TAccountOwnerAssociatedAccountAddress>;
  /** Token mint for the owner associated token account. */
  ownerTokenMintAddress: Address<TAccountOwnerTokenMintAddress>;
  /** Wallet address for the owner associated token account. */
  walletAddress: TransactionSigner<TAccountWalletAddress>;
  /** SPL Token program. */
  tokenProgram?: Address<TAccountTokenProgram>;
};

export function getRecoverNestedAssociatedTokenInstruction<
  TAccountNestedAssociatedAccountAddress extends string,
  TAccountNestedTokenMintAddress extends string,
  TAccountDestinationAssociatedAccountAddress extends string,
  TAccountOwnerAssociatedAccountAddress extends string,
  TAccountOwnerTokenMintAddress extends string,
  TAccountWalletAddress extends string,
  TAccountTokenProgram extends string,
  TProgramAddress extends Address = typeof ASSOCIATED_TOKEN_PROGRAM_ADDRESS,
>(
  input: RecoverNestedAssociatedTokenInput<
    TAccountNestedAssociatedAccountAddress,
    TAccountNestedTokenMintAddress,
    TAccountDestinationAssociatedAccountAddress,
    TAccountOwnerAssociatedAccountAddress,
    TAccountOwnerTokenMintAddress,
    TAccountWalletAddress,
    TAccountTokenProgram
  >,
  config?: { programAddress?: TProgramAddress }
): RecoverNestedAssociatedTokenInstruction<
  TProgramAddress,
  TAccountNestedAssociatedAccountAddress,
  TAccountNestedTokenMintAddress,
  TAccountDestinationAssociatedAccountAddress,
  TAccountOwnerAssociatedAccountAddress,
  TAccountOwnerTokenMintAddress,
  TAccountWalletAddress,
  TAccountTokenProgram
> {
  // Program address.
  const programAddress =
    config?.programAddress ?? ASSOCIATED_TOKEN_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    nestedAssociatedAccountAddress: {
      value: input.nestedAssociatedAccountAddress ?? null,
      isWritable: true,
    },
    nestedTokenMintAddress: {
      value: input.nestedTokenMintAddress ?? null,
      isWritable: false,
    },
    destinationAssociatedAccountAddress: {
      value: input.destinationAssociatedAccountAddress ?? null,
      isWritable: true,
    },
    ownerAssociatedAccountAddress: {
      value: input.ownerAssociatedAccountAddress ?? null,
      isWritable: false,
    },
    ownerTokenMintAddress: {
      value: input.ownerTokenMintAddress ?? null,
      isWritable: false,
    },
    walletAddress: { value: input.walletAddress ?? null, isWritable: true },
    tokenProgram: { value: input.tokenProgram ?? null, isWritable: false },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Resolve default values.
  if (!accounts.tokenProgram.value) {
    accounts.tokenProgram.value =
      'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Address<'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'>;
  }

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.nestedAssociatedAccountAddress),
      getAccountMeta(accounts.nestedTokenMintAddress),
      getAccountMeta(accounts.destinationAssociatedAccountAddress),
      getAccountMeta(accounts.ownerAssociatedAccountAddress),
      getAccountMeta(accounts.ownerTokenMintAddress),
      getAccountMeta(accounts.walletAddress),
      getAccountMeta(accounts.tokenProgram),
    ],
    programAddress,
    data: getRecoverNestedAssociatedTokenInstructionDataEncoder().encode({}),
  } as RecoverNestedAssociatedTokenInstruction<
    TProgramAddress,
    TAccountNestedAssociatedAccountAddress,
    TAccountNestedTokenMintAddress,
    TAccountDestinationAssociatedAccountAddress,
    TAccountOwnerAssociatedAccountAddress,
    TAccountOwnerTokenMintAddress,
    TAccountWalletAddress,
    TAccountTokenProgram
  >;

  return instruction;
}

export type ParsedRecoverNestedAssociatedTokenInstruction<
  TProgram extends string = typeof ASSOCIATED_TOKEN_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** Nested associated token account, must be owned by `ownerAssociatedAccountAddress`. */
    nestedAssociatedAccountAddress: TAccountMetas[0];
    /** Token mint for the nested associated token account. */
    nestedTokenMintAddress: TAccountMetas[1];
    /** Wallet's associated token account. */
    destinationAssociatedAccountAddress: TAccountMetas[2];
    /** Owner associated token account address, must be owned by `walletAddress`. */
    ownerAssociatedAccountAddress: TAccountMetas[3];
    /** Token mint for the owner associated token account. */
    ownerTokenMintAddress: TAccountMetas[4];
    /** Wallet address for the owner associated token account. */
    walletAddress: TAccountMetas[5];
    /** SPL Token program. */
    tokenProgram: TAccountMetas[6];
  };
  data: RecoverNestedAssociatedTokenInstructionData;
};

export function parseRecoverNestedAssociatedTokenInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedRecoverNestedAssociatedTokenInstruction<TProgram, TAccountMetas> {
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
      nestedAssociatedAccountAddress: getNextAccount(),
      nestedTokenMintAddress: getNextAccount(),
      destinationAssociatedAccountAddress: getNextAccount(),
      ownerAssociatedAccountAddress: getNextAccount(),
      ownerTokenMintAddress: getNextAccount(),
      walletAddress: getNextAccount(),
      tokenProgram: getNextAccount(),
    },
    data: getRecoverNestedAssociatedTokenInstructionDataDecoder().decode(
      instruction.data
    ),
  };
}
