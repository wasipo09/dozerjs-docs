# Public (Views)

DozerJS is built around the concept of providing a flexible foundation for NodeJS
and Express based back-end services. As such it does not natively provide any
server-side templating engine. The `/public` directory is utilized for serving static
HTTP resources to be utilized with a client-side application.

The `/public` directory utilizes a `src`/`dist` structure by default, allowing
use of tools such as Grunt for building production versions of the client-side
applications.