import { Base } from './base';
export declare class Wallet extends Base {
    /**
     * Query the currency information
     *
     * @returns
     */
    currencyInformation(): any;
    /**
     * Withdraw
     *
     * If "network" is not sent, will return default network in that currency.
     * Can get "network" via currencyInformation's response params "networkList" and check whether is default network by response params "isDefault"
     * Withdraw address only support address which added in withdrawal settings on website.
     *
     * @param coin
     * @param address
     * @param amount
     * @param options
     * ```
     * [options.withdrawOrderId]
     * [options.network]
     * [options.memo]
     * [options.remark]
     * ```
     * @returns
     */
    withdraw(coin: string, address: string, amount: string, options?: any): any;
    /**
     * Deposit History (supporting network)
     *
     * Ensure that the default timestamp of 'startTime' and 'endTime' does not exceed 90 days.
     *
     * @param options
     * ```
     * [options.coin]
     * [options.status]
     * [options.startTime] - default: 90 days ago from current time
     * [options.endTime] - default:current time
     * [options.limit] - default:1000,max:1000
     * ```
     * @returns
     */
    depositHistory(options?: any): any;
    /**
     * Withdraw History (supporting network)
     *
     * Supported multiple network coins' withdraw history may not return the 'network' field.
     * Ensure that the default timestamp of 'startTime' and 'endTime' does not exceed 90 days.
     *
     * @param options
     * ```
     * [options.coin]
     * [options.status] - withdraw status
     * [options.limit] - default:1000, max:1000
     * [options.startTime] - default: 90 days ago from current time
     * [options.endTime] - default:current time
     * ```
     * @returns
     */
    withdrawHistory(options?: any): any;
    /**
     * Generate deposit address (supporting network)
     *
     * @param coin
     * @param network - deposit network
     *
     * @returns
     */
    generateDepositAddress(coin: string, network: string): any;
    /**
     * Deposit Address (supporting network)
     *
     * @param coin
     * @param options
     * ```
     * [options.network] - deposit network
     * ```
     *
     * @returns
     */
    depositAddress(coin: string, options?: any): any;
}
