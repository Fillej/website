﻿app.controller("booklistController", ["$scope", "Books", "Authors", "Genres", "$modal", "$log", "$route", function ($scope, Books, Authors, Genres, $modal, $log, $route) {
    var allBooks;
    $scope.currentPage = 1;
    $scope.numPerPage = 5;
    $scope.maxSize = 5;
    $scope.sort = "Title";

    $scope.$on("gotBooks", function (event, data) {
        $scope.output = JSON.stringify(data, null, '\t');
        allBooks = $scope.books = data;
        $scope.totalItems = $scope.books.length;
        $scope.pagArr = $scope.books.slice($scope.startshow, $scope.endshow);
    });
    $scope.$on("reloadList", function (event, data) {
        $route.reload();
    });
    

    // Början på paginering
    $scope.pagArr = [];
    $scope.bigCurrentPage = 1;
    $scope.itemsPP = 5;
    $scope.startshow = ($scope.bigCurrentPage - 1) * $scope.itemsPP;
    $scope.endshow = ($scope.startshow + $scope.itemsPP);

    $scope.pageChanged = function (currScope) {
        $scope.bigCurrentPage = currScope.bigCurrentPage;
        $scope.startshow = ($scope.bigCurrentPage - 1) * $scope.itemsPP;
        $scope.endshow = ($scope.startshow + $scope.itemsPP);
        $scope.pagArr = $scope.books.slice($scope.startshow, $scope.endshow);
    }
    // slut på paginering



    $scope.sortByTitle = function () {
        if ($scope.sort == "Title") $scope.sort = "-Title";
        else $scope.sort = "Title";
    };

    $scope.sortByAuthor = function () {
        if ($scope.sort == "Author") $scope.sort = "-Author";
        else $scope.sort = "Author";
    };

    $scope.sortByGenre = function () {
        if ($scope.sort == "Genre") $scope.sort = "-Genre";
        else $scope.sort = "Genre";
    };

    $scope.sortByPrice = function () {
        if ($scope.sort == "Price") $scope.sort = "-Price";
        else $scope.sort = "Price";
    }

    $scope.customSort = function (book) {
        if ($scope.sort == "Title" || $scope.sort == "-Title")
            return book.Title;
        else if ($scope.sort == "Author" || $scope.sort == "-Author")
            return book.Authors[0].Name;
        else if ($scope.sort == "Genre" || $scope.sort == "-Genre")
            return book.Genres[0].Name;
        else
            return book.Price;
    }

    $scope.$on("gotAuthors", function (event, data) {
        $scope.output = JSON.stringify(data, null, '\t');
        $scope.authors = data;
    });
    Authors.get();

    $scope.authorslist = function () {
        var authorlist = [];
        for (var a in authors) {
            authorlist.push(a.Name)
        }
    };

    $scope.$on("gotGenres", function (event, data) {
        $scope.output = JSON.stringify(data, null, '\t'); 
        $scope.genres = data;
    });
    Genres.get();

    $scope.genreslist = function() {
        var genrelist = [];
        for(var g in genres){
            genrelist.push(g.Name);
        }
    }

    // --- filtrering ---   //
    $scope.filterBooks = function (author, genre) {
        if (!author && !genre) {
            $scope.books = allBooks;
            $scope.currentPage = 1;
            $scope.totalItems = $scope.books.length;
            $scope.pagArr = $scope.books.slice(($scope.currentPage - 1) * $scope.numPerPage, $scope.currentPage * $scope.numPerPage);
            return;
        }
        $scope.books = allBooks;
        newBooksArr = [];
        var dataArr = $scope.books;

        for (var i = 0; i < dataArr.length; i++) 
        {
            filter(dataArr[i], author, genre);    
        }
      
        $scope.books = newBooksArr;
        // -- spara --- //
        $scope.currentPage = 1;
        $scope.totalItems = $scope.books.length;
        $scope.pagArr = $scope.books.slice(($scope.currentPage - 1) * $scope.numPerPage, $scope.currentPage * $scope.numPerPage);
        // --- ---- --- //
    }

    var filter = function (objekt, authorName, genreName) {
        if (authorName && genreName) {
            objekt.Authors.forEach(function (author) {
                objekt.Genres.forEach(function (genre) {
                    if (genre.Name.toLowerCase().indexOf(genreName.toLowerCase()) >= 0 && author.Name.toLowerCase().indexOf(authorName.toLowerCase()) >= 0)
                        if (newBooksArr.indexOf(objekt) == -1) newBooksArr.push(objekt);
                })
            });
        } else if (authorName) {
            objekt.Authors.forEach(function (author) {
                if (author.Name.toLowerCase().indexOf(authorName.toLowerCase()) >= 0)
                    if (newBooksArr.indexOf(objekt) == -1) newBooksArr.push(objekt);
            });
        } else if (genreName) {
            objekt.Genres.forEach(function (genre) {
                if (genre.Name.toLowerCase().indexOf(genreName.toLowerCase()) >= 0)
                    if (newBooksArr.indexOf(objekt) == -1) newBooksArr.push(objekt);
            });
        }
}

    // ----- Modal -------------------- //

    $scope.open = function (view, book, action, size) {
        if (book) {
            var modalInstance = $modal.open({
                templateUrl: 'partials/bookDetail.html',
                controller: 'bookDetailController',
                size: size,
                resolve: {
                    param: function () {
                        params = {
                            id: book.Id,
                            view: view,
                            action: action
                        }
                        return params;
                    }
                }
            });
            modalInstance.result.then(function (selectedItem) {
                $route.reload();
                $scope.selected = selectedItem;
            }, function () {
            });
        }
        if (!book) {
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
                $route.reload();
                $scope.selected = selectedItem;
            }, function () {

            });
        }
    };
    //---------Slut Modal -------------------//
    Books.get();
}]);




