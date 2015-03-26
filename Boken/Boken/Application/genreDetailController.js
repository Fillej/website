app.controller("genreDetailController", ["$scope", "Genres", "$modalInstance", "$modal", "param", function ($scope, Genres, $modalInstance, $modal, param) {

    $scope.view = param.view; // s�tter viken vy som ska visas.
    $scope.action = param.view; // talar om vilken handling anv�ndaren vill utf�ra i modalen
    $scope.genre = {};
    // --- H�mtar genren ------ //
    $scope.$on("gotGenre", function (event, data) {
        $scope.genre = data;
    });
    if (param.id) Genres.get(param.id);
    // ---------------------//

    // --- spara & Avbryt knapparnas funktioner -- //
    //     st�nger �ven ner modalen 

    $scope.openBook = function (view, book, action) {
        var modalInstance = $modal.open({
            templateUrl: 'partials/bookDetail.html',
            controller: 'bookDetailController',
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
    }

    $scope.save = function () {
        Genres.put($scope.genre.Id, $scope.genre);
        $scope.$on("reloadList", function () {
            $modalInstance.close();
        });
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

    // --- logik f�r att best�mma vad som skrivs ut i bekr�ftelse
    $scope.text = "";
    $scope.text2 = "";
    $scope.editText = function () {
        var a = $scope.action;
        var text = "Vill du verkligen "
        if (a == 1) text += "uppdatera "
        if (a == 4) text += "skapa "
        if (a == 3) text += "ta bort ";
        text += "genren "

        var text2 = "";
        if (a != 3) text2 = "med foljande innehall?"
        if (a == 3) text2 = "och alla dess referenser permanent?";
        if (a == 4) text2 = "med dessa uppgifter?";
        $scope.text2 = text2;
        $scope.text = text;
    }
    
    //---------skapa ny -------//
    $scope.create = function () {
        Genres.post($scope.genre);
        $scope.$on("reloadList", function () {
            $modalInstance.close();
        });
    };

    // ----- Delete ------------------- //
    $scope.delete = function () {
        try {
            Genres.delete($scope.genre.Id);
            $scope.$on("reloadList", function () {
                $modalInstance.close();
            });
        }
        catch (err) {
        }
        $modalInstance.close();
    };

    // --- togglar mellan olika vyer ---//
    /*
     * View:
     *  0 - visa upp
     *  1 - redigering
     *  2 - bekr�ftelse
     *  3 - radera
     *  4 - skapa nytt
     * 
     */

    $scope.editView = function (id) {
        if (id == 0) { $scope.view = [id]; }
        if (id == 1) { $scope.view = [id]; }
        if (id == 2) { $scope.view = [id]; }
        if (id == 3) { $scope.view = [id]; }
        if (id == 4) { $scope.view = [id]; }
        //if (id == 5) { $scope.view = $scope.action; }
    };
}]);
