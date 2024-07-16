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
  getOptionDecoder,
  getOptionEncoder,
  getStructDecoder,
  getStructEncoder,
  getU32Decoder,
  getU32Encoder,
  getU64Decoder,
  getU64Encoder,
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
  type Option,
  type OptionOrNullable,
} from '@solana/web3.js';
import {
  getAccountStateDecoder,
  getAccountStateEncoder,
  type AccountState,
  type AccountStateArgs,
} from '../types';

export type Token = {
  /** The mint associated with this account. */
  mint: Address;
  /** The owner of this account. */
  owner: Address;
  /** The amount of tokens this account holds. */
  amount: bigint;
  /**
   * If `delegate` is `Some` then `delegated_amount` represents
   * the amount authorized by the delegate.
   */
  delegate: Option<Address>;
  /** The account's state. */
  state: AccountState;
  /**
   * If is_native.is_some, this is a native token, and the value logs the
   * rent-exempt reserve. An Account is required to be rent-exempt, so
   * the value is used by the Processor to ensure that wrapped SOL
   * accounts do not drop below this threshold.
   */
  isNative: Option<bigint>;
  /** The amount delegated. */
  delegatedAmount: bigint;
  /** Optional authority to close the account. */
  closeAuthority: Option<Address>;
};

export type TokenArgs = {
  /** The mint associated with this account. */
  mint: Address;
  /** The owner of this account. */
  owner: Address;
  /** The amount of tokens this account holds. */
  amount: number | bigint;
  /**
   * If `delegate` is `Some` then `delegated_amount` represents
   * the amount authorized by the delegate.
   */
  delegate: OptionOrNullable<Address>;
  /** The account's state. */
  state: AccountStateArgs;
  /**
   * If is_native.is_some, this is a native token, and the value logs the
   * rent-exempt reserve. An Account is required to be rent-exempt, so
   * the value is used by the Processor to ensure that wrapped SOL
   * accounts do not drop below this threshold.
   */
  isNative: OptionOrNullable<number | bigint>;
  /** The amount delegated. */
  delegatedAmount: number | bigint;
  /** Optional authority to close the account. */
  closeAuthority: OptionOrNullable<Address>;
};

export function getTokenEncoder(): Encoder<TokenArgs> {
  return getStructEncoder([
    ['mint', getAddressEncoder()],
    ['owner', getAddressEncoder()],
    ['amount', getU64Encoder()],
    [
      'delegate',
      getOptionEncoder(getAddressEncoder(), {
        prefix: getU32Encoder(),
        noneValue: 'zeroes',
      }),
    ],
    ['state', getAccountStateEncoder()],
    [
      'isNative',
      getOptionEncoder(getU64Encoder(), {
        prefix: getU32Encoder(),
        noneValue: 'zeroes',
      }),
    ],
    ['delegatedAmount', getU64Encoder()],
    [
      'closeAuthority',
      getOptionEncoder(getAddressEncoder(), {
        prefix: getU32Encoder(),
        noneValue: 'zeroes',
      }),
    ],
  ]);
}

export function getTokenDecoder(): Decoder<Token> {
  return getStructDecoder([
    ['mint', getAddressDecoder()],
    ['owner', getAddressDecoder()],
    ['amount', getU64Decoder()],
    [
      'delegate',
      getOptionDecoder(getAddressDecoder(), {
        prefix: getU32Decoder(),
        noneValue: 'zeroes',
      }),
    ],
    ['state', getAccountStateDecoder()],
    [
      'isNative',
      getOptionDecoder(getU64Decoder(), {
        prefix: getU32Decoder(),
        noneValue: 'zeroes',
      }),
    ],
    ['delegatedAmount', getU64Decoder()],
    [
      'closeAuthority',
      getOptionDecoder(getAddressDecoder(), {
        prefix: getU32Decoder(),
        noneValue: 'zeroes',
      }),
    ],
  ]);
}

export function getTokenCodec(): Codec<TokenArgs, Token> {
  return combineCodec(getTokenEncoder(), getTokenDecoder());
}

export function decodeToken<TAddress extends string = string>(
  encodedAccount: EncodedAccount<TAddress>
): Account<Token, TAddress>;
export function decodeToken<TAddress extends string = string>(
  encodedAccount: MaybeEncodedAccount<TAddress>
): MaybeAccount<Token, TAddress>;
export function decodeToken<TAddress extends string = string>(
  encodedAccount: EncodedAccount<TAddress> | MaybeEncodedAccount<TAddress>
): Account<Token, TAddress> | MaybeAccount<Token, TAddress> {
  return decodeAccount(
    encodedAccount as MaybeEncodedAccount<TAddress>,
    getTokenDecoder()
  );
}

export async function fetchToken<TAddress extends string = string>(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  address: Address<TAddress>,
  config?: FetchAccountConfig
): Promise<Account<Token, TAddress>> {
  const maybeAccount = await fetchMaybeToken(rpc, address, config);
  assertAccountExists(maybeAccount);
  return maybeAccount;
}

export async function fetchMaybeToken<TAddress extends string = string>(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  address: Address<TAddress>,
  config?: FetchAccountConfig
): Promise<MaybeAccount<Token, TAddress>> {
  const maybeAccount = await fetchEncodedAccount(rpc, address, config);
  return decodeToken(maybeAccount);
}

export async function fetchAllToken(
  rpc: Parameters<typeof fetchEncodedAccounts>[0],
  addresses: Array<Address>,
  config?: FetchAccountsConfig
): Promise<Account<Token>[]> {
  const maybeAccounts = await fetchAllMaybeToken(rpc, addresses, config);
  assertAccountsExist(maybeAccounts);
  return maybeAccounts;
}

export async function fetchAllMaybeToken(
  rpc: Parameters<typeof fetchEncodedAccounts>[0],
  addresses: Array<Address>,
  config?: FetchAccountsConfig
): Promise<MaybeAccount<Token>[]> {
  const maybeAccounts = await fetchEncodedAccounts(rpc, addresses, config);
  return maybeAccounts.map((maybeAccount) => decodeToken(maybeAccount));
}

export function getTokenSize(): number {
  return 165;
}
