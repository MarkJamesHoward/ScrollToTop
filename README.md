# \<scroll-to-top-wc\>

This Web Component scrolls the page to the top upon clicking the toast notification. The notification will display once a certain scroll depth is reached and remain visible from this point onwards. For very long pages this is a quick shorcut to the top of the page rather than having to use the scroll bar which can be cumbersome.

## Install with

```
npm i scroll-to-top-wc
```

## Import using the below syntax:

```
import "scroll-to-top-wc";
```

## Then add the element to your page as below:

```
<scroll-to-top-wc></scroll-to-top-wc>
```

### Activate When

Use the activatewhen property to determine when the toast notification is shown. This value is in pixels and by default is set to 200. The below will mean we need to scroll down twice as far before the toast notification is shown

```
<scroll-to-top-wc activatewhen="400"></scroll-to-top-wc>
```

### Customize Display Text

The text displayed by the toast notification can be customised using light DOM nodes as below. Note that we need to specify SLOT='TEXT' for the node that will display the text on the toast notification

```
<scroll-to-top-wc>
  <div slot="text">Move this to the top3</div>
</scroll-to-top-wc>
```

### Smooth Scrolling:

In order for the page to scroll to the top in a smooth fasion you _may_ need to apply the below CSS to the document body:

```
scroll-behavior: smooth;
```

This works automatically in Chrome so no need to add!

### Styling

The component can be styled using CSS Shadow Parts. The part 'container' can be selected to allow any CSS to be applied as shown in the below example:

```
 scroll-to-top-wc::part(container) {
        background: blue;
        border: 5px solid black;
      }
```

For browsers that do not support CSS Shadow Parts, the below CSS Custom Properties can be set to style a limited part of the component:

```
--scroll-top-background-color
--scroll-top-color
```

### Fancy Mode!

We can enable the toast that is shown to be a 3D flip card by adding the 'fancy' attribute as below:

```
<scroll-to-top-wc fancy></scroll-to-top-wc>
```

### Events

At the point of initiating the scroll of the page the component with emit a 'scrolling' event which can be hooked into
in order to provide an visual feeback that is required.

```
window.addEventListener('onscrolling', (e) => {
// add your code here as desired
})
```


### Testing

Run the below it order to open the demo page. This will run the typescript compiler and then use the parcel bundler to open the page
```
npm run dev
````

