# Configuration

DozerJS loads the `/config.js` by default on startup. This file is a simple object
that can be used for both system and custom configuration variables.

The goal of this file is to maintain a simple config that can be accessed throughout
the application. Things like environment, data adapters, logging settings, and
special instructions like custom middleware can be controlled here.

## Production

Instead of setting production-specific variables within the `/config.js` file,
these settings can be overwritten by specifying production configurations in the
`/config.prod.js` file. The system determines run mode through `NODE_ENV`, which
can be set via:

`NODE_ENV=production node index.js`

or by running the [npm client] with `prod` or `production` after `dozerjs start`.

Any properties in `/config.prod.js` will override the default `/config.js` settings,
and any not in the `/config.js` will be avialable.

## Validation

In addition to system configuration, the config file includes a `regEx` object which
is a key-value pairing of the validation type names and associated regular expressions
used by the validation lib for verifying data against models.