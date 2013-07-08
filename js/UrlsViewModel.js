define('UrlsViewModel', ['jquery', 'knockout'], function ($, ko) {
    return function () {
        var self = this;
        self.url = ko.observable();

        self.isValidUrl = ko.computed(function () {
            self.url();
            return document.getElementById('url').checkValidity();
        });
    }
});
