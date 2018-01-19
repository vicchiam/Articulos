window.AppView = Backbone.View.extend({
    el: '#main',

    initialize:function(){
        this.render();
    },

    render: function(){
        var articulo=new Articulo({codigo:'1000',nombre:'Pan'});
        var list=new List({model:articulo});
        $('#main').append(list.render().el);
    }

});

window.List=Backbone.View.extend({
    tagName: 'li',
    template:_.template($('#item-template').html()),
    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});
