'user strict'
var app = angular.module("myApp", ['ui.router','oc.lazyLoad']);
app.config(['$ocLazyLoadProvider', '$stateProvider', '$urlRouterProvider',function($ocLazyLoadProvider,$stateProvider, $urlRouterProvider) {
   $ocLazyLoadProvider.config({
        'debug': false, // For debugging 'true/false'
        'events': true,
   });
   $urlRouterProvider.otherwise("/login");
   //alert('123');
  $stateProvider
      .state('dashboard', {
      url: "/dashboard",
      templateUrl: "par/main.html",
 
	       resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'myApp',
              files:[
               'sidebarSearch.js'
              ]
            })
		
			
            }
		   }
	}
	) 
    .state('login', {
      url: "/login",
      templateUrl: "par/login.html",
     controller: 'YourCtrl',
	       resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'myApp',
              files:[
			  
              'myController.js'
              ]
            })
	
			
            }
		   }
	}
	) 
    .state('dashboard.page1', {
      url: "/page1",
      templateUrl: "par/page1.html",
     controller: 'YourCtrlTwo',
	       resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'myApp',
              files:[
			    //'sidebarSearch.js',
              'myControllerTwo.js',
			  'customfile.js'
              ]
            })
	
            }
		   }
	}
	)
    
    .state('dashboard.page2', {
      url: "/page2",
      templateUrl: "par/page2.html",
       controller: 'YourCtrl',
	       resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'myApp',
              files:[
			    'sidebarSearch.js',
              'myController.js'
              ]
            })
	
            }
		   }
    })
	.state('dashboard.page3', {
      url: "/page3",
      templateUrl: "par/page3.html",
      controller: 'YourCtrl',
	       resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'myApp',
              files:[
			     'sidebarSearch.js',
              'myController.js'
              ]
            })
	
            }
		   }
    })
		.state('dashboard.page4', {
      url: "/page4",
      templateUrl: "par/page4.html",
      controller: 'YourCtrl',
	       resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'myApp',
              files:[
			   'sidebarSearch.js',
              'myController.js'
              ]
            })
		
            }
		   }
    })
		.state('dashboard.page5', {
      url: "/page5",
      templateUrl: "par/page5.html",
      controller: 'YourCtrl',
	       resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'myApp',
              files:[
			  	   'sidebarSearch.js',
              'myController.js'
              ]
            })
            }
		   }
    })
		.state('dashboard.page6', {
      url: "/page6",
      templateUrl: "par/page6.html",
      controller: 'YourCtrl',
	       resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'myApp',
              files:[
			  	   'sidebarSearch.js',
              'myController.js'
              ]
            })
            }
		   }
    })
		.state('dashboard.page7', {
      url: "/page7",
      templateUrl: "par/page7.html",
      controller: 'YourCtrl',
	       resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'myApp',
              files:[
			  	   'sidebarSearch.js',
              'myController.js'
              ]
            })
            }
		   }
    })
		.state('dashboard.page8', {
      url: "/page8",
      templateUrl: "par/page8.html",
      controller: 'YourCtrl',
	       resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'myApp',
              files:[
			  	   'sidebarSearch.js',
              'myController.js'
              ]
            })
            }
		   }
    })
	;
   
}]);