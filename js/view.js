window.AppView = Backbone.View.extend({
    el: '#tbody',
    initialize: function(args){
        this.page=args.page;
    },
    render: function(){
        var listado=new ArticuloList({codigo: '106'});
        var p=this.page;
        listado.fetch({
            success:function(){
                var articuloList=new ArticuloListView({model:listado, page: p});
                $('#tbody').append(articuloList.render().el);
            }
        });
    }
});

window.ArticuloListView=Backbone.View.extend({
    model: ArticuloList,
    el: 'tbody',
    initialize: function(args){
        this.page=args.page;
    },
    render:function(){
        this.$el.empty();

        var len = this.model.length;
        var startPos = (this.page - 1) * 100;
        var endPos = Math.min(startPos + 100, len);

        for(var i=startPos;i<endPos;i++){
            var articuloView=new ArticuloView({model:this.model.at(i)});
            this.$el.append(articuloView.$el);
            articuloView.render();
        }

        this.$el.append(new Paginator({model: this.model, page: this.page}).render().el);

        return this;
    }
});

window.ArticuloView=Backbone.View.extend({
    model: Articulo,
    tagName: 'tr',
    template:_.template($('#item-template').html()),
    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});
