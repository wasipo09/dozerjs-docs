# Components

Components in DozerJS are similar to adapters, allowing interaction with internal
or external sources and/or providing expanded functionality. The primary difference
between adapters and components is the extent to which they are utilized by the
core. Components are objects which are loaded independently and intended to
promote centraliztion and code-reuse.

As such, components can take on numerous roles; middleware, security handlers,
common functions, etc.

## Custom Middleware

To allow for simple integration of custom Express middleware, components can be
specified in the `/config.js` file in the `middleware` array. These components are
then applied via `app.use()` on application startup.