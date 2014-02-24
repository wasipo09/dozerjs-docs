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

## Advanced Routing

In order to build children routes, Dozer supports supplying the verb/property with
an array. For example, if working on `/api/users.js` the following could be specified
for `GET`:

```javascript
'GET': [
  // Required, default handler
  {
      path: 'default',
      controller: 'users',
      fn: 'getAllUsers'
  },
  // Check for :id param (1)
  {
      path: ':id',
      controller: 'users',
      fn: 'getUser'
  },
  // Check for login with :id and :pass (2)
  {
    path: 'login/:id/:pass',
    controller: 'users',
    fn: 'loginUser'
  }
]
```

You **MUST** provide a `default` path which (in this example) would match `/api/users/`.

The two additional objects

1. How you could specify a `/api/users/:id/` route which would call the `getUser` method of the `users` controller
2. How you could specify a `/api/users/login/:id/:pass` which would call the `loginUser` method of the `users` controller

The parameters of the routes are available in `req.params.NAME` in the method
called on the controller.

*Note: The format of pathing currently only supports `:VAR` formatting, and does not
yet support Regex or other matching formats.
