/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Account,
  EncodedAccount,
  FetchAccountConfig,
  FetchAccountsConfig,
  MaybeAccount,
  MaybeEncodedAccount,
  assertAccountExists,
  assertAccountsExist,
  decodeAccount,
  fetchEncodedAccount,
  fetchEncodedAccounts,
} from '@solana/accounts';
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
  getU64Decoder,
  getU64Encoder,
} from '@solana/codecs';
import {
  NonceState,
  NonceStateArgs,
  NonceVersion,
  NonceVersionArgs,
  getNonceStateDecoder,
  getNonceStateEncoder,
  getNonceVersionDecoder,
  getNonceVersionEncoder,
} from '../types';

export type Nonce = {
  version: NonceVersion;
  state: NonceState;
  authority: Address;
  blockhash: Address;
  lamportsPerSignature: bigint;
};

export type NonceArgs = {
  version: NonceVersionArgs;
  state: NonceStateArgs;
  authority: Address;
  blockhash: Address;
  lamportsPerSignature: number | bigint;
};

export function getNonceEncoder(): Encoder<NonceArgs> {
  return getStructEncoder([
    ['version', getNonceVersionEncoder()],
    ['state', getNonceStateEncoder()],
    ['authority', getAddressEncoder()],
    ['blockhash', getAddressEncoder()],
    ['lamportsPerSignature', getU64Encoder()],
  ]);
}

export function getNonceDecoder(): Decoder<Nonce> {
  return getStructDecoder([
    ['version', getNonceVersionDecoder()],
    ['state', getNonceStateDecoder()],
    ['authority', getAddressDecoder()],
    ['blockhash', getAddressDecoder()],
    ['lamportsPerSignature', getU64Decoder()],
  ]);
}

export function getNonceCodec(): Codec<NonceArgs, Nonce> {
  return combineCodec(getNonceEncoder(), getNonceDecoder());
}

export function decodeNonce<TAddress extends string = string>(
  encodedAccount: EncodedAccount<TAddress>
): Account<Nonce, TAddress>;
export function decodeNonce<TAddress extends string = string>(
  encodedAccount: MaybeEncodedAccount<TAddress>
): MaybeAccount<Nonce, TAddress>;
export function decodeNonce<TAddress extends string = string>(
  encodedAccount: EncodedAccount<TAddress> | MaybeEncodedAccount<TAddress>
): Account<Nonce, TAddress> | MaybeAccount<Nonce, TAddress> {
  return decodeAccount(
    encodedAccount as MaybeEncodedAccount<TAddress>,
    getNonceDecoder()
  );
}

export async function fetchNonce<TAddress extends string = string>(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  address: Address<TAddress>,
  config?: FetchAccountConfig
): Promise<Account<Nonce, TAddress>> {
  const maybeAccount = await fetchMaybeNonce(rpc, address, config);
  assertAccountExists(maybeAccount);
  return maybeAccount;
}

export async function fetchMaybeNonce<TAddress extends string = string>(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  address: Address<TAddress>,
  config?: FetchAccountConfig
): Promise<MaybeAccount<Nonce, TAddress>> {
  const maybeAccount = await fetchEncodedAccount(rpc, address, config);
  return decodeNonce(maybeAccount);
}

export async function fetchAllNonce(
  rpc: Parameters<typeof fetchEncodedAccounts>[0],
  addresses: Array<Address>,
  config?: FetchAccountsConfig
): Promise<Account<Nonce>[]> {
  const maybeAccounts = await fetchAllMaybeNonce(rpc, addresses, config);
  assertAccountsExist(maybeAccounts);
  return maybeAccounts;
}

export async function fetchAllMaybeNonce(
  rpc: Parameters<typeof fetchEncodedAccounts>[0],
  addresses: Array<Address>,
  config?: FetchAccountsConfig
): Promise<MaybeAccount<Nonce>[]> {
  const maybeAccounts = await fetchEncodedAccounts(rpc, addresses, config);
  return maybeAccounts.map((maybeAccount) => decodeNonce(maybeAccount));
}

export function getNonceSize(): number {
  return 80;
}
