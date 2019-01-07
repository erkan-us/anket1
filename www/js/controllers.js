angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
   

.controller('PlaylistsCtrl', function($scope) {
  $scope.firmalar = [
    { adi: 'Akbank',kategori:'Banka',tel:'444 0 444',logo:'./img/icons8-happy-52.png', id: 0},
    { adi: 'Vakıfbank',kategori:'Banka',tel:'444 0 444',logo:'./img/icons8-neutral-52.png', id: 1},
    { adi: 'Garanti',kategori:'Banka',tel:'444 0 444',logo:'./img/icons8-sad-52.png', id: 1}, 
  ];
  $scope.pages = [
  { pageno:0,np:0, questionno:0, quesiton : 'Anketimize katıldığınız için teşekkürler.'},
    { pageno:1,np:2, questionno:1, quesiton : 'Şikayet bildirmek istediğiniz hizmet kategorisi nedir?'},
    { pageno:2,np:3, questionno:2, quesiton : 'Mağazamızın lokasyonu hakkında görüşünüz nedir?'},
    { pageno:3,np:0, questionno:3, quesiton : 'Sizi Aramamızı ister misiniz?'}
  ];
  $scope.answers = [
    { questionno:1, answerno:1,  answertype:'checkbox', answer:'Temizlik yetersiz.' },
    { questionno:1, answerno:2,  answertype:'checkbox', answer:'Personel ilgisiz.' },
    { questionno:1, answerno:3,  answertype:'checkbox', answer:'Fiyatlar pahalı.' },
    { questionno:1, answerno:4,  answertype:'checkbox', answer:'Aradığım ürünü bulamadım.' },
    { questionno:2, answerno:6,  answertype:'radio', answer:'Merkeze yakın olması güzel.' },
    { questionno:2, answerno:7,  answertype:'radio', answer:'Otopark ücretsiz olmalı' },
    { questionno:2, answerno:8,  answertype:'radio', answer:'Kapı dar.' },
    { questionno:2, answerno:9,  answertype:'radio', answer:'Merdiven dar.' },
    { questionno:3, answerno:10,  answertype:'radio', answer:'İstemem' },
    { questionno:3, answerno:11,  answertype:'radio', answer:'İsterim' },
    { questionno:3, answerno:12,  answertype:'textbox',answer:'Email' },
    { questionno:3, answerno:13,  answertype:'textbox',answer:'Telefon' }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
  $scope.PlayListId = $stateParams.playlistId; 
});