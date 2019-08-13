# \<scroll-to-top\>

This Web Component scrolls the page to the top upon clicking the toast notification. The notification will display once a certain scroll depth is reached and remain visible from this point onwards. For very long pages this is a quick shorcut to the top of the page rather than having to use the scroll bar which can be cumbersome.

###Install with

```
npm i scroll-to-top-wc
```

###Import using the below syntax:

```
import { ScrollToTop } from "scroll-to-top-wc";
```

###Then add the element to your page as below:

```
<scroll-to-top></scroll-to-top>
```

Use the activatewhen property to determine when the toast notification is shown. This value is in pixels and by default is set to 200. The below will mean we need to scroll down twice as far before the toast notification is shown

```
<scroll-to-top activatewhen="400"></scroll-to-top>
```

The text displayed by the toast notification can be customised using light DOM nodes as below:

```
<scroll-to-top>
  <div slot="text">Move this to the top3</div>
</scroll-to-top>
```

Smooth Scrolling:
In order for the page to scroll to the top in a smooth fasion you will need to apply the below CSS to the document body:
```
scroll-behavior: smooth;
```

Package Creation:
This package was created using [@Pika/Pack](https://www.pika.dev/blog/introducing-pika-pack/)which allows us to publish both an ES5 compatible bundle for use in older projects, and also an ES6 package that can be used in newer projects that utilze modules.


