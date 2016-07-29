Library.module('UsersApp.AssignBook', function (AssignBook, Library, Backbone, Marionette, $, _) {
    AssignBook.Controller = {
        assignBook: function (userId) {
            console.log('in assignBook controller');

            var books = Library.request('book:entities');
            var view = new AssignBook.Books({
                collection: books
            });
            view.on('childview:usersBook:assignClicked',function(childview,model){
                Library.request('usersBook:assign', userId, model.get('id'));

            });

            Library.mainRegion.show(view);
        }
    }
});