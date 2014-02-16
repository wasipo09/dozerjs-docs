# API

Files specified in the `/api/` folder are objects which define how the system is
to respond to calls to the REST api. These objects contain a set of top-level
properties which correspond to the HTTP verbs such as `GET`, `POST`, `PUT`, `DELETE`,
etc.

Each of the top-level verb properties contains two sub-properties: `controller` and
`fn`.

The `controller` is used to specify the controller file (sans `.js`) which is to
handle the request and the `fn` denotes the method/function of the controller which
is to be called.

For example, a `/api/users.js` file may include the following for `GET` requests:

```javascript
...
'GET': {
  controller: 'users',
  fn: 'getUsers'
}
...
```