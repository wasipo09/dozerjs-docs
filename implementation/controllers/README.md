# Working with Controllers

As with other MVC-style applications, the core of the application is the controllers.
Understanding the parts of the controller, and what's available, makes it simple
to build functionality.

With DozerJS, the controllers have access to much of the rest of the application,
giving the ability to easily construct, and interact with, components, adapters,
data, and other controllers as needed.

The controller itself is developed as a (relatively) simple object, and DozerJS
initializes this to provide access without needing to manually build this out.

The structure of the controller object (at runtime) contains:

```javascript
controller.config            // access to the global config
controller.modules           // access to modules
  > modules.lib              // lib modules for core
  > modules.components       // all components
  > modules.adapters         // all adapters
  > modules.api              // API modules
  > modules.controllers      // Controller modules
  > modules.models           // Models
controller.data              // Data interaction
  > data.{MODEL}             // Data instance (as specified in data property)
    > data.{MODEL}.validate  // Validation on specific model
    > data.{MODEL}.{METHODS} // Any methods provided by the adapter for data source
controller.sockets           // Sockets
  > sockets.{NAMESPACE}      // Specific socket namespace, includes methods like .on() and .emit()
```

In addition to the above, of course all methods defined natively are accessible
throughout the controller.

## Applying External Modules

Just like any other Node module, the `require()` statement can be used to tie in
any additional libraries/modules needed, though it is recommended these be added
through components so they are centralized and available throughout, with any common
methods defines in the component itself.