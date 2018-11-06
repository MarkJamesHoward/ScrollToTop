import {
  property,
  LitElement,
  html,
  customElement
} from "@polymer/lit-element";
import "@polymer/paper-toast";

/**
 * scroll to top
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
@customElement("scroll-to-top" as any)
class ScrollToTop extends LitElement {
  @property()
  enabledMe: Boolean = true;

  @property()
  activatewhen: Number = 200;

  @property()
  showToast: Boolean = false;

  render() {
    return html`
        <style>
          :host {
            display: block;
          }
        
          .hideToast {
            display: none;
            opacity: 0;
          }
        
          .showToast {
            opacity: 0.9
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
            display:flex;
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

          <div>Some Stuff</div>
        <div class=${this.showToast ? "blue" : "green"}>Highlight this!</div>
                      
        <paper-toast ?opened=${
          this.showToast
        } class="toast" duration="0" @click="${this.topFunction}">
          <slot>Scroll To Top</slot>
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
      if (
        document.body.scrollTop > this.activatewhen ||
        document.documentElement.scrollTop > this.activatewhen
      ) {
        // console.log("time to show the toast!");
        this.showToast = true;
      } else {
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
}
