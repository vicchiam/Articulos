var AppRouter = Backbone.Router.extend({

    routes: {
        '': 'list',
        'list/page/:page'	: 'list'
    },

    list: function(page){
        var p = page ? parseInt(page, 10) : 1;
        var appView=new AppView({page:p});
        appView.render();
    }

});

var app=new AppRouter();
Backbone.history.start();
