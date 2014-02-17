# NPM Command Line Client

DozerJS has an [npm available](https://www.npmjs.org/package/dozerjs) to make
creating new instances simple. To get started install the npm globally:

`npm install dozerjs -g`

## Create Project Instance

To create a new instance of DozerJS use:

`dozerjs create ProjectName`

The above will build the folder `./ProjectName` and populate it with the DozerJS
foundational framework.

## Generate Assets

The command tool also allows you to generate an API, Model, Controller set. You
must currently be in the root of a DozerJS project, then use:

`dozerjs generate EndpointName`

The above will create:

* `/api/EndpointName.js`
* `/models/EndpointName.js`
* `/controllers/EndpointName.js`

All of the above will have a basic structure including controller methods linked
to the API requests.

## Running DozerJS

The command tool can be used to easily run the DozerJS service. You
must currently be in the root of a DozerJS project, then use:

`dozerjs start`

Which will start the DozerJS service in development mode.

The process can also run the production environment mode by specifying either
`prod` or `production` after the command:

`dozerjs start prod`

Which would run with production configuration in place.