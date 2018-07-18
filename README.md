# svelte-bulma-forms
Bulma form components for [Svelte.js](https://svelte.technology/)

These components offer a convenient way to build HTML forms, either in **Svelte** projects or in **plain JavaScript.**

**Features**

* all form elements as defined in Bulma
* built-in basic input validation, easily extendable
* controls and fields emit events for your app to hook into

#### Demo at http://svelte-bulma-forms.surge.sh/


## Install

`npm install svelte-bulma-forms`

## Use

Import the components you need in your Svelte project.

````javascript
import {
  TextField,
  DateField,
  EmailField
} from 'svelte-bulma-forms/module'

export default {
  components: {
    TextField,
    DateField,
    EmailField,
	...
  }
}
````
And then use them like so:

````html
<TextField name="name" label="Name" horizontal />

<CheckboxGroup horizontal>
  <CheckboxControl name="agree" required>
    I agree to the <a href="#">terms and conditions</a>
  </CheckboxControl>
</CheckboxGroup>

<ButtonField state="info" type="submit" horizontal />
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

### Form fields

**Form fields** are composite components offering the most convenient way to build forms. The following fields are available:

- `AutoCompleteField`
- `ButtonField`
- `DateField`
- `EmailField`
- `FileField`
- `PasswordField`
- `PasswordMaskField`
- `SelectField`
- `TextareaField`
- `TextField`

See [**form fields**](https://github.com/elcobvg/svelte-bulma-forms/tree/master/src/fields)

### Form controls

In cases where you may wish to use **form input fields** by themselves, you can use [**form controls**](https://github.com/elcobvg/svelte-bulma-forms/tree/master/src/controls). The following controls are available:

- `AutoCompleteControl`
- `ButtonControl`
- `CheckboxControl`
- `FileControl`
- `InputControl`
- `MultiSelectControl`
- `RadioControl`
- `SelectControl`
- `TextareaControl`

### Form groups

Controls like **checkboxes** and **radio buttons** need to be grouped together. There is also a group for regular inputs and grouped **buttons**:

- `CheckboxGroup`
- `InputGroup`
- `RadioGroup`

See [**form groups**](https://github.com/elcobvg/svelte-bulma-forms/tree/master/src/groups)

## Further information

### Events
Each input element emits a `change` event with its `value` on input change, which you can use in your app according to your needs.

### Custom input validation
In addition to the built-in default input validation, you can supply your own validation rules and messages. Read all about it in the [**validation documentation**](https://github.com/elcobvg/svelte-bulma-forms/tree/master/src/validation)


## Made with Svelte
It's made with [Svelte](https://svelte.technology/), which means you don't need any JS framework. Just use the file in the `dist` directory in any Javascript project:

**include the bundle:** 

````html
<script src="svelte-bulma-forms/dist/index.js"></script>
````
**create components like so:**

````javascript
const { EmailField } = SvelteBulmaForms

const emailInput = new EmailField({
  target: document.querySelector('#email'),
  data: { 
    name: 'email',
    label: 'Email address',
    horizontal: true
  }
})
````

### Reference

- https://bulma.io/documentation/form/general
- https://svelte.technology/guide
- https://fontawesome.com/v4.7.0/