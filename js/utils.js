window.Paginator = Backbone.View.extend({

    className: "pagination pagination-centered",

    initialize:function (args) {
        this.page=args.page;
    },

    render:function () {
        var items = this.model.models;
        var len = items.length;
        var pageCount = Math.ceil(len / 20);

        $(this.el).html('<ul />');

        for (var i=0; i < pageCount; i++) {
            $('ul', this.el).append("<li" + ((i + 1) === this.page ? " class='active'" : "") + "><a href='#list/page/"+(i+1)+"'>" + (i+1) + "</a></li>");
        }

        return this;
    }
});
