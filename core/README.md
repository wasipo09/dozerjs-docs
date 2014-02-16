# DozerJS Core

The core of Dozer is a series of controllers which work to link and initialize
all the working peices of the application. At a ground level this includes the
basic setup of Express and Node configuration. It then extends to load the
API, controllers, models, components and adapters.

## The `/config.js` File

The config file is very obvious in its nature; it contains the configuration for
the application including the environment settings, data source adapter specifications,
basic security configuration and validation specification.

## The `/index.js` Controller

This file is the backbone of the application in its running state. It loads the
neccesary dependencies and builds the `modules` object which contains the objects
used throughout the application. It then starts the application and starts the
output of information/logging.

## The `/lib/modules.js` Controller

This file is instrumental in building the structure and linkage throughout the
application. Simply put, on startup this file is used to load all of the files
required. As it loads them, the scripts become available as properties/methods
of the `modules.js` script, accessible throughout the application.

## Other `/lib/` Files

The remaining files in the `/lib/` directory are utilized (once loaded) to control
their corresponding functions throughout the applications.