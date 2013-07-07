require(['knockout'], function (ko) {
});
define('UrlsViewModel', ['knockout'], function (ko) {
    return function () {
        this.url = ko.observable();
    }
});
