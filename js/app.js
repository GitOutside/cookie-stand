'use strict';

var storeIntakeForm = document.getElementById('intakeForm');
var allStores = [];

storeIntakeForm.addEventListener('submit', dealWithForm);

function dealWithForm(newStoreEvent){
  newStoreEvent.preventDefault();
  var name = newStoreEvent.target.name.value;
  var min = newStoreEvent.target.minNumCustomers.value;
  var max = newStoreEvent.target.maxNumCustomers.value;
  var avg = newStoreEvent.target.averageNumCookies.value;
  var newStore = new CountCookies(name, min, max, avg);
  allStores.push(newStore);
  newStore.calculateAllCookiesSales();
  newStore.totalCookieSales();
  //newStore.generateHourlyTotals();
  newStore.renderSalesInTable();
}

function generateHourlyTotals(){//for footer
  var hourlyTotals = [];
  for (var i = 0; i < openHours.length; i++){
    var hourlyTotalSales = 0;
    for (var j = 0; j < allStores.length; j++){
      hourlyTotalSales += allStores[j].dailySales[i];
    }
    hourlyTotals.push(hourlyTotalSales);
  }
  return hourlyTotals;
}


//====================================================================
var openHours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];

//This function is from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//This function was provided to me by my classmate, Chandler Puckett
function arrSum(arr){
  return arr.reduce(function(a,b){
    return a + b;
  }, 0);
}

var totalCookieSales = function (){
  arrSum(this.dailySales);
};
var calculateAllCookiesSales = function (){//Hourly sales for a store
  for (var i = 0; i < openHours.length; i++){
    var randomNumber =  getRandomIntInclusive(this.minNumCustomers, this.maxNumCustomers);
    var hourlySales = Math.round(randomNumber * this.averageNumCookies);
    this.dailySales.push(hourlySales);
  }
};
function renderSalesInTable(){
  var table = document.getElementById('salesTable');
  var tableRow = document.createElement('tr');
  var tableCell = document.createElement('td');
  tableCell.textContent = this.name;
  tableRow.appendChild(tableCell);
  for (var i = 0; i < openHours.length; i++){
    tableCell = document.createElement('td');
    tableCell.textContent = this.dailySales[i];
    tableRow.appendChild(tableCell);
  }
  var dailyTotals = document.createElement('th');//daily totals on left
  dailyTotals.textContent = arrSum(this.dailySales);
  tableRow.appendChild(dailyTotals);
  table.appendChild(tableRow);
}



function makeFooter(){
  var footerRow = document.createElement('tr');
  var footerCell = document.createElement('th');
  footerCell.textContent = 'Hourly Totals';
  footerRow.appendChild(footerCell);
  var totalHourlyAllStore = generateHourlyTotals();
  for(var i = 0; i < totalHourlyAllStore.length; i++){
    var newFootCell = document.createElement('th');
    newFootCell.textContent = totalHourlyAllStore[i];
    footerRow.appendChild(newFootCell);
  }
  table.appendChild(footerRow);
  var grandTotal = document.createElement('th');
  grandTotal.textContent = arrSum(totalHourlyAllStore);
  footerRow.appendChild(grandTotal);
  table.appendChild(footerRow);
}
var table = document.getElementById('salesTable');
//=============================CONSTRUCTOR FUNCTION======================
function CountCookies(name, minNumCustomers, maxNumCustomers, averageNumCookies) {
  this.name = name;
  this.minNumCustomers = minNumCustomers;
  this.maxNumCustomers = maxNumCustomers;
  this.averageNumCookies = averageNumCookies;
  this.dailySales = [];
  this.calculateAllCookiesSales();
  this.totalCookieSales();
}
CountCookies.prototype.totalCookieSales = totalCookieSales;
CountCookies.prototype.calculateAllCookiesSales = calculateAllCookiesSales;
CountCookies.prototype.renderSalesInTable = renderSalesInTable;
CountCookies.prototype.doIt = doIt;

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

function doIt(){
  for (var i = 0; i < allStores.length; i++){
    allStores[i].renderSalesInTable();
  }
}
//==========================NEW OBJECTS=================================

var seattleCookies = new CountCookies('Seattle', 23, 65, 6.3);
var tokyoCookies = new CountCookies('Tokyo', 3, 24, 1.2);
var dubaiCookies = new CountCookies('Dubai', 11, 38, 3.7);
var parisCookies = new CountCookies('Paris', 20, 38, 2.3);
var limaCookies = new CountCookies('Lima', 2, 16, 4.6);
//allStores = [seattleCookies, tokyoCookies, dubaiCookies, parisCookies, limaCookies];
allStores.push(seattleCookies);
allStores.push(tokyoCookies);
allStores.push(dubaiCookies);
allStores.push(parisCookies);
allStores.push(limaCookies);
makeHeadings();

doIt();
makeFooter();

