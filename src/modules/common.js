"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Common = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const market_1 = require("./market");
class Common extends market_1.Market {
    /**
     * Test Connectivity
     */
    ping() {
        const res = this.publicRequest('GET', '/ping');
        return JSON.parse(res.getBody());
    }
    /**
     * Check Server Time
     */
    time() {
        const res = this.publicRequest('GET', '/time');
        return JSON.parse(res.getBody());
    }
}
exports.Common = Common;
_a = JSII_RTTI_SYMBOL_1;
Common[_a] = { fqn: "mexc-sdk.Common", version: "1.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tbW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscUNBQWtDO0FBRWxDLE1BQWEsTUFBTyxTQUFRLGVBQU07SUFDaEM7O09BRUc7SUFDSSxJQUFJO1FBQ1QsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUE7UUFDOUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNJLElBQUk7UUFDVCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQTtRQUM5QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUE7SUFDbEMsQ0FBQzs7QUFmSCx3QkFnQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYXJrZXQgfSBmcm9tICcuL21hcmtldCc7XG5cbmV4cG9ydCBjbGFzcyBDb21tb24gZXh0ZW5kcyBNYXJrZXQge1xuICAvKipcbiAgICogVGVzdCBDb25uZWN0aXZpdHlcbiAgICovXG4gIHB1YmxpYyBwaW5nKCkge1xuICAgIGNvbnN0IHJlcyA9IHRoaXMucHVibGljUmVxdWVzdCgnR0VUJywgJy9waW5nJylcbiAgICByZXR1cm4gSlNPTi5wYXJzZShyZXMuZ2V0Qm9keSgpKVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIFNlcnZlciBUaW1lXG4gICAqL1xuICBwdWJsaWMgdGltZSgpIHtcbiAgICBjb25zdCByZXMgPSB0aGlzLnB1YmxpY1JlcXVlc3QoJ0dFVCcsICcvdGltZScpXG4gICAgcmV0dXJuIEpTT04ucGFyc2UocmVzLmdldEJvZHkoKSlcbiAgfVxufSJdfQ==