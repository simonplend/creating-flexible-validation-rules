# Creating flexible validation rules in Node.js

> *Part of the [Node Validation Essentials](https://www.nodevalidationessentials.com/) workshop series by [Simon Plenderleith](https://simonplend.com).*

## How to use this project

### Run in your browser with StackBlitz

- [Open this project in your browser](https://stackblitz.com/github/simonplend/creating-flexible-validation-rules)
- Run any of the [examples](#examples) below

*Note: Currently only works in Chrome, Edge or Brave browsers.*

### Set it up locally

- `git clone` this repository
- Run `npm install`
- Run any of the [examples](#examples) below

*Requires Node.js >= v14.13.0 ([how to install](https://nodejs.dev/learn/how-to-install-nodejs)).*

### Dependencies this project uses

- [ajv](https://www.npmjs.com/package/ajv)
- [fluent-json-schema](https://www.npmjs.com/package/fluent-json-schema)

*Defined in [package.json](package.json).*

## Examples

### Validation with JSON Schema and Ajv

Run the code in [example-ajv.js](example-ajv.js):

```
node example-ajv.js
```

### JSON schema generation

Run the code in [example-fluent-json-schema.js](example-fluent-json-schema.js):

```
node example-fluent-json-schema.js
```

## Ready for a challenge?

The `iceCreamData` object in [example-ajv.js](example-ajv.js) fails validation
against the JSON schema we've defined (`iceCreamSchema`).

**Challenge:** Change the schema so the `stock` property allows for
a value which is either an `integer` *or* `null`.

A couple of rules:

- You can only use the Understanding JSON Schema [page on the `type` keyword](https://json-schema.org/understanding-json-schema/reference/type.html) as a reference — it contains all the information you need for this challenge.
<!-- Wayback Machine snapshot: https://web.archive.org/web/20211105133308/https://json-schema.org/understanding-json-schema/reference/type.html -->
- You can't change the data in the `iceCreamData` object.

When you run the script and see the message:

> The ice cream data is valid! 🍨

...you've completed the challenge.

Good luck!

## License

This project is licensed under the [MIT License](LICENSE.md).
