﻿app.controller('headerController', ['$scope', '$location', 'Login', '$modal', "Genres", "Authors", "Books", function ($scope, $location, Login, $modal, Genres, Authors, Books) {
    $scope.loginStatus = Login.loginStatus;

    $scope.GoTo = function (url) {
        $location.url(url);
    }

    $scope.open = function (id) {

        console.log(id);
        if (id == "book")
        {
            console.log("inne i bok");
        var modalInstance = $modal.open({
            templateUrl: 'partials/createBook.html',
            controller: 'createBookModalController',

            resolve: {

            }
        });
        }
        else if (id == "author")
        {
            var modalInstance = $modal.open({
                templateUrl: 'partials/createAuthor.html',
                controller: 'createAuthorModalController',

                resolve: {

                }
            });
        }
        else if (id == "genre")
        {
            var modalInstance = $modal.open({
                templateUrl: 'partials/createGenre.html',
                controller: 'createGenreModalController',

                resolve: {

                }
            });
        }
        

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {

        });
    };
    // --------------------------------------//
   
    // ----- öppna vy för att skapa ny genre--- //

    $scope.createNewGenre = function ( view, action) {
        //console.log("genre", genre, "view", view);
        var modalInstance = $modal.open({
            templateUrl: 'partials/genreDetail.html',
            controller: 'genreDetailController',
            //size: size,
            resolve: {
                param: function () {
                    params = {
                        view: view,
                        action: action
                    }
                    console.log("param:", params)
                    return params;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            console.log("Skapa en ny genre:");
            $scope.selected = selectedItem;
            Genres.get();
            //$route.reload();
        }, function () {

        });
    };
    //---------Slut ---- -------------------//

    // ---------- skapa ny författare ---------//
    $scope.createNewAuthor = function (view, action) {
        var modalInstance = $modal.open({
            templateUrl: 'partials/authorDetail.html',
            controller: 'authorDetailController',
            //size: size,
            resolve: {
                param: function () {
                    params = {
                        view: view,
                        action: action
                    }
                    console.log("param:", params)
                    return params;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            console.log("Skapa en ny författare:");
            $scope.selected = selectedItem;
            Authors.get();
            //$route.reload();
        }, function () {

        });
    };
    //------------ slut ------------------//

    // ---------- skapa ny författare ---------//
    $scope.createNewBook = function (view, action) {
        var modalInstance = $modal.open({
            templateUrl: 'partials/bookDetail.html',
            controller: 'bookDetailController',
            //size: size,
            resolve: {
                param: function () {
                    params = {
                        view: view,
                        action: action
                    }
                    console.log("param:", params)
                    return params;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            console.log("Skapa en ny bok:");
            $scope.selected = selectedItem;
            Authors.get();
            //$route.reload();
        }, function () {

        });
    };
    //------------ slut ------------------//
}]);

