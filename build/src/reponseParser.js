"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseTAResponse = void 0;
const contracts_1 = require("./contracts");
class ParseTAResponse {
    constructor(indicatorValues) {
        this.values = indicatorValues['data'][0].d;
    }
    ifNullNotIn(from, to) {
        const originalElements = this.values.slice(from, to);
        return (originalElements.length ===
            originalElements.filter((i) => i !== null).length);
    }
    parse() {
        const oscillators_counter = { BUY: 0, SELL: 0, NEUTRAL: 0 };
        const ma_counter = { BUY: 0, SELL: 0, NEUTRAL: 0 };
        const computed_oscillators = {};
        const computed_ma = {};
        const recommend_oscillators = Compute.Recommend(this.values[0]);
        const recommend_summary = Compute.Recommend(this.values[1]);
        const recommend_moving_averages = Compute.Recommend(this.values[2]);
        if (this.ifNullNotIn(3, 5)) {
            computed_oscillators['RSI'] = Compute.RSI(this.values[3], this.values[4]);
            oscillators_counter[computed_oscillators['RSI']] += 1;
        }
        if (this.ifNullNotIn(5, 9)) {
            computed_oscillators['STOCH.K'] = Compute.Stoch(this.values[5], this.values[6], this.values[7], this.values[8]);
            oscillators_counter[computed_oscillators['STOCH.K']] += 1;
        }
        if (this.ifNullNotIn(9, 11)) {
            computed_oscillators['CCI'] = Compute.CCI20(this.values[9], this.values[10]);
            oscillators_counter[computed_oscillators['CCI']] += 1;
        }
        if (this.ifNullNotIn(11, 16)) {
            computed_oscillators['ADX'] = Compute.ADX(this.values[11], this.values[12], this.values[13], this.values[14], this.values[15]);
            oscillators_counter[computed_oscillators['ADX']] += 1;
        }
        if (this.ifNullNotIn(16, 18)) {
            computed_oscillators['AO'] = Compute.AO(this.values[16], this.values[17]);
            oscillators_counter[computed_oscillators['AO']] += 1;
        }
        if (this.ifNullNotIn(18, 20)) {
            computed_oscillators['Mom'] = Compute.Mom(this.values[18], this.values[19]);
            oscillators_counter[computed_oscillators['Mom']] += 1;
        }
        if (this.ifNullNotIn(20, 22)) {
            computed_oscillators['MACD'] = Compute.MACD(this.values[20], this.values[21]);
            oscillators_counter[computed_oscillators['MACD']] += 1;
        }
        if (this.values[22] !== null) {
            computed_oscillators['Stoch.RSI'] = Compute.Simple(this.values[22]);
            oscillators_counter[computed_oscillators['Stoch.RSI']] += 1;
        }
        if (this.values[24] != null) {
            computed_oscillators['W%R'] = Compute.Simple(this.values[24]);
            oscillators_counter[computed_oscillators['W%R']] += 1;
        }
        if (this.values[26] != null) {
            computed_oscillators['BBP'] = Compute.Simple(this.values[26]);
            oscillators_counter[computed_oscillators['BBP']] += 1;
        }
        if (this.values[28] != null) {
            computed_oscillators['UO'] = Compute.Simple(this.values[28]);
            oscillators_counter[computed_oscillators['UO']] += 1;
        }
        const ma_list = [
            'EMA10',
            'SMA10',
            'EMA20',
            'SMA20',
            'EMA30',
            'SMA30',
            'EMA50',
            'SMA50',
            'EMA100',
            'SMA100',
            'EMA200',
            'SMA200',
        ];
        const close = this.values[30];
        let ma_list_counter = 0;
        for (const val of this.values.slice(33, 45)) {
            if (val) {
                computed_ma[ma_list[ma_list_counter]] = Compute.MA(val, close);
                ma_counter[computed_ma[ma_list[ma_list_counter]]] += 1;
                ma_list_counter += 1;
            }
        }
        if (this.values[45] !== null) {
            computed_ma['Ichimoku'] = Compute.Simple(this.values[45]);
            ma_counter[computed_ma['Ichimoku']] += 1;
        }
        if (this.values[47] !== null) {
            computed_ma['VWMA'] = Compute.Simple(this.values[47]);
            ma_counter[computed_ma['VWMA']] += 1;
        }
        if (this.values[49] !== null) {
            computed_ma['HullMA'] = Compute.Simple(this.values[49]);
            ma_counter[computed_ma['HullMA']] += 1;
        }
        const indicators = {};
        let i = 0;
        for (const indicator of contracts_1.REQUEST_INDICATORS) {
            indicators[indicator.replace('{}', '')] = this.values[i];
            i++;
        }
        const analysis = {
            oscillators: {},
            moving_averages: {},
            summary: {},
            indicators,
        };
        analysis.oscillators = {
            RECOMMENDATION: recommend_oscillators,
            BUY: oscillators_counter['BUY'],
            SELL: oscillators_counter['SELL'],
            NEUTRAL: oscillators_counter['NEUTRAL'],
            COMPUTE: computed_oscillators,
        };
        analysis.moving_averages = {
            RECOMMENDATION: recommend_moving_averages,
            BUY: ma_counter['BUY'],
            SELL: ma_counter['SELL'],
            NEUTRAL: ma_counter['NEUTRAL'],
            COMPUTE: computed_ma,
        };
        analysis.summary = {
            RECOMMENDATION: recommend_summary,
            BUY: oscillators_counter['BUY'] + ma_counter['BUY'],
            SELL: oscillators_counter['SELL'] + ma_counter['SELL'],
            NEUTRAL: oscillators_counter['NEUTRAL'] + ma_counter['NEUTRAL'],
        };
        return analysis;
    }
}
exports.ParseTAResponse = ParseTAResponse;
class Compute {
    static MA(ma, close) {
        if (ma < close) {
            return contracts_1.RECOMMENDATIONS_ENUM.BUY;
        }
        else if (ma > close) {
            return contracts_1.RECOMMENDATIONS_ENUM.SELL;
        }
        return contracts_1.RECOMMENDATIONS_ENUM.NEUTRAL;
    }
    static RSI(rsi, rsi1) {
        if (rsi < 30 && rsi1 > rsi) {
            return contracts_1.RECOMMENDATIONS_ENUM.BUY;
        }
        else if (rsi > 70 && rsi1 < rsi) {
            return contracts_1.RECOMMENDATIONS_ENUM.SELL;
        }
        return contracts_1.RECOMMENDATIONS_ENUM.NEUTRAL;
    }
    static Stoch(k, d, k1, d1) {
        if (k < 20 && d < 20 && k > d && k1 < d1) {
            return contracts_1.RECOMMENDATIONS_ENUM.BUY;
        }
        else if (k > 80 && d > 80 && k < d && k1 > d1) {
            return contracts_1.RECOMMENDATIONS_ENUM.SELL;
        }
        return contracts_1.RECOMMENDATIONS_ENUM.NEUTRAL;
    }
    static CCI20(cci20, cci201) {
        if (cci20 < -100 && cci20 > cci201) {
            return contracts_1.RECOMMENDATIONS_ENUM.BUY;
        }
        else if (cci20 > 100 && cci20 < cci201) {
            return contracts_1.RECOMMENDATIONS_ENUM.SELL;
        }
        return contracts_1.RECOMMENDATIONS_ENUM.NEUTRAL;
    }
    static ADX(adx, adxpdi, adxndi, adxpdi1, adxndi1) {
        if (adx > 20 && adxpdi1 < adxndi1 && adxpdi > adxndi) {
            return contracts_1.RECOMMENDATIONS_ENUM.BUY;
        }
        else if (adx > 20 && adxpdi1 > adxndi1 && adxpdi < adxndi) {
            return contracts_1.RECOMMENDATIONS_ENUM.SELL;
        }
        return contracts_1.RECOMMENDATIONS_ENUM.NEUTRAL;
    }
    static AO(ao, ao1) {
        if ((ao > 0 && ao1 < 0) || (ao > 0 && ao1 > 0 && ao > ao1)) {
            return contracts_1.RECOMMENDATIONS_ENUM.BUY;
        }
        else if ((ao < 0 && ao1 > 0) || (ao < 0 && ao1 < 0 && ao < ao1)) {
            return contracts_1.RECOMMENDATIONS_ENUM.SELL;
        }
        return contracts_1.RECOMMENDATIONS_ENUM.NEUTRAL;
    }
    static Mom(mom, mom1) {
        if (mom < mom1) {
            return contracts_1.RECOMMENDATIONS_ENUM.SELL;
        }
        else if (mom > mom1) {
            return contracts_1.RECOMMENDATIONS_ENUM.BUY;
        }
        return contracts_1.RECOMMENDATIONS_ENUM.NEUTRAL;
    }
    static MACD(macd, signal) {
        if (macd > signal) {
            return contracts_1.RECOMMENDATIONS_ENUM.BUY;
        }
        else if (macd < signal) {
            return contracts_1.RECOMMENDATIONS_ENUM.SELL;
        }
        return contracts_1.RECOMMENDATIONS_ENUM.NEUTRAL;
    }
    static BBBuy(close, bblower) {
        if (close < bblower) {
            return contracts_1.RECOMMENDATIONS_ENUM.BUY;
        }
        return contracts_1.RECOMMENDATIONS_ENUM.NEUTRAL;
    }
    static BBSell(close, bbupper) {
        if (close > bbupper) {
            return contracts_1.RECOMMENDATIONS_ENUM.SELL;
        }
        return contracts_1.RECOMMENDATIONS_ENUM.NEUTRAL;
    }
    static PSAR(psar, open) {
        if (psar < open) {
            return contracts_1.RECOMMENDATIONS_ENUM.BUY;
        }
        else if (psar > open) {
            return contracts_1.RECOMMENDATIONS_ENUM.SELL;
        }
        return contracts_1.RECOMMENDATIONS_ENUM.NEUTRAL;
    }
    static Recommend(value) {
        if (value >= -1 && value < -0.5) {
            return contracts_1.RECOMMENDATIONS_ENUM.STRONG_SELL;
        }
        else if (value >= -0.5 && value < 0) {
            return contracts_1.RECOMMENDATIONS_ENUM.SELL;
        }
        else if (value == 0) {
            return contracts_1.RECOMMENDATIONS_ENUM.NEUTRAL;
        }
        else if (value > 0 && value <= 0.5) {
            return contracts_1.RECOMMENDATIONS_ENUM.BUY;
        }
        else if (value > 0.5 && value <= 1) {
            return contracts_1.RECOMMENDATIONS_ENUM.STRONG_BUY;
        }
        return contracts_1.RECOMMENDATIONS_ENUM.ERROR;
    }
    static Simple(value) {
        if (value == -1) {
            return contracts_1.RECOMMENDATIONS_ENUM.SELL;
        }
        else if (value == 1) {
            return contracts_1.RECOMMENDATIONS_ENUM.BUY;
        }
        return contracts_1.RECOMMENDATIONS_ENUM.NEUTRAL;
    }
}
//# sourceMappingURL=reponseParser.js.map