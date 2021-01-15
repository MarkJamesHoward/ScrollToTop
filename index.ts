import {
  LitElement,
  html,
  property, customElement
  //@ts-ignore
} from 'https://cdn.skypack.dev/lit-element';

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
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
