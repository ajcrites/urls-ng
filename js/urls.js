require(['UrlsViewModel', 'jquery', 'knockout'],
function (uvm, $, ko, undefined) {
    ko.bindingHandlers['fadeVisible'] = {
        update: function (el, valueAccessor) {
            valueAccessor() ? $(el).fadeIn() : $(el).fadeOut();
        },
        init: function (el, valueAccessor) {
            $(el).hide(valueAccessor());
        }
    };
    ko.bindingHandlers['transitionDelay'] = {
        update: function (el, valueAccessor) {
            $(el).css("transition-delay", valueAccessor());
        },
    };
    ko.applyBindings(new uvm());
});
