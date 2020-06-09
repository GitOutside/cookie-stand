'use strict';
var openHours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function arrSum(arr){
  return arr.reduce(function(a,b){
    return a + b;
  }, 0);
}
var totalCookieSales = function (){
  var cookieTotal = arrSum(this.dailySales);
  var totalCookieList = document.getElementById(this.name);
  var totalCookieListItem = document.createElement('li');
  totalCookieListItem.textContent = ('Total: ' + cookieTotal + ' cookies');
  totalCookieList.appendChild(totalCookieListItem);
};

var calculateAllCookiesSales = function (){
  for (var i = 0; i < openHours.length; i++){
    var randomNumber =  getRandomIntInclusive(this.minNumCustomers, this.maxMunCustomers);
    var hourlySales = Math.round(randomNumber * this.averageNumCookies);
    this.dailySales.push(hourlySales);
  }
};
//=====================SEATTLE============================================
var seattleCookies = {
  name : 'Seattle',
  minNumCustomers : 23,
  maxMunCustomers : 65,
  averageNumCookies : 6.3,
  dailySales : [],
  totalCookieSales : totalCookieSales,
  calculateAllCookiesSales : calculateAllCookiesSales,
  renderToPage : function(){
    var seattleListTitle = document.getElementById('SeattleTitle');
    var newListTitle = document.createElement('p');
    newListTitle.textContent = this.name;
    seattleListTitle.appendChild(newListTitle);
    var seattleSalesByHour = document.getElementById('Seattle');
    for (var i = 0; i < openHours.length; i++){
      var newListItem = document.createElement('li');
      newListItem.textContent = openHours[i] + ': ' + this.dailySales[i] + ' cookies';
      seattleSalesByHour.appendChild(newListItem);
    }
  },
  
};
seattleCookies.calculateAllCookiesSales();
seattleCookies.renderToPage();
seattleCookies.totalCookieSales();

var x = {
  name : 'Xavier',
}
function PersonNAme (firstName) {
  this.name = firstName;
}


//========================================TOKYO=======================================
var tokyoCookies = {
  name : 'Tokyo',
  minNumCustomers : 3,
  maxMunCustomers : 24,
  averageNumCookies : 1.2,
  dailySales : [],
  totalCookieSales : totalCookieSales,
  calculateAllCookiesSales : calculateAllCookiesSales,
  renderToPage : function(){
    var tokyoListTitle = document.getElementById('TokyoTitle');
    var newListTitle = document.createElement('p');
    newListTitle.textContent = this.name;
    tokyoListTitle.appendChild(newListTitle);
    var tokyoSalesByHour = document.getElementById('Tokyo');
    for (var i = 0; i < openHours.length; i++){
      var newListItem = document.createElement('li');
      newListItem.textContent = openHours[i] + ': ' + this.dailySales[i] + ' cookies';
      tokyoSalesByHour.appendChild(newListItem);
    }
  },
};
tokyoCookies.calculateAllCookiesSales();
tokyoCookies.renderToPage();
tokyoCookies.totalCookieSales();


//================================DUBAI===============================================
var dubaiCookies = {
  name : 'Dubai',
  minNumCustomers : 11,
  maxMunCustomers : 38,
  averageNumCookies : 3.7,
  dailySales : [],
  totalCookieSales : totalCookieSales,
  renderToPage : function(){
    var dubaiListTitle = document.getElementById('DubaiTitle');
    var newListTitle = document.createElement('p');
    newListTitle.textContent = this.name;
    dubaiListTitle.appendChild(newListTitle);
    var dubaiSalesByHour = document.getElementById('Dubai');
    for (var i = 0; i < openHours.length; i++){
      var newListItem = document.createElement('li');
      newListItem.textContent = openHours[i] + ': ' + this.dailySales[i] + ' cookies';
      dubaiSalesByHour.appendChild(newListItem);
    }
  },
 calculateAllCookiesSales : calculateAllCookiesSales,
};
dubaiCookies.calculateAllCookiesSales();
dubaiCookies.renderToPage();
dubaiCookies.totalCookieSales();


//================================PARIS================================================
var parisCookies = {
  name : 'Paris',
  minNumCustomers : 20,
  maxMunCustomers : 38,
  averageNumCookies : 2.3,
  dailySales : [],
  totalCookieSales : totalCookieSales,
  renderToPage : function(){
    var parisListTitle = document.getElementById('ParisTitle');
    var newListTitle = document.createElement('p');
    newListTitle.textContent = this.name;
    parisListTitle.appendChild(newListTitle);
    var parisSalesByHour = document.getElementById('Paris');
    for (var i = 0; i < openHours.length; i++){
      var newListItem = document.createElement('li');
      newListItem.textContent = openHours[i] + ': ' + this.dailySales[i] + ' cookies';
      parisSalesByHour.appendChild(newListItem);
    }
  },
  calculateAllCookiesSales : calculateAllCookiesSales,
};
parisCookies.calculateAllCookiesSales();
parisCookies.renderToPage();
parisCookies.totalCookieSales();


//================================LIMA================================================
var limaCookies = {
  name : 'Lima',
  minNumCustomers : 23,
  maxMunCustomers : 65,
  averageNumCookies : 6.3,
  dailySales : [],
  totalCookieSales : totalCookieSales,
  renderToPage : function(){
    var limaListTitle = document.getElementById('LimaTitle');
    var newListTitle = document.createElement('p');
    newListTitle.textContent = this.name;
    limaListTitle.appendChild(newListTitle);
    var limaSalesByHour = document.getElementById('Lima');
    for (var i = 0; i < openHours.length; i++){
      var newListItem = document.createElement('li');
      newListItem.textContent = openHours[i] + ': ' + this.dailySales[i] + ' cookies';
      limaSalesByHour.appendChild(newListItem);
    }
  },
  calculateAllCookiesSales : calculateAllCookiesSales,
};
limaCookies.calculateAllCookiesSales();
limaCookies.renderToPage();
limaCookies.totalCookieSales();
