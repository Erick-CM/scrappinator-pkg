type GotoOptions = {
    referer?: string;
    timeout?: number;
    waitUntil?: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2';
    refererPolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url';
};
type FillOptions = {
    delay?: number;
    force?: boolean;
};
type ClickOptions = FillOptions & {
    clickCount?: number;
    modifiers?: 'Alt' | 'Control' | 'ControlOrMeta' | 'Meta' | 'Shift';
};
type ScreenshotOptions = {
    path?: string;
    quality?: number;
    clip?: boolean;
    fullPage?: boolean;
    fromSurface?: boolean;
    omitBackground?: boolean;
    optimizeForSpeed?: boolean;
    captureBeyondViewport?: boolean;
    encoding?: 'base64' | 'binary';
    type?: 'png' | 'jpeg' | 'webp';
};
interface Selector {
    selector(selector: string): string;
}
export interface Goto {
    url: string;
    options?: GotoOptions;
}
export interface Fill extends Selector {
    options?: FillOptions;
}
export interface Click extends Selector {
    options?: ClickOptions;
}
export interface Select extends Selector {
    options?: ClickOptions;
}
export interface Screenshot extends Selector {
    options?: ScreenshotOptions;
}
export {};
