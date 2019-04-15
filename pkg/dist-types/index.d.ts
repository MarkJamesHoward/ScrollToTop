import { LitElement } from "lit-element";
import "@polymer/paper-toast";
/**
 * scroll to top
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
export declare class ScrollToTop extends LitElement {
    enabledMe: Boolean;
    activatewhen: Number;
    showToast: Boolean;
    render(): import("lit-element/node_modules/lit-html/lib/template-result").TemplateResult;
    firstUpdated(): void;
    scrollFunction(): void;
    topFunction(): void;
}
