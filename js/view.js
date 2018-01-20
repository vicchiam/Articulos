window.AppView = Backbone.View.extend({
    el: '#cuerpo',

    initialize:function(){
        this.render();
    },

    render: function(){
        /*
        var articulo1=new Articulo({codigo:'1000',nombre:'Pan'});
        var articulo2=new Articulo({codigo:'1001',nombre:'Harina'});
        var articulo3=new Articulo({codigo:'1002',nombre:'Catañas'});
        var listado=new ArticuloList([articulo1,articulo2,articulo3]);
        */
        var listado=new ArticuloList();
        listado.fetch({success:function(){
            var articuloList=new ArticuloListView({model:listado});
            $('#cuerpo').append(articuloList.render().el);
        }});        
    }

});

window.ArticuloListView=Backbone.View.extend({
    model: ArticuloList,
    el: 'tbody',
    render:function(){
        this.$el.empty();

        for(var i=0;i<this.model.length;i++){
            var articuloView=new ArticuloView({model:this.model.at(i)});
            this.$el.append(articuloView.$el);
            articuloView.render();
        }
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
