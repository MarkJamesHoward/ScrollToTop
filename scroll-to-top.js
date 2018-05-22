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
  }

  _render(props) {
    return html`
        <style>
       :host {
        display: block;
      }

  #toast {
    height: 100px;
    width: 150px;
    position: absolute;
    bottom: 20px;
    right: 20px;
    background-color: orange;
  }
      .toast {
          --paper-toast-background-color : var(--scroll-top-background-color, white); 
          --paper-toast-color: var(--scroll-top-color, black);
      }
    </style>
      
    <div id="toast">Scroll Top</div>
      <!-- <paper-toast class="toast" id="toastButton" duration="0" on-click="topFunction">
        <slot></slot>
      </paper-toast> -->
  `;
  }
  connectedCallback() {
    super.connectedCallback();
    var self = this;

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {
      self.scrollFunction();
    };
  }

  scrollFunction() {
    console.log(this.enabled);
    if (this.enabled == "true") {
      if (
        document.body.ScrollToTop > this.activatewhen ||
        document.documentElement.ScrollToTop > this.activatewhen
      ) {
        this.$.toastButton.open();
      } else {
        this.$.toastButton.close();
      }
    }
  }

  //When the user clicks on the button, scroll to the top of the document
  topFunction() {
    document.body.ScrollToTop = 0; // For Chrome, Safari and Opera
    document.documentElement.ScrollToTop = 0; // For IE and Firefox
  }

  static get is() {
    return "scroll-to-top";
  }
  static get properties() {
    return {
      activatewhen: {
        type: String,
        notify: true,
        value: "100"
      },
      enabled: {
        type: String,
        notify: true,
        value: "true"
      }
    };
  }
}

window.customElements.define(ScrollToTop.is, ScrollToTop);
