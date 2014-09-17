app.factory('Ticket', function($resource) {
        var Ticket = $resource('https://api.mongolab.com/api/1/databases' +
                '/bugsdemodb/collections/bugscollection/:id',
            {  _id: "@Id" ,apiKey: 'aQulivByDLdq_F1mhTgUSXG4eYLJJ8rs' }, {
                update: { method: 'PUT' }
            }
        );
    
        Ticket.prototype.update = function(cb) {
            return Ticket.update({id: this._id.$oid},
                angular.extend({}, this, {_id:undefined}), cb);
        };
        Ticket.prototype.destroy = function(cb) {
            return Ticket.remove({id: this._id.$oid}, cb);
        };
        return Ticket
    });
