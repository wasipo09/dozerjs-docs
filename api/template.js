// API Object
// Sets the HTTP Request Verbs which are available to the endpoint which
// matches the file name.
// Simply excluding a verb will result in any attempts to make a request
// against that verb recieving a 405 response with available methods listed
// in the header.
module.exports = {

  // Handle GET method
  'GET': {
    controller: '{{controller}}',
    fn: '{{getMethod}}'
  },

  // Handle POST method
  'POST': {
    controller: '{{controller}}',
    fn: '{{createMethod}}'
  },

  // Handle PUT method
  'PUT': {
    controller: '{{controller}}',
    fn: '{{updateMethod}}'
  },

  // Handle DELETE method
  'DELETE': {
    controller: '{{controller}}',
    fn: '{{deleteMethod}}'
  }
};