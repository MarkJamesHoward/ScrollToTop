var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from "lit";
import { property, customElement, state } from "lit/decorators.js";
export var tagName = "scroll-to-top-wc";
var ScrollToTop = /** @class */ (function (_super) {
    __extends(ScrollToTop, _super);
    function ScrollToTop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.activatewhen = 200;
        _this.showToast = false;
        _this.fancy = false;
        return _this;
    }
    ScrollToTop.prototype.render = function () {
        return html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      <style>\n        :host {\n          position: fixed;\n          bottom: 20px;\n          display: block;\n        }\n\n        .showToast {\n          opacity: 0.9;\n          //transition: 1s all ease-in-out;\n        }\n\n        .hideToast {\n          visibility: hidden;\n          transform: rotateY(90deg);\n          //transition: 1s all ease-in-out;\n          opacity: 0;\n        }\n\n        .fancy {\n          transition: 1s all ease-in-out;\n        }\n\n        .FlipContainer {\n          perspective: 800px;\n        }\n\n        .card {\n          transform-style: preserve-3d;\n        }\n\n        .showToast,\n        .hideToast {\n          background-color: var(--scroll-top-background-color, white);\n          color: var(--scroll-top-color, black);\n          cursor: pointer;\n          padding: 1rem;\n          border-radius: 1rem;\n          border: 1px solid black;\n        }\n      </style>\n\n      <div class=\"FlipContainer\">\n        <div class=\"card\">\n          <div\n            part=\"container\"\n            class=\"", " +\n            ", " \"\n            @click=\"", "\"\n          >\n            <slot name=\"text\">Top</slot>\n          </div>\n        </div>\n      </div>\n    "], ["\n      <style>\n        :host {\n          position: fixed;\n          bottom: 20px;\n          display: block;\n        }\n\n        .showToast {\n          opacity: 0.9;\n          //transition: 1s all ease-in-out;\n        }\n\n        .hideToast {\n          visibility: hidden;\n          transform: rotateY(90deg);\n          //transition: 1s all ease-in-out;\n          opacity: 0;\n        }\n\n        .fancy {\n          transition: 1s all ease-in-out;\n        }\n\n        .FlipContainer {\n          perspective: 800px;\n        }\n\n        .card {\n          transform-style: preserve-3d;\n        }\n\n        .showToast,\n        .hideToast {\n          background-color: var(--scroll-top-background-color, white);\n          color: var(--scroll-top-color, black);\n          cursor: pointer;\n          padding: 1rem;\n          border-radius: 1rem;\n          border: 1px solid black;\n        }\n      </style>\n\n      <div class=\"FlipContainer\">\n        <div class=\"card\">\n          <div\n            part=\"container\"\n            class=\"", " +\n            ", " \"\n            @click=\"", "\"\n          >\n            <slot name=\"text\">Top</slot>\n          </div>\n        </div>\n      </div>\n    "])), this.showToast ? "showToast " : "hideToast ", this.fancy ? " fancy" : " ", this.topFunction);
    };
    ScrollToTop.prototype.firstUpdated = function () {
        // When the user scrolls down XXpx from the top of the document, show the button
        window.onscroll = this.scrollFunction.bind(this);
    };
    ScrollToTop.prototype.scrollFunction = function () {
        if (document.body.scrollTop > this.activatewhen ||
            document.documentElement.scrollTop > this.activatewhen) {
            // console.log("time to show the toast!");
            this.showToast = true;
        }
        else {
            // console.log("not showing the toast ");
            this.showToast = false;
        }
    };
    //When the user clicks on the button, scroll to the top of the document
    ScrollToTop.prototype.topFunction = function () {
        //console.log("scroll-to-top-wc: initiating scroll");
        var event = new CustomEvent("scrolling", {
            detail: {
                message: "activated scroll to top",
            },
            bubbles: true,
            composed: true,
        });
        this.dispatchEvent(event);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    __decorate([
        property()
    ], ScrollToTop.prototype, "activatewhen", void 0);
    __decorate([
        state()
    ], ScrollToTop.prototype, "showToast", void 0);
    __decorate([
        property({ type: Boolean })
    ], ScrollToTop.prototype, "fancy", void 0);
    ScrollToTop = __decorate([
        customElement("scroll-to-top-wc")
    ], ScrollToTop);
    return ScrollToTop;
}(LitElement));
export { ScrollToTop };
var templateObject_1;
