import { LitElement, html, property, customElement } from 'lit-element';
import '@polymer/paper-toast';

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _templateObject() {
  const data = _taggedTemplateLiteral(["\n      <style>\n        paper-toast {\n          cursor: pointer;\n        }\n\n        :host {\n          display: block;\n        }\n\n        .hideToast {\n          display: none;\n          opacity: 0;\n        }\n\n        .showToast {\n          opacity: 0.9;\n        }\n\n        #toast {\n          height: 50px;\n          width: 100px;\n          position: fixed;\n          bottom: 20px;\n          right: 20px;\n          background-color: orange;\n          border-radius: 5%;\n          transition: 0.5s all ease-in-out;\n          z-index: 1000;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          cursor: pointer;\n        }\n\n        .toast {\n          --paper-toast-background-color: var(--scroll-top-background-color, white);\n          --paper-toast-color: var(--scroll-top-color, black);\n        }\n\n        .blue {\n          background-color: blue;\n        }\n\n        .green {\n          background-color: green;\n        }\n      </style>\n\n      <paper-toast\n        ?opened=\"", "\"\n        class=\"toast\"\n        duration=\"0\"\n        @click=\"", "\"\n      >\n        <slot name=\"text\">Scroll To Top</slot>\n      </paper-toast>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = undefined && undefined.__metadata || function (k, v) {
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
    return html(_templateObject(), this.showToast, this.topFunction);
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
      if (document.body.scrollTop > this.activatewhen || document.documentElement.scrollTop > this.activatewhen) {
        // console.log("time to show the toast!");
        this.showToast = true;
      } else {
        // console.log("not showing the toast ");
        this.showToast = false;
      }
    }
  } //When the user clicks on the button, scroll to the top of the document


  topFunction() {
    console.log("called top function");
    document.body.scrollTop = 0; // For Chrome, Safari and Opera

    document.documentElement.scrollTop = 0; // For IE and Firefox
  }

};

__decorate([property(), __metadata("design:type", Boolean)], ScrollToTop.prototype, "enabledMe", void 0);

__decorate([property(), __metadata("design:type", Number)], ScrollToTop.prototype, "activatewhen", void 0);

__decorate([property(), __metadata("design:type", Boolean)], ScrollToTop.prototype, "showToast", void 0);

ScrollToTop = __decorate([customElement("scroll-to-top")], ScrollToTop);

export { ScrollToTop };
