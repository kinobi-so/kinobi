/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/kinobi-so/kinobi
 */

import {
  assertAccountExists,
  assertAccountsExist,
  combineCodec,
  decodeAccount,
  fetchEncodedAccount,
  fetchEncodedAccounts,
  getAddressDecoder,
  getAddressEncoder,
  getArrayDecoder,
  getArrayEncoder,
  getBooleanDecoder,
  getBooleanEncoder,
  getStructDecoder,
  getStructEncoder,
  getU8Decoder,
  getU8Encoder,
  type Account,
  type Address,
  type Codec,
  type Decoder,
  type EncodedAccount,
  type Encoder,
  type FetchAccountConfig,
  type FetchAccountsConfig,
  type MaybeAccount,
  type MaybeEncodedAccount,
} from '@solana/web3.js';

export type Multisig = {
  /** Number of signers required. */
  m: number;
  /** Number of valid signers. */
  n: number;
  /** Is `true` if this structure has been initialized. */
  isInitialized: boolean;
  /** Signer public keys. */
  signers: Array<Address>;
};

export type MultisigArgs = Multisig;

export function getMultisigEncoder(): Encoder<MultisigArgs> {
  return getStructEncoder([
    ['m', getU8Encoder()],
    ['n', getU8Encoder()],
    ['isInitialized', getBooleanEncoder()],
    ['signers', getArrayEncoder(getAddressEncoder(), { size: 11 })],
  ]);
}

export function getMultisigDecoder(): Decoder<Multisig> {
  return getStructDecoder([
    ['m', getU8Decoder()],
    ['n', getU8Decoder()],
    ['isInitialized', getBooleanDecoder()],
    ['signers', getArrayDecoder(getAddressDecoder(), { size: 11 })],
  ]);
}

export function getMultisigCodec(): Codec<MultisigArgs, Multisig> {
  return combineCodec(getMultisigEncoder(), getMultisigDecoder());
}

export function decodeMultisig<TAddress extends string = string>(
  encodedAccount: EncodedAccount<TAddress>
): Account<Multisig, TAddress>;
export function decodeMultisig<TAddress extends string = string>(
  encodedAccount: MaybeEncodedAccount<TAddress>
): MaybeAccount<Multisig, TAddress>;
export function decodeMultisig<TAddress extends string = string>(
  encodedAccount: EncodedAccount<TAddress> | MaybeEncodedAccount<TAddress>
): Account<Multisig, TAddress> | MaybeAccount<Multisig, TAddress> {
  return decodeAccount(
    encodedAccount as MaybeEncodedAccount<TAddress>,
    getMultisigDecoder()
  );
}

export async function fetchMultisig<TAddress extends string = string>(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  address: Address<TAddress>,
  config?: FetchAccountConfig
): Promise<Account<Multisig, TAddress>> {
  const maybeAccount = await fetchMaybeMultisig(rpc, address, config);
  assertAccountExists(maybeAccount);
  return maybeAccount;
}

export async function fetchMaybeMultisig<TAddress extends string = string>(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  address: Address<TAddress>,
  config?: FetchAccountConfig
): Promise<MaybeAccount<Multisig, TAddress>> {
  const maybeAccount = await fetchEncodedAccount(rpc, address, config);
  return decodeMultisig(maybeAccount);
}

export async function fetchAllMultisig(
  rpc: Parameters<typeof fetchEncodedAccounts>[0],
  addresses: Array<Address>,
  config?: FetchAccountsConfig
): Promise<Account<Multisig>[]> {
  const maybeAccounts = await fetchAllMaybeMultisig(rpc, addresses, config);
  assertAccountsExist(maybeAccounts);
  return maybeAccounts;
}

export async function fetchAllMaybeMultisig(
  rpc: Parameters<typeof fetchEncodedAccounts>[0],
  addresses: Array<Address>,
  config?: FetchAccountsConfig
): Promise<MaybeAccount<Multisig>[]> {
  const maybeAccounts = await fetchEncodedAccounts(rpc, addresses, config);
  return maybeAccounts.map((maybeAccount) => decodeMultisig(maybeAccount));
}

export function getMultisigSize(): number {
  return 355;
}
