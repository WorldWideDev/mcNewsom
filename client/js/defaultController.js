mcNewsom.controller('DefaultController', function(DefaultFactory, $uibModal, $log, $document){
    self = this;
    self.selfiez = [
        {background: "url('/img/selfiez/IMG_01.jpg')"},
        {background: "url('/img/selfiez/IMG_02.jpg')"},
        {background: "url('/img/selfiez/IMG_03.jpg')"},
        {background: "url('/img/selfiez/IMG_04.jpg')"},
        {background: "url('/img/selfiez/IMG_05.jpg')"},
        {background: "url('/img/selfiez/IMG_06.jpg')"},
        {background: "url('/img/selfiez/IMG_07.jpg')"},
        {background: "url('/img/selfiez/IMG_08.jpg')"},
        {background: "url('/img/selfiez/IMG_09.jpg')"},
        {background: "url('/img/selfiez/IMG_10.jpg')"},
        {background: "url('/img/selfiez/IMG_11.jpg')"},
        {background: "url('/img/selfiez/IMG_12.jpg')"},
        {background: "url('/img/selfiez/IMG_13.jpg')"},
        {background: "url('/img/selfiez/IMG_14.jpg')"},
        {background: "url('/img/selfiez/IMG_15.jpg')"},
        {background: "url('/img/selfiez/IMG_16.jpg')"},
        {background: "url('/img/selfiez/IMG_17.jpg')"},
        {background: "url('/img/selfiez/IMG_18.jpg')"},
        // {background: "url('/img/selfiez/IMG_19.jpg')"},
        {background: "url('/img/selfiez/IMG_20.jpg')"},
        {background: "url('/img/selfiez/IMG_21.jpg')"},
        {background: "url('/img/selfiez/IMG_22.jpg')"}
    ];
    var $ctrl = this;
    $ctrl.items = ['item1', 'item2', 'item3'];

    $ctrl.animationsEnabled = true;

    $ctrl.open = function (size, parentSelector) {
      var parentElem = parentSelector ?
        angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
      var modalInstance = $uibModal.open({
        animation: $ctrl.animationsEnabled,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceCtrl',
        controllerAs: '$ctrl',
        size: size,
        appendTo: parentElem,
        resolve: {
          items: function () {
            return $ctrl.items;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $ctrl.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    $ctrl.openComponentModal = function () {
      var modalInstance = $uibModal.open({
        animation: $ctrl.animationsEnabled,
        component: 'modalComponent',
        resolve: {
          items: function () {
            return $ctrl.items;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $ctrl.selected = selectedItem;
      }, function () {
        $log.info('modal-component dismissed at: ' + new Date());
      });
    };

    $ctrl.openMultipleModals = function () {
      $uibModal.open({
        animation: $ctrl.animationsEnabled,
        ariaLabelledBy: 'modal-title-bottom',
        ariaDescribedBy: 'modal-body-bottom',
        templateUrl: 'stackedModal.html',
        size: 'sm',
        controller: function($scope) {
          $scope.name = 'bottom';
        }
      });

      $uibModal.open({
        animation: $ctrl.animationsEnabled,
        ariaLabelledBy: 'modal-title-top',
        ariaDescribedBy: 'modal-body-top',
        templateUrl: 'stackedModal.html',
        size: 'sm',
        controller: function($scope) {
          $scope.name = 'top';
        }
      });
    };

    $ctrl.toggleAnimation = function () {
      $ctrl.animationsEnabled = !$ctrl.animationsEnabled;
    };

});
mcNewsom.controller('ModalInstanceCtrl', function ($uibModalInstance, items) {
  var $ctrl = this;
  $ctrl.items = items;
  $ctrl.selected = {
    item: $ctrl.items[0]
  };

  $ctrl.ok = function () {
    $uibModalInstance.close($ctrl.selected.item);
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});

// Please note that the close and dismiss bindings are from $uibModalInstance.

mcNewsom.component('modalComponent', {
  templateUrl: 'myModalContent.html',
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  },
  controller: function () {
    var $ctrl = this;

    $ctrl.$onInit = function () {
      $ctrl.items = $ctrl.resolve.items;
      $ctrl.selected = {
        item: $ctrl.items[0]
      };
    };

    $ctrl.ok = function () {
      $ctrl.close({$value: $ctrl.selected.item});
    };

    $ctrl.cancel = function () {
      $ctrl.dismiss({$value: 'cancel'});
    };
  }
});
