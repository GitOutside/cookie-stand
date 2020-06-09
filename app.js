/* Problem Domain
Caluculate the number of cookies for each location each day

5 arrays, each with these three parameters


ul
 li minNumCustomersca
 li maxNumCustomers
 li averageNumCookies
ul
 */
var openHours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is //inclusive and the minimum is inclusive
}
function arrSum(arr){
  return arr.reduce(function(a,b){
    return a + b;
  }, 0);
}
//=====================SEATTLE============================================
var seattleCookies = {
  name : 'Seattle',
  minNumCustomers : 23,
  maxMunCustomers : 65,
  averageNumCookies : 6.3,
  dailySales : [],
  totalCookieSales : function(){
    var cookieTotal = arrSum(this.dailySales);
    var totalCookieList = document.getElementById('Seattle');
    var totalCookieListItem = document.createElement('li');
    totalCookieListItem.textContent = ('Total: ' + cookieTotal + ' cookies');
    totalCookieList.appendChild(totalCookieListItem);
  },
  renderToPage : function(){
    //1. target
    var seattleListTitle = document.getElementById('SeattleTitle');
    var newListTitle = document.createElement('p');
    newListTitle.textContent = this.name;
    seattleListTitle.appendChild(newListTitle);
    var seattleSalesByHour = document.getElementById('Seattle');
    for (var i = 0; i < openHours.length; i++){
      //2. new element
      var newListItem = document.createElement('li');
      //2.5 content
      newListItem.textContent = openHours[i] + ': ' + this.dailySales[i] + ' cookies';
      //3. put on page
      seattleSalesByHour.appendChild(newListItem);
    }
  },
  calculateAllCookiesSales : function(){
    // salesThisHour = randomNumber * avgCookieSale
    for (var i = 0; i < openHours.length; i++){
      //create random customer number in 29
      var randomNumber =  getRandomIntInclusive(this.minNumCustomers, this.maxMunCustomers);
      //generates cookie sales for one hour
      var hourlySales = Math.round(randomNumber * this.averageNumCookies);
      //inserts each hours' sales into array
      this.dailySales.push(hourlySales);
    }
  }
};
seattleCookies.calculateAllCookiesSales();
seattleCookies.renderToPage();
seattleCookies.totalCookieSales();

