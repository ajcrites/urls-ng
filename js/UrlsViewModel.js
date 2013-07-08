define('UrlsViewModel', ['jquery', 'knockout', 'UrlPiece'], function ($, ko, UrlPiece) {
    return function () {
        var self = this;
        self.delay = 0;
        self.url = ko.observable();

        self.isValidUrl = ko.computed(function () {
            self.url();
            return document.getElementById('url').checkValidity();
        });

        self.pieces = ko.observableArray([
            new UrlPiece('Scheme', 'protocol', self.url),
            new UrlPiece('Host', 'hostname', self.url),
            new UrlPiece('Path', 'pathname', self.url),
            new UrlPiece('Port', 'port', self.url),
            new UrlPiece('Query', 'search', self.url),
            new UrlPiece('Fragment', 'hash', self.url),
        ]);

        self.setUrl = ko.computed(function () {
            var reverse = false;
            self.url($("#url").val());
            ko.utils.arrayForEach(self.pieces(), function (piece) {
                piece.delay(self.delay);
                self.delay += 200;
            });
            self.delay = 0;
        });
    }
});
