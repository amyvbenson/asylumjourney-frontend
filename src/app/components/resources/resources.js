import resourcesModal from './confirmModal.html';
class resourcesController {
  /** @ngInject */
  constructor (DataService, ngDialog, $filter, $scope, $timeout) {
    this.DataService = DataService;
    this.ngDialog = ngDialog;
    this.$filter = $filter;
    this.$scope = $scope;
    this.$timeout = $timeout;
    this.resources = [];
    this.showDeleteSuccess = false;
    this.idToDelete = 0;
    this.showExpiredOnly = false;
    this.order = 'name';
    getResources.bind(this)();
  }

  cancelDelete () {
    this.idToDelete = 0;
    this.ngDialog.close();
  }

  confirmDelete (id) {
    this.idToDelete = id;
    this.ngDialog.open({
      plain: true,
      template: resourcesModal,
      scope: this.$scope,
      className: 'ngdialog-theme-default confirm-modal'
    });
  }

  deleteResource () {
    this.DataService.deleteResource(this.idToDelete).then( () => {
      this.resources = formatExpiry.bind(this)(angular.copy(this.DataService.dataStore.resources));
      this.showDeleteSuccess = true;
      this.$timeout( () => {
        this.ngDialog.close();
        this.showDeleteSuccess = false;
      }, 1000);
    });
  }

  toggleShowExpiredOnly () {
    this.showExpiredOnly = !this.showExpiredOnly;
    this.order = this.order === 'name' ? 'expiryDate' : 'name';
  }
}

function formatExpiry (resources) {
  angular.forEach(resources, resource => {
    if (!resource.expiryDate) {
      return;
    }
    const now = new Date();
    const expiry = new Date(resource.expiryDate);
    if (expiry < now) {
      resource.expired = true;
    }
    resource.displayExpiryDate = this.$filter('date')(resource.expiryDate, 'dd MMM yyyy')
  });
  return resources;
}

function getResources () {
  this.DataService.getResources().then( () => {
    this.resources = formatExpiry.bind(this)(angular.copy(this.DataService.dataStore.resources));
  });
}

const resources = {
  template: require('./resources.html'),
  controller: resourcesController
};
export default resources;