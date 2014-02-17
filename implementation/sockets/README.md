# Sockets (Namespaces)

By default, DozerJS uses [Socket.io's](http://socket.io/) namespacing which, in
addition to multiplexing, allows sockets to be better aligned with the REST API's
endpoint.

For example, if using and endpoint `http://server.com/users/` which responds to
`GET`, `POST`, `PUT`, `DELETE`, etc., namespacing creates a logical linkage for
any information sent over the sockets.

If, in the `/controllers/users.js` the following `sockets` and `data` are defined:

```javascript
...

sockets: [ 'users' ],

data: [ 'users' ],

...
```

Then `PUT` requests which point to the `updateUser` method could easily respond
over the same 'channel':

```javascript
updateUser: function (req, res) {
  this.data.users.update({ _id: req.params[0] }, req.body, function (err, data) {
    // Send data to ALL users via the socket
    this.sockets.users.emit('update', { 'record': data });
    // Send response for request callback/handler
    res.send(200, { 'status': 'success', 'data': data });
  });
}
```

The above would not only update the original request's handler, but also any
connections to the `/users/` namespace on the client-side:

```javascript
var users = io.connect('/users/');
users.on('update', function (data) {
  console.log('Updated: ' + data.record);
});
```