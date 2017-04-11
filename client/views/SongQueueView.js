// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  render: function() {
    // debugger;
    this.$el.empty();
    this.collection.forEach(this.renderSong, this);
    return this.$el;
  },

  renderSong: function(song) {
    // debugger;
    var songEntryView = new SongQueueEntryView({model: song});
    this.$el.append(songEntryView.render(song));
  }

});
