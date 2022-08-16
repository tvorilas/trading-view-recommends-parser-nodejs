export declare const REQUEST_INDICATORS: string[];
export declare enum EXCHANGES_ENUM {
    'NASDAQ' = "NASDAQ",
    'FX_IDC' = "FX_IDC",
    'NYSE' = "NYSE",
    'BINANCE' = "BINANCE",
    'BITTREX' = "BITTREX"
}
export declare enum SCREENERS_ENUM {
    'forex' = "forex",
    'cfd' = "cfd",
    'crypto' = "crypto"
}
export declare enum INTERVALS_ENUM {
    '1m' = "1m",
    '5m' = "5m",
    '15m' = "15m",
    '1h' = "1h",
    '4h' = "4h",
    '1W' = "1W",
    '1M' = "1M"
}
export declare type TV_REPONSE_D_TYPE = (number | null)[];
export interface TV_REPONSE_INTERFACE {
    data: {
        s: string;
        d: TV_REPONSE_D_TYPE;
    }[];
    totalCount: 1;
}
export declare enum RECOMMENDATIONS_ENUM {
    'BUY' = "BUY",
    'STRONG_BUY' = "STRONG_BUY",
    'SELL' = "SELL",
    'STRONG_SELL' = "STRONG_SELL",
    'NEUTRAL' = "NEUTRAL",
    'ERROR' = "ERROR"
}
export declare const INTERVALS_SCHEMA: {
    '1m': string;
    '5m': string;
    '15m': string;
    '1h': string;
    '4h': string;
    '1W': string;
    '1M': string;
};
