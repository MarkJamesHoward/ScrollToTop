import { LitElement, html, property, customElement } from 'lit-element';
import '@polymer/paper-toast';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * scroll to top
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
let ScrollToTop = class ScrollToTop extends LitElement {
    /**
     * scroll to top
     *
     * @customElement
     * @polymer
     * @demo demo/index.html
     */
    constructor() {
        super(...arguments);
        this.enabledMe = true;
        this.activatewhen = 200;
        this.showToast = false;
    }
    render() {
        return html `
      <style>
        paper-toast {
          cursor: pointer;
        }

        :host {
          display: block;
        }

        .hideToast {
          display: none;
          opacity: 0;
        }

        .showToast {
          opacity: 0.9;
        }

        #toast {
          height: 50px;
          width: 100px;
          position: fixed;
          bottom: 20px;
          right: 20px;
          background-color: orange;
          border-radius: 5%;
          transition: 0.5s all ease-in-out;
          z-index: 1000;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        .toast {
          --paper-toast-background-color: var(--scroll-top-background-color, white);
          --paper-toast-color: var(--scroll-top-color, black);
        }

        .blue {
          background-color: blue;
        }

        .green {
          background-color: green;
        }
      </style>

      <paper-toast
        ?opened="${this.showToast}"
        class="toast"
        duration="0"
        @click="${this.topFunction}"
      >
        <slot name="text">Scroll To Top</slot>
      </paper-toast>
    `;
    }
    firstUpdated() {
        // When the user scrolls down XXpx from the top of the document, show the button
        window.onscroll = this.scrollFunction.bind(this);
    }
    scrollFunction() {
        // console.log(`Enabled3 ${this.enabledMe}`);
        if (this.enabledMe === true) {
            // console.log(document.body.scrollTop);
            // console.log(`active when ${this.activatewhen}`);
            if (document.body.scrollTop > this.activatewhen ||
                document.documentElement.scrollTop > this.activatewhen) {
                // console.log("time to show the toast!");
                this.showToast = true;
            }
            else {
                // console.log("not showing the toast ");
                this.showToast = false;
            }
        }
    }
    //When the user clicks on the button, scroll to the top of the document
    topFunction() {
        console.log("called top function");
        document.body.scrollTop = 0; // For Chrome, Safari and Opera
        document.documentElement.scrollTop = 0; // For IE and Firefox
    }
};
__decorate([
    property(),
    __metadata("design:type", Boolean)
], ScrollToTop.prototype, "enabledMe", void 0);
__decorate([
    property(),
    __metadata("design:type", Number)
], ScrollToTop.prototype, "activatewhen", void 0);
__decorate([
    property(),
    __metadata("design:type", Boolean)
], ScrollToTop.prototype, "showToast", void 0);
ScrollToTop = __decorate([
    customElement("scroll-to-top-wc")
], ScrollToTop);

export { ScrollToTop };
//# sourceMappingURL=index.js.map
