// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.render();
    this.collection.on('add', this.render, this);
    this.collection.on('ended', this.render, this);
  },

  render: function() {
    this.$el.empty();
    this.$el.html('<div id="queue"><b>Song Queue</b></div>');
    this.collection.forEach(this.renderSong, this);
    return this.$el;
  },

  renderSong: function(song) {
    var songEntryView = new SongQueueEntryView({model: song});
    this.$el.append(songEntryView.render(song));
  }

});
