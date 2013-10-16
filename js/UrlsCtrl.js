urls.controller("UrlsCtrl", ['$scope', function ($scope) {
    $scope.isValidUrl = true;
    $scope.url = "";

    $scope.pieces = [
        new UrlPiece('Scheme', 'protocol', self.url, "Communications protocol is a system of digital rules for message exchange"),
        new UrlPiece('Host', 'hostname', self.url, "Service that runs Internet servers that serve content to the Internet"),
        new UrlPiece('Port', 'port', self.url, "Physical interface between computer and other devices"),
        new UrlPiece('Path', 'pathname', self.url, "Unique location"),
        new UrlPiece('Query', 'search', self.url, "Contains data to be passed to web applications"),
        new UrlPiece('Fragment', 'hash', self.url, "Identifies a portion of the document"),
    ];

    $scope.slideIn = function (piece) {
        var a = document.createElement('a');
        a.setAttribute('href', $scope.url);
        if ($scope.url && $scope.isValidUrl && a[piece.attr]) {
            return "slide-in";
        }
    };
}]);
