export interface ScrapperLib {
    name: string;
    version: string;
}
export declare class Scrappinator<T extends ScrapperLib> {
    scrapper: T | null;
    constructor(tech: T);
}
