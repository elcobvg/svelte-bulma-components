# svelte-bulma-components
Library of UI components to be used in [Svelte.js](https://svelte.technology/) or standalone.

A convenient way to implement [**interactive Bulma components**](https://bulma.io/documentation/components/).

### Available components

- [x] Dropdown
- [x] Modal
- [x] ModalCard
- [x] Navbar
- [x] Pagination
- [x] Tabs

**Demo at http://svelte-bulma-components.surge.sh/**


### Install

`npm install svelte-bulma-components`

### Use

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


## Dropdown

An interactive **dropdown menu** for discoverable content

#### Markup

````html
<Dropdown label="Dropdown">
  <DropdownItem><h5>Dropdown Item</h5>Not clickable</DropdownItem>
  <DropdownDivider />
  <DropdownLink href="/">A dropdown link</DropdownLink>
  <DropdownLink href="/" active>This link is active</DropdownLink>
  <DropdownLink href="/">Another link item</DropdownLink>
</Dropdown>
````
#### Options

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| label | String | '' | true | text of dropdown label
| hoverable | Boolean | false | false | open menu on hover instead of click
| up | Boolean | false | false | popup instead of down
| right | Boolean | false | false | align right 


## Modal

A classic **modal** overlay, in which you can include *any* content you want

#### Markup

````html
<Modal {active} on:close="set({ active: false })">
  <p>
    ...
  </p>
</Modal>
````

## ModalCard

A **modal card**, with a head, a body and a foot. This components emits an `onclose` event when closed with `success` or `cancel` as value.

#### Markup

````html
<ModalCard {active} color="link" on:close="cardClosed(event)">
  <span slot="title">Modal card title</span>
  <span slot="content">
    ...
  </span>
  <span slot="success">Save changes</span>
  <span slot="cancel">Cancel</span>            
</ModalCard>
````
#### Options

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| color | String | success | false | color of the success button

#### Slots

| Slot | Default | Required | Description |
|------|---------|----------|-------------|
| title | - | true | title of the modal dialog
| content | - | true | the content of the modal
| success | Submit | false | label of the **success** button
| cancel | Cancel | false | label of the **cancel** button


## Navbar

A responsive horizontal **navbar** that can support images, links, buttons, and dropdowns

#### Markup

````html
<Navbar>
  <!-- navbar-brand -->
  <span slot="brand">
    <NavbarItem href="#">
      <img src="/images/brand-logo.png" alt="Logo">
    </NavbarItem>
  </span>

  <!-- navbar-start -->
  <NavbarStart>
    <NavbarItem href="#">Documentation</NavbarItem>
    <NavbarItem href="#">Videos</NavbarItem>
    <NavbarItem href="#">...</NavbarItem>
  </NavbarStart>

  <!-- navbar-end -->
  <NavbarEnd>
    <NavbarItem>
      <p class="control">
        <a class="button is-info" href="#">
          <strong>Download</strong>
        </a>
      </p>
    </NavbarItem>
  </NavbarEnd>
</Navbar>
````
#### Options

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| fixedTop | Boolean | false | false | fixes navbar to top of page
| fixedBottom | Boolean | false | false | fixes navbar to bottom
| color | String | - | false | background color of the navbar
| transparent | Boolean | false | false | sets navbar transparency
| noBodyClass | Boolean | false | false | do not add classes to `<body>` 


## Pagination

A responsive, usable, and flexible **pagination** component.

The pagination component emits an `onchange` event with the <strong>selected page number</strong>.

#### Markup

````html
<Pagination current="10" total="20" show="5" on:change="gotoPage(event)" />
````
#### Options

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| current | Number | 1 | false | the currently active page number
| total | Number | - | true | total number of pages
| show | Number | 5 | false | how many page link buttons to show
| transparent | Boolean | false | false | sets navbar transparency
| align | String | - | false | align centered or right
| rounded | Boolean | false | false | rounded buttons
| size | String | - | false | sets size of pagination component
| previous | String | Previous | false | set label text for previous button
| next | String | Next page | false | set label text for next button


## Tabs

Simple responsive horizontal navigation **tabs**, with different styles.

Tab items emit an `onclick` event with the `#id` of the selected tab.

#### Markup

````html
<TabsContainer align="centered" boxed>
  <TabItem active label="Pictures" icon="fa fa-image" on:click="setTab(event)" />
  <TabItem label="Music" on:click="setTab(event)" />
  <TabItem label="Videos" on:click="setTab(event)" />
  <TabItem label="Documents" on:click="setTab(event)" />
</TabsContainer>
````
#### Options

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| align | String | - | false | align centered or right
| boxed | Boolean | false | false | classical, boxed tabs
| size | String | - | false | sets size of pagination component
| toggle | Boolean | false | false | toggle button like tabs
| rounded | Boolean | false | false | rounded, can be used with `toggle`
| fullWidth | Boolean | false | false | consume whole width available

#### Slots

| Slot | Default | Required | Description |
|------|---------|----------|-------------|
| default | - | true | set of `<TabItem>` tabs

## Made with Svelte
It's made with [Svelte](https://svelte.technology/), which means you don't need any JS framework. Just use the file in the `dist` directory in any Javascript project.

### See also

- https://www.npmjs.com/package/svelte-bulma-forms Bulma form components for Svelte
- https://www.npmjs.com/package/svelte-autocomplete a lightweight autocomplete component made with Svelte

### Reference

- https://bulma.io/documentation/components/
- https://svelte.technology/guide
