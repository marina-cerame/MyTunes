// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.render();
    SongQueueEntryView.prototype.render();
  },

  render: function() {
    return this.$el;
  }

});
