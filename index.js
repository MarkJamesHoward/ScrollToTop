var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { LitElement, html } from "lit";
import { property, state, customElement } from 'lit/decorators';
let ScrollToTop = class ScrollToTop extends LitElement {
    constructor() {
        super(...arguments);
        this.activatewhen = 200;
        this.showToast = false;
        this.fancy = false;
    }
    render() {
        return html `
      <style>
        :host {
          position: fixed;
          bottom: 20px;
          display: block;
        }

        .showToast {
          opacity: 0.9;
          //transition: 1s all ease-in-out;
        }

        .hideToast {
          visibility: hidden;
          transform: rotateY(90deg);
          //transition: 1s all ease-in-out;
          opacity: 0;
        }

        .fancy {
          transition: 1s all ease-in-out;
        }

        .FlipContainer {
          perspective: 800px;
        }

        .card {
          transform-style: preserve-3d;
        }

        .showToast,
        .hideToast {
          background-color: var(--scroll-top-background-color, white);
          color: var(--scroll-top-color, black);
          cursor: pointer;
          padding: 1rem;
          border-radius: 1rem;
        }
      </style>

      <div class="FlipContainer">
        <div class="card">
          <div
            part="container"
            class="${this.showToast ? "showToast " : "hideToast "} +
            ${this.fancy ? " fancy" : " "} "
            @click="${this.topFunction}"
          >
            <slot name="text">Top</slot>
          </div>
        </div>
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
    state(),
    __metadata("design:type", Boolean)
], ScrollToTop.prototype, "showToast", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], ScrollToTop.prototype, "fancy", void 0);
ScrollToTop = __decorate([
    customElement("scroll-to-top-wc")
], ScrollToTop);
export { ScrollToTop };
