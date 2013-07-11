define(['UrlsViewModel', 'jquery', 'knockout'],
function (uvm, $, ko, undefined) {
    return {
       run: function () {
           ko.applyBindings(new uvm());
       }
    };
});
