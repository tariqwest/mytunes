// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  
  template: _.template('<div class="queue-entry"> \
                          <span class="artist"><%- artist %>: </span> \
                          <span class="title"><%- title %></span> \
                        </div>'),
  
  initialize: function() {
    this.on('change', this.render, this);
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  }

});
