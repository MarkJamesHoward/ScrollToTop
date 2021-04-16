var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { LitElement, html, property, customElement, } from 'lit-element';
let ScrollToTop = class ScrollToTop extends LitElement {
    constructor() {
        super(...arguments);
        this.activatewhen = 200;
        this.showToast = false;
    }
    render() {
        return html `
      <style>
        :host {
          position: fixed;
          bottom: 20px;
          display: block;
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

        .showToast {
          display: block;
        }

        .hideToast {
          display: none;
        }

        .showToast,
        .hideToast {
          background-color: var(--scroll-top-background-color, white);
          color: var(--scroll-top-color, black);
          cursor: pointer;
          padding: 1rem;
          border-radius: 1rem;
          opacity: 0.9;
        }
      </style>

      <div
        part="container"
        class="${this.showToast ? "showToast" : "hideToast"}"
        @click="${this.topFunction}"
      >
        <slot name="text">Top</slot>
      </div>
    `;
    }
    firstUpdated() {
        // When the user scrolls down XXpx from the top of the document, show the button
        window.onscroll = this.scrollFunction.bind(this);
    }
    scrollFunction() {
        if (document.body.scrollTop > this.activatewhen ||
            document.documentElement.scrollTop > this.activatewhen) {
            //console.log("time to show the toast!");
            this.showToast = true;
        }
        else {
            // console.log("not showing the toast ");
            this.showToast = false;
        }
    }
    //When the user clicks on the button, scroll to the top of the document
    topFunction() {
        console.log("called top function");
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
};
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
