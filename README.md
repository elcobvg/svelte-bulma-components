# svelte-bulma-components
Library of UI components to be used in [Svelte.js](https://svelte.technology/) or standalone.

A convenient way to implement [**interactive Bulma components**](https://bulma.io/documentation/components/).

### Status
Note that this is still **a work in progress**:

- [x] Dropdown
- [x] Modal
- [x] ModalCard
- [x] Navbar
- [ ] Pagination
- [ ] Tabs


**Demo at http://svelte-bulma-components.surge.sh/**


## Install

`npm install svelte-bulma-components`

## Use

Import the components you need in your Svelte project.

````javascript
import {
  Dropdown,
  DropdownLink,
  Modal
} from 'svelte-bulma-components/module'

export default {
  components: {
    Dropdown,
    DropdownLink,
    Modal,
	...
  }
}
````
And then use them like so:

````html
  <Dropdown label="Dropdown">
    <DropdownLink href="/">A dropdown link</DropdownLink>
    <DropdownLink href="/" active>This link is active</DropdownLink>
    <DropdownLink href="/">Another link item</DropdownLink>
  </Dropdown>
````
**Don't forget to include the Bulma and Font Awesome CSS files!**

For including styles, you can either place the below styles in the `<head>` of your template:

````html
<link href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
````

Or you can import them to your webpack/rollup entry point:

````javascript
require('/path/to/node_modules/bulma/css/bulma.min.css')
require('/path/to/node_modules/font-awesome/css/font-awesome.min.css')
````

**Note that you'll have to install** `bulma` **and** `font-awesome` **first**

## Available elements

### Dropdown

An interactive **dropdown menu** for discoverable content

### Modal

A classic **modal** overlay, in which you can include *any* content you want

### ModalCard

A **modal card**, with a head, a body and a foot

### Navbar

A responsive horizontal **navbar** that can support images, links, buttons, and dropdowns

### Pagination

A responsive, usable, and flexible **pagination**

### Tabs

Simple responsive horizontal navigation **tabs**, with different styles

## Made with Svelte
It's made with [Svelte](https://svelte.technology/), which means you don't need any JS framework. Just use the file in the `dist` directory in any Javascript project.

### Reference

- https://bulma.io/documentation/components/
- https://svelte.technology/guide
