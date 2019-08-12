import { LitElement } from "lit-element";
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
    render(): import("lit-element").TemplateResult;
    firstUpdated(): void;
    scrollFunction(): void;
    topFunction(): void;
}
