define(['jquery', 'knockout'],
function ($, ko) {
    ko.bindingHandlers['transitionDelay'] = {
        update: function (el, valueAccessor) {
            $(el).css("transition-delay", valueAccessor());
        },
    };
});
