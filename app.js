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
function generateHourlyTotals(){
  //cycles through every hour
  var hourlyTotals = [];
  for (var i = 0; i < openHours.length; i++){
    var hourlyTotalSales = 0;
    //cycles through every store
    for (var j = 0; j < allStores.length; j++){
      hourlyTotalSales += allStores[j].dailySales[i];
    }
    hourlyTotals.push(hourlyTotalSales);
  }
  return hourlyTotals;
}
var renderToPage = function(){
  this.calculateAllCookiesSales();
  this.totalCookieSales();
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
CountCookies.prototype.renderSalesInTable = renderSalesInTable;

function makeHeadings(){
  var table = document.getElementById('salesTable');
  var headerRow = document.createElement('tr');
  var headerCell = document.createElement('th');
  headerCell.textContent = 'Store';
  headerRow.appendChild(headerCell);
  for(var i = 0; i < openHours.length; i++){
    var newCell = document.createElement('th');
    console.log('openHours', openHours[i]);
    newCell.textContent = openHours[i];
    headerRow.appendChild(newCell);
  }
  table.appendChild(headerRow);
var allHours = document.createElement('th');
allHours.textContent = 'Daily Totals';
headerRow.appendChild(allHours);

}

function makeFooter(){
  var table = document.getElementById('salesTable');
  var footerRow = document.createElement('tr');
  var footerCell = document.createElement('th');
  footerCell.textContent = 'Hourly Totals';
  footerRow.appendChild(footerCell);
  var totalHourlyAllStore = generateHourlyTotals();
  console.log(totalHourlyAllStore.length);
  debugger;

  for(var i = 0; i < totalHourlyAllStore.length; i++){
    var newFootCell = document.createElement('th');
    newFootCell.textContent = totalHourlyAllStore[i];
    footerRow.appendChild(newFootCell);
    console.log(newFootCell);
  }
  table.appendChild(footerRow);
}


function renderSalesInTable(){
  var table = document.getElementById('salesTable');
  var tableRow = document.createElement('tr');
  var tableCell = document.createElement('td');
  tableRow.appendChild(tableCell);
  tableCell.textContent = this.name;
  table.appendChild(tableRow);
  for (var i = 0; i < this.dailySales.length; i++){
    tableCell = document.createElement('td');
    tableCell.textContent = this.dailySales[i];
    tableRow.appendChild(tableCell);
    table.appendChild(tableRow);
  }
}
//==========================NEW OBJECTS=================================
var seattleCookies = new CountCookies('Seattle', 23, 65, 6.3, 'SeattleTitle');
var tokyoCookies = new CountCookies('Tokyo', 3, 24, 1.2, 'TokyoTitle');
var dubaiCookies = new CountCookies('Dubai', 11, 38, 3.7, 'DubaiTitle');
var parisCookies = new CountCookies('Paris', 20, 38, 2.3, 'ParisTitle');
var limaCookies = new CountCookies('Lima', 2, 16, 4.6, 'LimaTitle');
var allStores = [seattleCookies, tokyoCookies, dubaiCookies, parisCookies, limaCookies];

makeHeadings();


seattleCookies.renderToPage();
seattleCookies.renderSalesInTable();
tokyoCookies.renderToPage();
tokyoCookies.renderSalesInTable();
dubaiCookies.renderToPage();
dubaiCookies.renderSalesInTable();
parisCookies.renderToPage();
parisCookies.renderSalesInTable();
limaCookies.renderToPage();
limaCookies.renderSalesInTable();

makeFooter();
