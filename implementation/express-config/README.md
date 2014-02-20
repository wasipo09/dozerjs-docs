# Express Config Settings

When the need arises, you can `set` config options for the Express app itself
through the use of the `expressConfig` proptery in the `/config.js` 
[configuration](../configuration) file. This property should be an array of 
sub-arrays which specify name-value pairs for use in the `set(...)` method call 
on the Express app.

For example, in `/config.js`, if the following was set:

```javascript
  expressConfig: [
    ['views', 'public/views'],
    ['view engine', 'jade']
  ],
```

The system would load those and apply them to Express via `app.set()` on load:

```
app.set('views', 'public/views');
app.set('view engine', 'jade');
```
