var app = angular.module('myApp', []);
app.controller('menuCtrl', function($scope, $http) {
   
        $scope.titles =[
        {name:'Princess Leia',ranges:'30 BBY to 5 ABY',mode:'Human',show:'Episode I,Episode II',space:'Naboo Royal Cruiser, Naboo Royal Starship, Naboo Star Skiff,Starfreighter'},
        {name:'Kylo Ren',ranges:'30 BBY to 5 ABY',mode:'Human',show:'Episode III,Episode IV,Episode V',space:'Naboo Royal Cruiser,  Naboo Star Skiff,Starfreighter'},
       {name:'Obi-Wan Kenobi',ranges:'Not between 30 BBY to 5 ABY',mode:'Human',show:'Episode I, Episode III',space:'Naboo Royal Cruiser, Naboo Royal Starship, Naboo Star Skiff,Starfreighter'},
        {name:'Luke Skywalker',ranges:'30 BBY to 5 ABY',mode:'Human',show:'Episode III, Episode V',space:' Naboo Royal Starship, Naboo Star Skiff,Starfreighter'},
        {name:'Han Solo',ranges:'30 BBY to 5 ABY',mode:'Human',show:'Episode III, Episode V',space:'Naboo Royal Cruiser, Naboo Royal Starship, Naboo Star Skiff,Starfreighter'},
        {name:'Padme Amidala',ranges:'30 BBY to 5 ABY',mode:'Human',show:'Episode I,Episode II, Episode III',space:'Naboo Royal Cruiser, Naboo Royal Starship,Starfreighter'},
        {name:'Rey',ranges:'30 BBY to 5 ABY',mode:'Human',show:'Episode III,Episode V',space:'Naboo Royal Cruiser, Naboo Royal Starship, Naboo Star Skiff,Starfreighter'},

        {name:'Count Dooku',ranges:'30 BBY to 5 ABY',mode:'Human',show:'Episode II,Episode III',space:'Naboo Royal Cruiser, Naboo Royal Starship, Naboo Star Skiff,Starfreighter'},
      {name:'Lando Calrissian',ranges:'Not between 30 BBY to 5 ABY',mode:'Human',show:'Episode3, Episode IV',space:'Naboo Royal Cruiser, Naboo Royal Starship, Naboo Star Skiff,Starfreighter'},
       {name:'Qui-Gon Jinn',ranges:'30 BBY to 5 ABY',mode:'Human',show:'Episode I,Episode II, Episode III',space:'Naboo Royal Cruiser, Naboo Royal Starship, Naboo Star Skiff,Starfreighter'},
        {name:'Mace Windu',ranges:'Not between 30 BBY to 5 ABY',mode:'Human',show:'Episode I,Episode II, Episode III',space:' Naboo Royal Starship, Naboo Star Skiff,Starfreighter'},
        {name:'Jango Fett',ranges:'Not between 30 BBY to 5 ABY',mode:'Human',show:'Episode II,Episode III,Episode IV',space:'Naboo Royal Cruiser, Naboo Star Skiff,Starfreighter'},
        {name:'Jyn Erso',ranges:'30 BBY to 5 ABY',mode:'Human',show:'Episode III, Episode IV',space:'Naboo Royal Cruiser, Naboo Royal Starship, Starfreighter'},

        {name:'Jar Jar Binks',ranges:'30 BBY to 5 ABY',mode:'Other',show:'Episode I,Episode II, Episode III',space:' Naboo Royal Starship, Naboo Star Skiff,Starfreighter'},
       {name:'Admiral Ackbar',ranges:'Not between 30 BBY to 5 ABY',mode:'Other',show:'Episode IV,Episode V',space:' Naboo Star Skiff,Starfreighter'},
       {name:'Kit Fisto',ranges:'30 BBY to 5 ABY',mode:'Other',show:'Episode III,Episode IV',space:'Naboo Royal Cruiser, Naboo Royal Starship,Starfreighter'}
        ];
$scope.select = function(item) {
    $scope.selectedItem = item;
};

        var nid ="19";
        
        $scope.isBeverage = function(titles) {
           return titles.Category === "Beverage";
        };
    });
