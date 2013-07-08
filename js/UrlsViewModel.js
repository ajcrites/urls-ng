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
        ]);

        self.setUrl = ko.computed(function () {
            var reverse = false;
            self.url($("#url").val());
            reverse = !(self.isValidUrl() && self.url());
            if (reverse) {
               self.pieces().reverse();
            }
            ko.utils.arrayForEach(self.pieces(), function (piece) {
                if (piece.canSlideIn()) {
                    piece.delay(self.delay);
                    self.delay += 200;
                }
            });
            if (reverse) {
               self.pieces().reverse();
            }
            self.delay = 0;
        });
    }
});
