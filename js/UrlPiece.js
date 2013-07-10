define(['jquery', 'knockout'], function ($, ko) {
    return function (name, attr, url) {
        var self = this;
        self.name = name;
        self.attr = attr;
        self.url = url;
        self.delay = ko.observable();
        self.value = ko.computed(function () {
            var a = document.createElement('a');
            a.setAttribute('href', self.url());
            return a[self.attr];
        });
        self.computeDelay = ko.computed(function () {
            return self.delay() + 'ms';
        });
        self.canSlideIn = ko.computed(function () {
            return !!self.value();
        });
        self.valid = ko.observable(false);
        self.previousValidity = ko.observable(false);
    };
});
