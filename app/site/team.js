(function () {
    'use strict';
    var controllerId = 'team';
    angular.module('app').controller(controllerId, ['common', team]);

    function team(common) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Team';

        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () {
                    log('Activated Team View', null, false);
            });
        }
    }
})();