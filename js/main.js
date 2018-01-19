var AppRouter = Backbone.Router.extend({

    routes: {
        '': 'list'
    },

    initialize: function(){

    },

    list: function(){
        var appView=new AppView();        
    }

});

var app=new AppRouter();
Backbone.history.start();
