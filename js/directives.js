urls.directive("urlValidity", function () {
    return function (scope, element, attr) {
        element.on("blur", function () {
            scope.$apply(function () {
                scope.isValidUrl = element[0].checkValidity();
            });
        }).on("keyup", function (e) {
            if (e.which == 13) {
                element[0].blur()
                element[0].focus();
            }
        });
    };
});
