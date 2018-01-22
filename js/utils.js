window.Paginator = Backbone.View.extend({

    el:$("#foot"),

    initialize:function (args) {
        this.page=args.page;
    },

    render:function () {
        var items = this.model.models;
        var len = items.length;
        var pageCount = Math.ceil(len / 100);

        var min= Math.max(this.page-5,0);
        var max= Math.min(this.page+5,pageCount);

        if(len>100){
            $(this.el).html('<nav><ul class="pagination justify-content-center" /></nav>');

            $('ul', this.el).append("<li><a class='page-link' href='#list/page/1'>Primera</a></li>");
            for (var i=min; i < max; i++) {
                $('ul', this.el).append("<li" + ((i + 1) === this.page ? " class='page-item active'" : "") + "><a class='page-link' href='#list/page/"+(i+1)+"'>" + (i+1) + "</a></li>");
            }
            $('ul', this.el).append("<li><a class='page-link' href='#list/page/" + pageCount + "'>Ultima</a></li>");
        }
        return this;
    }
});
