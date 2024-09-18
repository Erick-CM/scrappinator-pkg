import { Goto } from '../interfaces/scrapper';

// interface ScrapperPage {
//     goto<T extends Goto>(params: T): void;
// }

export interface ScrapperLib {
    name: string;
    version: string;
    // page: Partial<ScrapperPage> | null;
    // config: any; // ConfigOptions interface
    goto<T extends Goto>(params: T): void;
    waitFor(selector: string, options?: any): void;
    fill(selector: string, value: string, options?: any): void;
}

export class Scrappinator<T extends ScrapperLib> {
    scrapper: T | null = null;

    constructor(tech: T) {
        this.scrapper = tech;
    }
}