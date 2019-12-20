import { TuiService } from './tui-editor.service';
import { OnInit, ElementRef, EventEmitter } from '@angular/core';
export interface MarkdownData {
    html: string;
    markdown: string;
}
export declare class TuiComponent implements OnInit {
    private editorService;
    editorElement: ElementRef;
    options: object;
    editor: any;
    events: {
        change: any;
        load: any;
        blur: any;
    };
    loaded: EventEmitter<void>;
    onChangeMarkdown: EventEmitter<string>;
    onChangeHTML: EventEmitter<string>;
    onChange: EventEmitter<MarkdownData>;
    onBlurMarkdown: EventEmitter<string>;
    onBlurHTML: EventEmitter<string>;
    onBlur: EventEmitter<MarkdownData>;
    constructor(editorService: TuiService);
    ngOnInit(): void;
    getEditor(): Promise<void>;
    loadedEditor(): void;
    changed(): void;
    blur(): void;
}
