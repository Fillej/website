﻿app.controller("bookDetailController", ["$scope", "Books", "Authors", "Genres", "Ratings", "$modalInstance", "param", function ($scope, Books, Authors, Genres, Ratings, $modalInstance, param) {
    $scope.view = param.view; // sätter viken vy som ska visas.
    $scope.action = param.view; // talar om vilken handling användaren vill utföra i modalen
    $scope.book = {};
    // --- Hämtar författaren ------ //
    $scope.$on("gotBook", function (event, data) {
        $scope.book = data;
        Ratings.get(data.Rating.Id);
        $scope.newAuthors = $scope.book.Authors;
        $scope.newGenres = $scope.book.Genres;
    });
    Books.get(param.id);

    $scope.$on("gotGenres", function (event, data) {
        $scope.genres = data;
    });

    Genres.get();

    $scope.$on("gotAuthors", function (event, data) {
        $scope.authors = data;
    });

    Authors.get();

    $scope.$on("gotRating", function (event, data) {
        $scope.rating = data;
    });
    // --- slut ---------------//


    $scope.setRating = function () {
        newRating = { Id: $scope.rating.Id, TotalRating: $scope.rating.AverageRating };
        Ratings.put(newRating.Id, newRating);
        Ratings.get(newRating.Id);
    }

    // --- spara & Avbryt knapparnas funktioner -- //
    //     stänger även ner modalen 

    $scope.save = function () {
        $scope.book.Genres = $scope.newGenres;
        $scope.book.Authors = $scope.newAuthors;
        Books.put($scope.book.Id, $scope.book);
        $scope.$on("reloadList", function () {
            $modalInstance.close();
        });
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
    //-------------------------//



    // ---- rating ----- //

    $scope.maxRating = 10;
    $scope.isReadonly = true;

    //-------------------------//

    $scope.currDate = new Date().getFullYear();


    //--------testar validation--------//


    $scope.validationYear = function (data) {
        var _thisYear = new Date().getFullYear();

        if (data.length != 4) return "This is not valid!";
        if (!data.match(/\d{4}/)) return "This is not valid!";
        if (parseInt(data) > _thisYear || parseInt(data) < 1600)
            return "Not valid!";
        return "This is valid!";
    };


    //-------------------------//

   

    $scope.removeSelectGenre = function (selectedRemove) {
        var index = $scope.newGenres.indexOf(selectedRemove);
        if (index > -1) {
            $scope.newGenres.splice(index, 1);
        }
    };

    $scope.removeSelectAuthor = function (selectedRemove) {
        var index = $scope.newAuthors.indexOf(selectedRemove);
        if (index > -1) {
            $scope.newAuthors.splice(index, 1);
        }
    };

    $scope.newGenres = [];
    // ---- lägg till en ny inputrad varje gång man trycker på "plus tecknet" ----- //
    $scope.addGenre = function (genre) {

        if ($scope.newGenres.indexOf(genre) >= 0) {
            return;
        }
        else {
            $scope.newGenres.push(genre);
        }
        console.log($scope.newGenres);
    };

    $scope.newAuthors = [];
    // ---- lägg till en ny inputrad varje gång man trycker på "plus tecknet" ----- //
    $scope.addAuthor = function (author) {

        if ($scope.newAuthors.indexOf(author) >= 0) {
            return;
        }
        else {
            $scope.newAuthors.push(author);
        }
    };


    // --- logik för att bestämma vad som skrivs ut i bekräftelse
    $scope.text = "";
    $scope.text2 = "";
    $scope.editText = function () {
        var a = $scope.action;
        var text = "Vill du verkligen "
        if (a == 1) text += "uppdatera "
        if (a == 4) text += "skapa "
        if (a == 3) text += "ta bort ";
        text += "boken "

        var text2 = "";
        if (a != 3) text2 = "med foljande innehall?"
        if (a == 3) text2 = "och alla hans/hennes böcker permanent?";
        if (a == 4) text2 = "med dessa uppgifter?";
        $scope.text2 = text2;
        $scope.text = text;
    }
    // ------------------------//

    //---------skapa ny -------//
    $scope.create = function () {
        $scope.book.Genres = $scope.newGenres;
        $scope.book.Authors = $scope.newAuthors;
        Books.post($scope.book);
        $scope.$on("reloadList", function () {
            $modalInstance.close();
        });
    };
    // ----------slut ------------------//

    // ----- Delete ------------------- //

    $scope.delete = function () {
        try {
            Books.delete($scope.book.Id);
            $scope.$on("reloadList", function () {
                $modalInstance.close();
            });
        }
        catch (err) {
        }
        $modalInstance.close();
    };

    //---------Slut delete -------------//

    // --- togglar mellan olika vyer ---//
    /*
     * View:
     *  0 - visa upp
     *  1 - redigering
     *  2 - bekräftelse
     *  3 - radera
     *  4 - skapa nytt
     * 
     */

    $scope.editView = function (id) {
        if (id == 0) { $scope.view = [id]; }
        if (id == 1) { $scope.view = [id]; $scope.action = 1; }
        if (id == 2) { $scope.view = [id]; }
        if (id == 3) { $scope.view = [id]; }
        if (id == 4) { $scope.view = [id]; }
        if (id == 5) { $scope.view = $scope.action; }
    };
    // --- slut ---------------------//

}]);
