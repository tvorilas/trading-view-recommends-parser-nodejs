import {
  EXCHANGES_ENUM,
  INTERVALS_ENUM,
  SCREENERS_ENUM,
} from '../src/contracts';
import { TradingViewScan } from '../src/main';
// import axios from 'axios';
// import { promises as fs } from 'fs';
describe('response parser', () => {
  it('delays the greeting by 2 seconds', async () => {
    const result = await new TradingViewScan(
      SCREENERS_ENUM['crypto'],
      EXCHANGES_ENUM['BINANCE'],
      'BNBBUSD',
      INTERVALS_ENUM['1m'],
    ).analyze();
    console.log(result);
    // await fs.writeFile('result.json', JSON.stringify(result, null, 2));

    //reference https://github.com/reg2005/tradingview-ta-docker
    // const { data } = await axios.get(
    //   'http://localhost:8080/?symbol=BNBBUSD&screener=CRYPTO&exchange=BINANCE&interval=1m',
    // );
    // await fs.writeFile('original.json', JSON.stringify(data.result, null, 2));
    // console.log(data);
  });
});
