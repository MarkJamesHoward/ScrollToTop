import {
  property,
  LitElement,
  html,
  customElement
  //@ts-ignore
} from "../web_modules/lit-element.js";

/**
 * scroll to top
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
@customElement("scroll-to-top-wc")
export class ScrollToTop extends LitElement {
  @property()
  activatewhen: Number = 200;

  @property()
  showToast: Boolean = false;

  render() {
    return html`
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

        .toast {
          --paper-toast-background-color: var(
            --scroll-top-background-color,
            white
          );
          --paper-toast-color: var(--scroll-top-color, black);
        }

        .blue {
          background-color: blue;
        }

        .green {
          background-color: green;
        }

        .showToast {
          display: block;
        }

        .hideToast {
          display: none;
        }

        .showToast,
        .hideToast {
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
        style="background: purple;"
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
    if (
      document.body.scrollTop > this.activatewhen ||
      document.documentElement.scrollTop > this.activatewhen
    ) {
      //console.log("time to show the toast!");
      this.showToast = true;
    } else {
      // console.log("not showing the toast ");
      this.showToast = false;
    }
  }

  //When the user clicks on the button, scroll to the top of the document
  topFunction() {
    console.log("called top function");
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
  }
}
