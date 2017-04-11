// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    //debugger;
    var song = this.model;
    this.$el.on('ended', function(){
      //console.log('ended', song.constructor);
      debugger;
      song.ended();
    });
    // this.handleEndOfSong(this.model);
    this.model.on('play', this.setSong, this);
    //this.model.on('ended', this.close, this);
  },

  // events: {
  //   'ended audio':'handleEndOfSong'  
  // },

  // Controller
  handleEndOfSong: function(song) {
    // this.model.ended();
    // this.model.dequeue();
    debugger;

  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    //debugger;
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  },

});
