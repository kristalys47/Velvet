export interface IHTag {
    setText: (text: string) => void;
    getText: () => Promise<string>;

    setStyle: (style: string) => void;
}