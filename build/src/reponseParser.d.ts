import { TV_REPONSE_INTERFACE, TV_REPONSE_D_TYPE } from './contracts';
export declare class ParseTAResponse {
    values: TV_REPONSE_D_TYPE;
    constructor(indicatorValues: TV_REPONSE_INTERFACE);
    private ifNullNotIn;
    parse(): {
        oscillators: {};
        moving_averages: {};
        summary: {};
        indicators: {};
    };
}
