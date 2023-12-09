"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallet = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const base_1 = require("./base");
const util_1 = require("../util");
class Wallet extends base_1.Base {
    /**
     * Query the currency information
     *
     * @returns
     */
    currencyInformation() {
        const res = this.signRequest('GET', '/capital/config/getall');
        const rawData = JSON.parse(res.getBody());
        const formatDatas = util_1.fromatData(rawData);
        return formatDatas;
    }
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
    withdraw(coin, address, amount, options = {}) {
        if ([coin, address, amount].some(str => !str.trim())) {
            console.assert(false, `Some params are required`);
            return;
        }
        const res = this.signRequest('POST', '/capital/withdraw/apply', Object.assign(options, {
            coin: coin.toUpperCase(),
            address: address,
            amount: amount,
        }));
        const rawData = JSON.parse(res.getBody());
        const formatDatas = util_1.fromatData(rawData);
        return formatDatas;
    }
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
    depositHistory(options = {}) {
        const res = this.signRequest('GET', '/capital/deposit/hisrec', options);
        const rawData = JSON.parse(res.getBody());
        const formatDatas = util_1.fromatData(rawData);
        return formatDatas;
    }
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
    withdrawHistory(options = {}) {
        const res = this.signRequest('GET', '/capital/withdraw/history', options);
        const rawData = JSON.parse(res.getBody());
        const formatDatas = util_1.fromatData(rawData);
        return formatDatas;
    }
    /**
     * Generate deposit address (supporting network)
     *
     * @param coin
     * @param network - deposit network
     *
     * @returns
     */
    generateDepositAddress(coin, network) {
        if ([coin, network].some(str => !str.trim())) {
            console.assert(false, `Some params are required`);
            return;
        }
        const res = this.signRequest('POST', '/capital/deposit/address', {
            coin: coin.toUpperCase(),
            network: network.toUpperCase(),
        });
        const rawData = JSON.parse(res.getBody());
        const formatDatas = util_1.fromatData(rawData);
        return formatDatas;
    }
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
    depositAddress(coin, options = {}) {
        if ([coin].some(str => !str.trim())) {
            console.assert(false, `Some params are required`);
            return;
        }
        const res = this.signRequest('GET', '/capital/deposit/address', Object.assign(options, {
            coin: coin.toUpperCase(),
        }));
        const rawData = JSON.parse(res.getBody());
        const formatDatas = util_1.fromatData(rawData);
        return formatDatas;
    }
}
exports.Wallet = Wallet;
_a = JSII_RTTI_SYMBOL_1;
Wallet[_a] = { fqn: "mexc-sdk.Wallet", version: "1.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbGV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2FsbGV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsaUNBQThCO0FBQzlCLGtDQUFxQztBQUVyQyxNQUFhLE1BQU8sU0FBUSxXQUFJO0lBQzlCOzs7O09BSUc7SUFDSSxtQkFBbUI7UUFDeEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztRQUM5RCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sV0FBVyxHQUFHLGlCQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFeEMsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FrQkc7SUFDSSxRQUFRLENBQUMsSUFBWSxFQUFFLE9BQWUsRUFBRSxNQUFjLEVBQUUsVUFBZSxFQUFFO1FBQzlFLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUU7WUFDcEQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztZQUNsRCxPQUFPO1NBQ1I7UUFFRCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUNyRixJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUN4QixPQUFPLEVBQUUsT0FBTztZQUNoQixNQUFNLEVBQUUsTUFBTTtTQUNmLENBQUMsQ0FBQyxDQUFDO1FBQ0osTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUMxQyxNQUFNLFdBQVcsR0FBRyxpQkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXhDLE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7T0FjRztJQUNJLGNBQWMsQ0FBQyxVQUFlLEVBQUU7UUFDckMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUseUJBQXlCLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDeEUsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUMxQyxNQUFNLFdBQVcsR0FBRyxpQkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXhDLE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7O09BZUc7SUFDSSxlQUFlLENBQUMsVUFBZSxFQUFFO1FBQ3RDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLDJCQUEyQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzFFLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDMUMsTUFBTSxXQUFXLEdBQUcsaUJBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV4QyxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNJLHNCQUFzQixDQUFDLElBQVksRUFBRSxPQUFlO1FBQ3pELElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRTtZQUM1QyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO1lBQ2xELE9BQU87U0FDUjtRQUVELE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLDBCQUEwQixFQUFFO1lBQy9ELElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3hCLE9BQU8sRUFBRSxPQUFPLENBQUMsV0FBVyxFQUFFO1NBQy9CLENBQUMsQ0FBQztRQUNILE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDMUMsTUFBTSxXQUFXLEdBQUcsaUJBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV4QyxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7T0FVRztJQUNJLGNBQWMsQ0FBQyxJQUFZLEVBQUUsVUFBZSxFQUFFO1FBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFO1lBQ25DLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLDBCQUEwQixDQUFDLENBQUM7WUFDbEQsT0FBTztTQUNSO1FBRUQsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDckYsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUU7U0FDekIsQ0FBQyxDQUFDLENBQUM7UUFDSixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sV0FBVyxHQUFHLGlCQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFeEMsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQzs7QUFqSkgsd0JBa0pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZSB9IGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgeyBmcm9tYXREYXRhIH0gZnJvbSAnLi4vdXRpbCc7XG5cbmV4cG9ydCBjbGFzcyBXYWxsZXQgZXh0ZW5kcyBCYXNlIHtcbiAgLyoqXG4gICAqIFF1ZXJ5IHRoZSBjdXJyZW5jeSBpbmZvcm1hdGlvblxuICAgKlxuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgcHVibGljIGN1cnJlbmN5SW5mb3JtYXRpb24oKSB7XG4gICAgY29uc3QgcmVzID0gdGhpcy5zaWduUmVxdWVzdCgnR0VUJywgJy9jYXBpdGFsL2NvbmZpZy9nZXRhbGwnKTtcbiAgICBjb25zdCByYXdEYXRhID0gSlNPTi5wYXJzZShyZXMuZ2V0Qm9keSgpKTtcbiAgICBjb25zdCBmb3JtYXREYXRhcyA9IGZyb21hdERhdGEocmF3RGF0YSk7XG5cbiAgICByZXR1cm4gZm9ybWF0RGF0YXM7XG4gIH1cblxuICAvKipcbiAgICogV2l0aGRyYXdcbiAgICpcbiAgICogSWYgXCJuZXR3b3JrXCIgaXMgbm90IHNlbnQsIHdpbGwgcmV0dXJuIGRlZmF1bHQgbmV0d29yayBpbiB0aGF0IGN1cnJlbmN5LlxuICAgKiBDYW4gZ2V0IFwibmV0d29ya1wiIHZpYSBjdXJyZW5jeUluZm9ybWF0aW9uJ3MgcmVzcG9uc2UgcGFyYW1zIFwibmV0d29ya0xpc3RcIiBhbmQgY2hlY2sgd2hldGhlciBpcyBkZWZhdWx0IG5ldHdvcmsgYnkgcmVzcG9uc2UgcGFyYW1zIFwiaXNEZWZhdWx0XCJcbiAgICogV2l0aGRyYXcgYWRkcmVzcyBvbmx5IHN1cHBvcnQgYWRkcmVzcyB3aGljaCBhZGRlZCBpbiB3aXRoZHJhd2FsIHNldHRpbmdzIG9uIHdlYnNpdGUuXG4gICAqXG4gICAqIEBwYXJhbSBjb2luXG4gICAqIEBwYXJhbSBhZGRyZXNzXG4gICAqIEBwYXJhbSBhbW91bnRcbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICogYGBgXG4gICAqIFtvcHRpb25zLndpdGhkcmF3T3JkZXJJZF1cbiAgICogW29wdGlvbnMubmV0d29ya11cbiAgICogW29wdGlvbnMubWVtb11cbiAgICogW29wdGlvbnMucmVtYXJrXVxuICAgKiBgYGBcbiAgICogQHJldHVybnNcbiAgICovXG4gIHB1YmxpYyB3aXRoZHJhdyhjb2luOiBzdHJpbmcsIGFkZHJlc3M6IHN0cmluZywgYW1vdW50OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KSB7XG4gICAgaWYgKFtjb2luLCBhZGRyZXNzLCBhbW91bnRdLnNvbWUoc3RyID0+ICFzdHIudHJpbSgpKSkge1xuICAgICAgY29uc29sZS5hc3NlcnQoZmFsc2UsIGBTb21lIHBhcmFtcyBhcmUgcmVxdWlyZWRgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZXMgPSB0aGlzLnNpZ25SZXF1ZXN0KCdQT1NUJywgJy9jYXBpdGFsL3dpdGhkcmF3L2FwcGx5JywgT2JqZWN0LmFzc2lnbihvcHRpb25zLCB7XG4gICAgICBjb2luOiBjb2luLnRvVXBwZXJDYXNlKCksXG4gICAgICBhZGRyZXNzOiBhZGRyZXNzLFxuICAgICAgYW1vdW50OiBhbW91bnQsXG4gICAgfSkpO1xuICAgIGNvbnN0IHJhd0RhdGEgPSBKU09OLnBhcnNlKHJlcy5nZXRCb2R5KCkpO1xuICAgIGNvbnN0IGZvcm1hdERhdGFzID0gZnJvbWF0RGF0YShyYXdEYXRhKTtcblxuICAgIHJldHVybiBmb3JtYXREYXRhcztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXBvc2l0IEhpc3RvcnkgKHN1cHBvcnRpbmcgbmV0d29yaylcbiAgICpcbiAgICogRW5zdXJlIHRoYXQgdGhlIGRlZmF1bHQgdGltZXN0YW1wIG9mICdzdGFydFRpbWUnIGFuZCAnZW5kVGltZScgZG9lcyBub3QgZXhjZWVkIDkwIGRheXMuXG4gICAqXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqIGBgYFxuICAgKiBbb3B0aW9ucy5jb2luXVxuICAgKiBbb3B0aW9ucy5zdGF0dXNdXG4gICAqIFtvcHRpb25zLnN0YXJ0VGltZV0gLSBkZWZhdWx0OiA5MCBkYXlzIGFnbyBmcm9tIGN1cnJlbnQgdGltZVxuICAgKiBbb3B0aW9ucy5lbmRUaW1lXSAtIGRlZmF1bHQ6Y3VycmVudCB0aW1lXG4gICAqIFtvcHRpb25zLmxpbWl0XSAtIGRlZmF1bHQ6MTAwMCxtYXg6MTAwMFxuICAgKiBgYGBcbiAgICogQHJldHVybnNcbiAgICovXG4gIHB1YmxpYyBkZXBvc2l0SGlzdG9yeShvcHRpb25zOiBhbnkgPSB7fSkge1xuICAgIGNvbnN0IHJlcyA9IHRoaXMuc2lnblJlcXVlc3QoJ0dFVCcsICcvY2FwaXRhbC9kZXBvc2l0L2hpc3JlYycsIG9wdGlvbnMpO1xuICAgIGNvbnN0IHJhd0RhdGEgPSBKU09OLnBhcnNlKHJlcy5nZXRCb2R5KCkpO1xuICAgIGNvbnN0IGZvcm1hdERhdGFzID0gZnJvbWF0RGF0YShyYXdEYXRhKTtcblxuICAgIHJldHVybiBmb3JtYXREYXRhcztcbiAgfVxuXG4gIC8qKlxuICAgKiBXaXRoZHJhdyBIaXN0b3J5IChzdXBwb3J0aW5nIG5ldHdvcmspXG4gICAqXG4gICAqIFN1cHBvcnRlZCBtdWx0aXBsZSBuZXR3b3JrIGNvaW5zJyB3aXRoZHJhdyBoaXN0b3J5IG1heSBub3QgcmV0dXJuIHRoZSAnbmV0d29yaycgZmllbGQuXG4gICAqIEVuc3VyZSB0aGF0IHRoZSBkZWZhdWx0IHRpbWVzdGFtcCBvZiAnc3RhcnRUaW1lJyBhbmQgJ2VuZFRpbWUnIGRvZXMgbm90IGV4Y2VlZCA5MCBkYXlzLlxuICAgKlxuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKiBgYGBcbiAgICogW29wdGlvbnMuY29pbl1cbiAgICogW29wdGlvbnMuc3RhdHVzXSAtIHdpdGhkcmF3IHN0YXR1c1xuICAgKiBbb3B0aW9ucy5saW1pdF0gLSBkZWZhdWx0OjEwMDAsIG1heDoxMDAwXG4gICAqIFtvcHRpb25zLnN0YXJ0VGltZV0gLSBkZWZhdWx0OiA5MCBkYXlzIGFnbyBmcm9tIGN1cnJlbnQgdGltZVxuICAgKiBbb3B0aW9ucy5lbmRUaW1lXSAtIGRlZmF1bHQ6Y3VycmVudCB0aW1lXG4gICAqIGBgYFxuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgcHVibGljIHdpdGhkcmF3SGlzdG9yeShvcHRpb25zOiBhbnkgPSB7fSkge1xuICAgIGNvbnN0IHJlcyA9IHRoaXMuc2lnblJlcXVlc3QoJ0dFVCcsICcvY2FwaXRhbC93aXRoZHJhdy9oaXN0b3J5Jywgb3B0aW9ucyk7XG4gICAgY29uc3QgcmF3RGF0YSA9IEpTT04ucGFyc2UocmVzLmdldEJvZHkoKSk7XG4gICAgY29uc3QgZm9ybWF0RGF0YXMgPSBmcm9tYXREYXRhKHJhd0RhdGEpO1xuXG4gICAgcmV0dXJuIGZvcm1hdERhdGFzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIGRlcG9zaXQgYWRkcmVzcyAoc3VwcG9ydGluZyBuZXR3b3JrKVxuICAgKlxuICAgKiBAcGFyYW0gY29pblxuICAgKiBAcGFyYW0gbmV0d29yayAtIGRlcG9zaXQgbmV0d29ya1xuICAgKlxuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgcHVibGljIGdlbmVyYXRlRGVwb3NpdEFkZHJlc3MoY29pbjogc3RyaW5nLCBuZXR3b3JrOiBzdHJpbmcpIHtcbiAgICBpZiAoW2NvaW4sIG5ldHdvcmtdLnNvbWUoc3RyID0+ICFzdHIudHJpbSgpKSkge1xuICAgICAgY29uc29sZS5hc3NlcnQoZmFsc2UsIGBTb21lIHBhcmFtcyBhcmUgcmVxdWlyZWRgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZXMgPSB0aGlzLnNpZ25SZXF1ZXN0KCdQT1NUJywgJy9jYXBpdGFsL2RlcG9zaXQvYWRkcmVzcycsIHtcbiAgICAgIGNvaW46IGNvaW4udG9VcHBlckNhc2UoKSxcbiAgICAgIG5ldHdvcms6IG5ldHdvcmsudG9VcHBlckNhc2UoKSxcbiAgICB9KTtcbiAgICBjb25zdCByYXdEYXRhID0gSlNPTi5wYXJzZShyZXMuZ2V0Qm9keSgpKTtcbiAgICBjb25zdCBmb3JtYXREYXRhcyA9IGZyb21hdERhdGEocmF3RGF0YSk7XG5cbiAgICByZXR1cm4gZm9ybWF0RGF0YXM7XG4gIH1cblxuICAvKipcbiAgICogRGVwb3NpdCBBZGRyZXNzIChzdXBwb3J0aW5nIG5ldHdvcmspXG4gICAqXG4gICAqIEBwYXJhbSBjb2luXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqIGBgYFxuICAgKiBbb3B0aW9ucy5uZXR3b3JrXSAtIGRlcG9zaXQgbmV0d29ya1xuICAgKiBgYGBcbiAgICpcbiAgICogQHJldHVybnNcbiAgICovXG4gIHB1YmxpYyBkZXBvc2l0QWRkcmVzcyhjb2luOiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KSB7XG4gICAgaWYgKFtjb2luXS5zb21lKHN0ciA9PiAhc3RyLnRyaW0oKSkpIHtcbiAgICAgIGNvbnNvbGUuYXNzZXJ0KGZhbHNlLCBgU29tZSBwYXJhbXMgYXJlIHJlcXVpcmVkYCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVzID0gdGhpcy5zaWduUmVxdWVzdCgnR0VUJywgJy9jYXBpdGFsL2RlcG9zaXQvYWRkcmVzcycsIE9iamVjdC5hc3NpZ24ob3B0aW9ucywge1xuICAgICAgY29pbjogY29pbi50b1VwcGVyQ2FzZSgpLFxuICAgIH0pKTtcbiAgICBjb25zdCByYXdEYXRhID0gSlNPTi5wYXJzZShyZXMuZ2V0Qm9keSgpKTtcbiAgICBjb25zdCBmb3JtYXREYXRhcyA9IGZyb21hdERhdGEocmF3RGF0YSk7XG5cbiAgICByZXR1cm4gZm9ybWF0RGF0YXM7XG4gIH1cbn1cbiJdfQ==