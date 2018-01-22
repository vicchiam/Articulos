window.Articulo=Backbone.Model.extend({
    defaults:{
        codigo:'0',
        nombre:'Nada',
        familia1:'',
        familia2:'',
        familia3:'',
        grupo:'',
        grupo2:''
    },
    idAttribute:'codigo',
    urlRoot: 'api/list'
});

window.ArticuloList=Backbone.Collection.extend({
    model: Articulo,
    initialize : function(args){
        this.codigo=args.codigo;
    },
    url: function(){
        return 'api/list/'+this.codigo;
    }
});
