import { LitElement, html } from "@polymer/lit-element";

/**
 * `scroll-top-next`
 * scroll to top
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class ScrollToTop extends LitElement {
  constructor() {
    super();

    this.enabled = true;
    this.activatewhen = 100;
  }

  _render(props) {
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
        </style>
        
        <div id="toast" 
        onclick="${event => this.topFunction()}" 
        class$="${
          props.showToast ? "showToast" : "hideToast "
        }">Scroll Top</div>
        
        <!-- <paper-toast class="toast" id="toastButton" duration="0" on-click="topFunction">
                                <slot></slot>
                              </paper-toast> -->
  `;
  }
  connectedCallback() {
    super.connectedCallback();

    //console.log("called connected callback");
    var self = this;

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {
      self.scrollFunction();
    };
  }

  scrollFunction() {
    // console.log(this.enabled);
    if (this.enabled === true) {
      if (
        document.body.scrollTop > this.activatewhen ||
        document.documentElement.scrollTop > this.activatewhen
      ) {
        //console.log("time to show the toast!");
        this.showToast = true;
      } else {
        //console.log("not showing the toast ");
        this.showToast = false;
      }
    }
  }

  //When the user clicks on the button, scroll to the top of the document
  topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
  }

  static get is() {
    return "scroll-to-top";
  }

  static get properties() {
    return {
      activatewhen: {
        type: Number,
        notify: true
      },
      enabled: {
        type: Boolean,
        notify: true
      },
      showToast: Boolean
    };
  }
}

window.customElements.define(ScrollToTop.is, ScrollToTop);
