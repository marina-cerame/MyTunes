// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',
  className: 'queue',
  
  initialize: function() {
    this.collection.on('add remove', this.render, this);
    this.render();
    // SongQueueEntryView.prototype.render();
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
    // return this.$el;
  }

});
