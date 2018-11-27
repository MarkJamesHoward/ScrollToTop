# \<scroll-to-top\>

This Web Component scrolls the page to the top upon clicking the toast notification. The notification will display once a certain scroll depth is reached and remain visible from this point onwards. For very long pages this is a quick shorcut to the top of the page rather than having to use the scroll bar which can be cumbersome.
##Install with

```
npm i scroll-to-top-wc
```

##Import using the below syntax:

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
