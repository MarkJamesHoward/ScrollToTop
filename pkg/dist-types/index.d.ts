import { LitElement } from "lit-element.js";
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
    render(): any;
    firstUpdated(): void;
    scrollFunction(): void;
    topFunction(): void;
}