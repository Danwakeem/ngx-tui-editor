export declare class TuiService {
    editor: any;
    defaultId: string;
    constructor();
    createEditor(options: any): any;
    getMarkdown(id?: string): string;
    getHtml(id?: string): string;
    getSelectedText(id?: string): string;
    insertText(text: string, id?: string): void;
    setHtml(text: string, id?: string): void;
    setMarkdown(text: string, id?: string): void;
    hide(id?: string): any;
    show(id?: string): any;
}
