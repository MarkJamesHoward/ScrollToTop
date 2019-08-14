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

In order for the page to scroll to the top in a smooth fasion you will need to apply the below CSS to the document body:

```
scroll-behavior: smooth;
```

### Package Creation:

This package was created using [@Pika/Pack](https://www.pika.dev/blog/introducing-pika-pack/). So we have an unbundled ES2018 and Web optimised versions in the repository. Within the package.json there is a 'module' entry that points to the web optimsed version which should be picked up by bundlers such as Rollup, webpack, parcel etc.
