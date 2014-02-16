# Models

Models are object representations of the data structure and validation requirements
for any data used within the system.

They are simple structures which are used to ensure that any data accessed is in-line
with the expectations of the data-source and use in the application. They can
be created with a basic object-literal structure.

For example, a `/models/users.js` model may look similar to the following:

```javascript
module.exports = {
  email: 'email',
  name: 'string',
  password: 'string',
  tags: 'array',
  ...
}
```

## Validation

Models are made available to controllers through the `data` property and provide
the controller with a `validate` method.

The validation built into DozerJS supplies basic type validation. It is also easily
customized by providing additional regular expressions in `/config.js` in the
`regEx` object with a basic key-value syntax.