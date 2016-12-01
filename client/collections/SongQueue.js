// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {

    this.on('add', this.songAdded);
    this.on('ended', this.songRemove);
    this.on('dequeue', this.songRemove);
  },

  songAdded: function() {
    if (this.models.length === 1) {
      this.playFirst();
    }
  },

  songRemove: function() {
    this.remove(this.models[0]);
    if (this.models[0]) {
      this.playFirst();
    }
  },

  playFirst: function() {
    this.models[0].play();
  }

});
