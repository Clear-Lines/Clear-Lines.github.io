(function () {
    'use strict';
    var controllerId = 'customers';
    angular.module('app').controller(controllerId, ['common', customers]);

    function customers(common) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Customers';

        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () {
                    log('Activated customers View', null, false);
            });
        }
    }
})();