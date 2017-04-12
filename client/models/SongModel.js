// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  defaults: {
    playCount: 0
  },

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
    this.incrementPlayCount();
  },

  enqueue: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('dequeue', this);
  },

  ended: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('ended', this);
  },

  incrementPlayCount: function(){
    var increment = this.get('playCount') + 1;
    this.set('playCount', increment);
  }


});
