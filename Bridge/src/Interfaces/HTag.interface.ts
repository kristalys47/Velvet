export interface IHTag {
    setText: (text: string) => void;
    getText: () => Promise<string>;
}