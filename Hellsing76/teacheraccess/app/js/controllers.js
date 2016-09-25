const electron = require('electron');
const ipcRenderer = electron.ipcRenderer;
const BrowserWindow = electron.remote.BrowserWindow;

angular.module('teacheraccess').controller('AppCtrl', ['$ionicModal', '$timeout', AppCtrl]).controller('PlaylistsCtrl', [PlaylistsCtrl]).controller('PlaylistCtrl', [PlaylistCtrl]);

function AppCtrl($ionicModal, $timeout){
	let $ctrl = this;
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $ctrl.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    //scope: $ctrl
  }).then(function(modal) {
    $ctrl.modal = modal;
  });

  // Triggered in the login modal to close it
  $ctrl.closeLogin = function() {
    $ctrl.modal.hide();
  };

  // Open the login modal
  $ctrl.login = function() {
    $ctrl.modal.show();
  };

  // Perform the login action when the user submits the login form
  $ctrl.doLogin = function() {
    console.log('Doing login', $ctrl.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $ctrl.closeLogin();
    }, 1000);
  };
}

function PlaylistsCtrl(){
	let $ctrl = this;

  $ctrl.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
}

function PlaylistCtrl(){
	this.openComposer = ()=>{
		let composer = new BrowserWindow({
			midth:600,
			height:650,
			minHeight:500,
			minWidth:500,
			title:"Mail Composer",
			acceptFirstMouse: true,
			center:true
		});
		composer.setMenu(null);
		composer.loadURL(`file://${__dirname}/mail-composer.html`);
		composer.on('closed',()=>{ composer = null; });
	};

}
