// Controller Object
// The controller provides the main functionality for API endpoints,
// interaction with data, components and request/response handling.
module.exports = {

  // Any initialization functionality
  // Runs on startup when the controller is loaded
  init: function () {
    //...
  },

  // Define data tables/stores (and models) to access
  // These should correspond with the models available
  data: [ '{{model}}' ],

  // Define any socket namespaces to use (no slash required)
  // These need to correspond to models if using validation, otherwise
  // they can be created as needed to be utilized by the client
  sockets: [ '{{model}}' ],

  // Sample method:

  // Any models called by API's will have the req, res arguments available

  // getRecord: function (req, res) {
  //   // Example validation
  //   this.data.MODEL.validate(req.body, function (err, failures) {
  //     if (err) {
  //       res.send(400, { 'validation errors': failures });
  //     } else {
  //       res.send(200, { 'status': 'success' });
  //     }
  //   });
  //
  //   // Example data interaction
  //   this.data.MODEL.find({ _id: req.params[0] }, function (err, data) {
  //     if (err) {
  //       res.send(404, { 'status': 'error' });
  //     } else {
  //       res.send(200, { 'status': 'success', 'data': data });
  //     }
  //   });
  // }

  // Default Methods
  // These are generated as handlers for API requests

  // Get (GET)
  {{getMethod}}: function (req, res) {

  },

  // Create (POST)
  {{createMethod}}: function (req, res) {

  },

  // Update (PUT)
  {{updateMethod}}: function (req, res) {

  },

  // Delete (DELETE)
  {{deleteMethod}}: function (req, res) {

  }

};