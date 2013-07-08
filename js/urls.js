require(['UrlsViewModel', 'jquery', 'knockout'],
function (uvm, $, ko, undefined) {
    ko.bindingHandlers['fadeVisible'] = {
        update: function (el, valueAccessor) {
            var selectedValue = valueAccessor();
            if (typeof selectedValue === 'object') {
                selectedValue.enabled ? $(el).fadeIn() : $(el).fadeOut();
            }
            else {
                selectedValue ? $(el).fadeIn() : $(el).fadeOut();
            }
        },
        init: function (el, valueAccessor) {
            var selectedValue = valueAccessor();
            if (typeof selectedValue === 'object') {
                $(el).hide(selectedValue.enabled);
            }
            else {
                $(el).toggle(selectedValue);
            }
        }
    };
    ko.bindingHandlers['transitionDelay'] = {
        update: function (el, valueAccessor) {
            $(el).css("transition-delay", valueAccessor());
        },
    };
    ko.applyBindings(new uvm());
});