//========================================TOKYO=======================================
var tokyoCookies = {
  name : 'Tokyo',
  minNumCustomers : 3,
  maxMunCustomers : 24,
  averageNumCookies : 1.2,
  dailySales : [],
  totalCookieSales : function(){
    var cookieTotal = arrSum(this.dailySales);
    var totalCookieList = document.getElementById('Tokyo');
    var totalCookieListItem = document.createElement('li');
    totalCookieListItem.textContent = ('Total: ' + cookieTotal + ' cookies');
    totalCookieList.appendChild(totalCookieListItem);
  },
  renderToPage : function(){
    //1. target
    var tokyoListTitle = document.getElementById('TokyoTitle');
    var newListTitle = document.createElement('p');
    newListTitle.textContent = this.name;
    tokyoListTitle.appendChild(newListTitle);
    var tokyoSalesByHour = document.getElementById('Tokyo');
    for (var i = 0; i < openHours.length; i++){
      //2. new element
      var newListItem = document.createElement('li');
      //2.5 content
      newListItem.textContent = openHours[i] + ': ' + this.dailySales[i] + ' cookies';
      //3. put on page
      tokyoSalesByHour.appendChild(newListItem);
    }
  },
  calculateAllCookiesSales : function(){
    // salesThisHour = randomNumber * avgCookieSale
    for (var i = 0; i < openHours.length; i++){
      //create random customer number in 29
      var randomNumber =  getRandomIntInclusive(this.minNumCustomers, this.maxMunCustomers);
      //generates cookie sales for one hour
      var hourlySales = Math.round(randomNumber * this.averageNumCookies);
      //inserts each hours' sales into array
      this.dailySales.push(hourlySales);
    }
  }
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
  totalCookieSales : function(){
    var cookieTotal = arrSum(this.dailySales);
    var totalCookieList = document.getElementById('Dubai');
    var totalCookieListItem = document.createElement('li');
    totalCookieListItem.textContent = ('Total: ' + cookieTotal + ' cookies');
    totalCookieList.appendChild(totalCookieListItem);
  },
  renderToPage : function(){
    //1. target
    var dubaiListTitle = document.getElementById('DubaiTitle');
    var newListTitle = document.createElement('p');
    newListTitle.textContent = this.name;
    dubaiListTitle.appendChild(newListTitle);
    var dubaiSalesByHour = document.getElementById('Dubai');
    for (var i = 0; i < openHours.length; i++){
      //2. new element
      var newListItem = document.createElement('li');
      //2.5 content
      newListItem.textContent = openHours[i] + ': ' + this.dailySales[i] + ' cookies';
      //3. put on page
      dubaiSalesByHour.appendChild(newListItem);
    }
  },
  calculateAllCookiesSales : function(){
    // salesThisHour = randomNumber * avgCookieSale
    for (var i = 0; i < openHours.length; i++){
      //create random customer number in 29
      var randomNumber =  getRandomIntInclusive(this.minNumCustomers, this.maxMunCustomers);
      //generates cookie sales for one hour
      var hourlySales = Math.round(randomNumber * this.averageNumCookies);
      //inserts each hours' sales into array
      this.dailySales.push(hourlySales);
    }
  }
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
  totalCookieSales : function(){
    var cookieTotal = arrSum(this.dailySales);
    var totalCookieList = document.getElementById('Paris');
    var totalCookieListItem = document.createElement('li');
    totalCookieListItem.textContent = ('Total: ' + cookieTotal + ' cookies');
    totalCookieList.appendChild(totalCookieListItem);
  },
  renderToPage : function(){
    //1. target
    var parisListTitle = document.getElementById('ParisTitle');
    var newListTitle = document.createElement('p');
    newListTitle.textContent = this.name;
    parisListTitle.appendChild(newListTitle);
    var parisSalesByHour = document.getElementById('Paris');
    for (var i = 0; i < openHours.length; i++){
      //2. new element
      var newListItem = document.createElement('li');
      //2.5 content
      newListItem.textContent = openHours[i] + ': ' + this.dailySales[i] + ' cookies';
      //3. put on page
      parisSalesByHour.appendChild(newListItem);
    }
  },
  calculateAllCookiesSales : function(){
    // salesThisHour = randomNumber * avgCookieSale
    for (var i = 0; i < openHours.length; i++){
      //create random customer number in 29
      var randomNumber =  getRandomIntInclusive(this.minNumCustomers, this.maxMunCustomers);
      //generates cookie sales for one hour
      var hourlySales = Math.round(randomNumber * this.averageNumCookies);
      //inserts each hours' sales into array
      this.dailySales.push(hourlySales);
    }
  }
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
  totalCookieSales : function(){
    var cookieTotal = arrSum(this.dailySales);
    var totalCookieList = document.getElementById('lima');
    var totalCookieListItem = document.createElement('li');
    totalCookieListItem.textContent = ('Total: ' + cookieTotal + ' cookies');
    totalCookieList.appendChild(totalCookieListItem);
  },
  renderToPage : function(){
    //1. target
    var limaListTitle = document.getElementById('LimaTitle');
    var newListTitle = document.createElement('p');
    newListTitle.textContent = this.name;
    limaListTitle.appendChild(newListTitle);
    var limaSalesByHour = document.getElementById('Lima');
    for (var i = 0; i < openHours.length; i++){
      //2. new element
      var newListItem = document.createElement('li');
      //2.5 content
      newListItem.textContent = openHours[i] + ': ' + this.dailySales[i] + ' cookies';
      //3. put on page
      limaSalesByHour.appendChild(newListItem);
    }
  },
  calculateAllCookiesSales : function(){
    // salesThisHour = randomNumber * avgCookieSale
    for (var i = 0; i < openHours.length; i++){
      //create random customer number in 29
      var randomNumber =  getRandomIntInclusive(this.minNumCustomers, this.maxMunCustomers);
      //generates cookie sales for one hour
      var hourlySales = Math.round(randomNumber * this.averageNumCookies);
      //inserts each hours' sales into array
      this.dailySales.push(hourlySales);
    }
  }
};
limaCookies.calculateAllCookiesSales();
limaCookies.renderToPage();
limaCookies.totalCookieSales();