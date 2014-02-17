# Express Middleware

Due to the importance of Express Middleware in application development, the
[configuration](../configuration) file contains a `middleware` property in the
form of an array which allows easy application of custom middleware.

For example, in `/config.js`, if the following was set:

```javascript
  middleware: [
    'authentication',
    'parser'
  ]
```

The system would load those an apply them to Express via `app.use()` on load.

DozerJS would look for those modules by their names as loaded in the `/components`
directory, and subsequently into the `modules.components` object.