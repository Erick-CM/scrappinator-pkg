export interface ScrapperLib {
    name: string;
    version: string;
    waitFor(selector: string, options?: any): void;
    fill(selector: string, value: string, options?: any): void;
}
export declare class Scrappinator<T extends ScrapperLib> {
    scrapper: T | null;
    constructor(tech: T);
}
