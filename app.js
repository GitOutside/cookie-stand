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
    var randomNumber =  getRandomIntInclusive(this.minNumCustomers, this.maxNumCustomers);
    var hourlySales = Math.round(randomNumber * this.averageNumCookies);
    this.dailySales.push(hourlySales);
  }
};
var renderToPage = function(){
  var seattleListTitle = document.getElementById(this.unorderedListTitle);
  var newListTitle = document.createElement('p');
  newListTitle.textContent = this.name;
  seattleListTitle.appendChild(newListTitle);
  var seattleSalesByHour = document.getElementById(this.name);
  for (var i = 0; i < openHours.length; i++){
    var newListItem = document.createElement('li');
    newListItem.textContent = openHours[i] + ': ' + this.dailySales[i] + ' cookies';
    seattleSalesByHour.appendChild(newListItem);
  }
};
/*
//=====================SEATTLE============================================
var seattleCookies = {
  name : 'Seattle',
  minNumCustomers : 23,
  maxNumCustomers : 65,
  averageNumCookies : 6.3,
  dailySales : [],
  unorderedListTitle : 'SeattleTitle',
  totalCookieSales : totalCookieSales,
  calculateAllCookiesSales : calculateAllCookiesSales,
  renderToPage : renderToPage,
};
//========================================TOKYO=======================================
var tokyoCookies = {
  name : 'Tokyo',
  minNumCustomers : 3,
  maxNumCustomers : 24,
  averageNumCookies : 1.2,
  dailySales : [],
  totalCookieSales : totalCookieSales,
  calculateAllCookiesSales : calculateAllCookiesSales,
  unorderedListTitle : 'TokyoTitle',
  renderToPage : renderToPage,
};
//================================DUBAI===============================================
var dubaiCookies = {
  name : 'Dubai',
  minNumCustomers : 11,
  maxNumCustomers : 38,
  averageNumCookies : 3.7,
  dailySales : [],
  totalCookieSales : totalCookieSales,
  calculateAllCookiesSales : calculateAllCookiesSales,
  unorderedListTitle : 'DubaiTitle',
  renderToPage : renderToPage,
};
//================================PARIS================================================
var parisCookies = {
  name : 'Paris',
  minNumCustomers : 20,
  maxNumCustomers : 38,
  averageNumCookies : 2.3,
  dailySales : [],
  totalCookieSales : totalCookieSales,
  calculateAllCookiesSales : calculateAllCookiesSales,
  unorderedListTitle : 'ParisTitle',
  renderToPage : renderToPage,
};
parisCookies.calculateAllCookiesSales();
//================================LIMA================================================
var limaCookies = {
  name : 'Lima',
  minNumCustomers : 23,
  maxNumCustomers : 65,
  averageNumCookies : 6.3,
  dailySales : [],
  totalCookieSales : totalCookieSales,
  calculateAllCookiesSales : calculateAllCookiesSales,
  unorderedListTitle : 'LimaTitle',
  renderToPage : renderToPage,
};
*/

//=============================CONSTRUCTOR FUNCTION======================
function CountCookies(name, minNumCustomers, maxNumCustomers, averageNumCookies, unorderedListTitle) {
  this.name = name;
  this.minNumCustomers = minNumCustomers;
  this.maxNumCustomers = maxNumCustomers;
  this.averageNumCookies = averageNumCookies;
  this.dailySales = [];
  this.unorderedListTitle = unorderedListTitle;
}
CountCookies.prototype.renderToPage = renderToPage;
CountCookies.prototype.totalCookieSales = totalCookieSales;
CountCookies.prototype.calculateAllCookiesSales = calculateAllCookiesSales;
//==========================NEW OBJECTS=================================

var seattleCookies = new CountCookies('Seattle', 23, 65, 6.3, 'SeattleTitle');
var tokyoCookies = new CountCookies('Tokyo', 3, 24, 1.2, 'TokyoTitle');
var dubaiCookies = new CountCookies('Dubai', 11, 38, 3.7, 'DubaiTitle');
var parisCookies = new CountCookies('Paris', 20, 38, 2.3, 'ParisTitle');
var limaCookies = new CountCookies('Lima', 23, 65, 6.3, 'LimaTitle');

seattleCookies.calculateAllCookiesSales();
seattleCookies.renderToPage();
seattleCookies.totalCookieSales();
tokyoCookies.calculateAllCookiesSales();
tokyoCookies.renderToPage();
tokyoCookies.totalCookieSales();
dubaiCookies.calculateAllCookiesSales();
dubaiCookies.renderToPage();
dubaiCookies.totalCookieSales();
parisCookies.renderToPage();
parisCookies.totalCookieSales();
limaCookies.calculateAllCookiesSales();
limaCookies.renderToPage();
limaCookies.totalCookieSales();


