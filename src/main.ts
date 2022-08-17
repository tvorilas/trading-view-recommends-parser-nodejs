import {
  REQUEST_INDICATORS,
  INTERVALS_ENUM,
  INTERVALS_SCHEMA,
} from './contracts';
import { ParseTAResponse } from './reponseParser';
const SCAN_URL = 'https://scanner.tradingview.com/';
import Axios from 'axios';

function getData(symbol: string, interval: INTERVALS_ENUM) {
  const preparedInterval = INTERVALS_SCHEMA?.[interval] || '';
  return {
    symbols: { tickers: [symbol.toUpperCase()], query: { types: [] } },
    columns: REQUEST_INDICATORS.map((i) => i.replace('{}', preparedInterval)),
  };
}

export class TradingViewScan {
  constructor(
    public screener: string,
    public exchange: string,
    public symbol: string,
    public interval: INTERVALS_ENUM,
    private axiosInstance: typeof Axios = Axios,
  ) {}
  public async analyze() {
    this.validateExchange();
    this.validateScreener();
    this.validateSymbol();

    return await this._makeRequest();
  }

  public async _makeRequest() {
    const exch_smbl = `${this.exchange.toUpperCase()}:${this.symbol.toUpperCase()}`;
    const reqData = getData(exch_smbl, this.interval);
    try {
      const { data } = await this.axiosInstance.post(
        `${SCAN_URL}${this.screener.toLowerCase()}/scan`,
        reqData,
      );
      const result = new ParseTAResponse(data).parse();

      return {
        screener: this.screener,
        exchange: this.exchange,
        symbol: this.symbol,
        interval: this.interval,
        time: new Date().toDateString(),
        ...result,
      };
      return result;
    } catch (error) {
      throw error;
    }
  }
  public async validateExchange() {
  }
  public async validateScreener() {
  }
  public async validateSymbol() {
  }
}
