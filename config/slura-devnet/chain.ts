import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts'

export const FACTORY_ADDRESS = '0xdF0A7B29FeEF1d38091C2d386D82fFf3200E4aDe'

export const REFERENCE_TOKEN = '0x432299a3E1387aBA04b6F07b85a374e0966179c8' // WVEZ

export const TVL_MULTIPLIER_THRESHOLD = '2'
export const MATURE_MARKET = '1000000'
export const MINIMUM_NATIVE_LOCKED = BigDecimal.fromString('100000')

export const ROLL_DELETE_HOUR = 768
export const ROLL_DELETE_MINUTE = 1680

export const ROLL_DELETE_HOUR_LIMITER = BigInt.fromI32(500)
export const ROLL_DELETE_MINUTE_LIMITER = BigInt.fromI32(1000)

// token where amounts should contribute to tracked volume and liquidity
// usually tokens that many tokens are paired with s
export const WHITELIST_TOKENS: string[] = [
  '0x432299a3E1387aBA04b6F07b85a374e0966179c8', // WVEZ
  '0x7d8d05D3f7F39D999F61A2b03b47f61D3490cCb6', // EURC
  '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE', // VEZ
]

export const STABLE_COINS: string[] = [
  '0x7d8d05D3f7F39D999F61A2b03b47f61D3490cCb6', // EURC
]

export const SKIP_POOLS: string[] = []

export const POOL_MAPINGS: Array<Address[]> = []

export class TokenDefinition {
  address: Address
  symbol: string
  name: string
  decimals: BigInt
}

export const STATIC_TOKEN_DEFINITIONS: TokenDefinition[] = []
