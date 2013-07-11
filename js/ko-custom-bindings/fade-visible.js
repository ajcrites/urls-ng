define(['jquery', 'knockout'],
function ($, ko) {
    ko.bindingHandlers['fadeVisible'] = {
        update: function (el, valueAccessor) {
            valueAccessor() ? $(el).fadeIn() : $(el).fadeOut();
        },
        init: function (el, valueAccessor) {
            $(el).toggle(valueAccessor());
        }
    };
});
