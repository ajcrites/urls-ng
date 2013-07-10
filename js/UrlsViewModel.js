define(['jquery', 'knockout', 'UrlPiece'], function ($, ko, UrlPiece) {
    return function () {
        var self = this;
        self.url = ko.observable();

        self.isValidUrl = ko.computed(function () {
            self.url();
            return document.getElementById('url').checkValidity();
        });

        self.pieces = ko.observableArray([
            new UrlPiece('Scheme', 'protocol', self.url),
            new UrlPiece('Host', 'hostname', self.url),
            new UrlPiece('Port', 'port', self.url),
            new UrlPiece('Path', 'pathname', self.url),
            new UrlPiece('Query', 'search', self.url),
            new UrlPiece('Fragment', 'hash', self.url),
        ]);

        self.url.subscribe(function (newvalue) {
           var delay = 0,
               valid = self.isValidUrl() && self.url()
               reverse = !valid;
           if (reverse) {
              self.pieces().reverse();
           }
           ko.utils.arrayForEach(self.pieces(), function (piece) {
               piece.previousValidity(piece.valid());
               piece.valid(valid && piece.canSlideIn());
               if (piece.valid() != piece.previousValidity()) {
                   piece.delay(delay);
                   delay += 200;
               }
           });
           //observableArray is mutable
           if (reverse) {
              self.pieces().reverse();
           }
        });
    }
});
