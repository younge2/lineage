var treeApp=angular.module("treeApp",["treeCtrl","ui.bootstrap","ui.router","ngResource"]);treeApp.config(["$stateProvider","$urlRouterProvider","$locationProvider",function(t,e,l){e.otherwise("/"),t.state("home",{url:"/",templateUrl:"app/views/home.html"}).state("about",{url:"/about",templateUrl:"app/views/about.html"}).state("contact",{url:"/contact",templateUrl:"app/views/contact.html"}).state("gallery",{url:"/gallery",templateUrl:"app/views/gallery.html"}).state("services",{url:"/services",templateUrl:"app/views/services.html"}).state("thanks",{url:"/thanks",templateUrl:"app/views/landings/thanks.html"}).state("removal",{url:"/removal",templateUrl:"app/views/landings/removal.html"}).state("trimming",{url:"/trimming",templateUrl:"app/views/landings/trimming.html"}).state("cleanup",{url:"/cleanup",templateUrl:"app/views/landings/cleanup.html"}).state("clearing",{url:"/clearing",templateUrl:"app/views/landings/clearing.html"}).state("404",{url:"/404",templateUrl:"app/views/404.html"}),l.html5Mode(!0)}]);