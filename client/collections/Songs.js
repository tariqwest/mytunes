// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  url: 'http://parse.sfm6.hackreactor.com/mytunes/classes/songs',

  initialize: function() {
  	this.fetch({
  		success: function(collection, response){
  			console.log(response.results);
        collection.fetched();
  		},
  		error: console.log('fetch error')
  	});
  },

  // Parse returns the part of the response used to build collection
  parse: function(response){
  	return response.results;
  },

  fetched: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('fetch', this);
  }

});
