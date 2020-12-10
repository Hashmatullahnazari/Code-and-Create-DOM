//const heading = document.getElementById('heading');
//console.log(heading);
//console.log(typeof heading);
//
//
////const heading2 = document.getElementById('heading');
////console.log(heading2)
//
//const list = document.getElementById('list');
//
////list.textContent = 'hi there';
//
//console.log(list.textContent);
//
//list.textContent = '<h1>hi there</h1>';
//console.log(list.innerHTML);
//
//



//const list = document.querySelector('#list');
//console.log(list);
//
//const li = document.querySelector('li');
//console.log(li);
//
//const lis = document.querySelectorAll('li');
//console.log(lis);
//
//const listItems = document.querySelectorAll('.list-item');
//console.log(listItems);


//const heading = document.getElementById('heading');
////heading.style.color = 'red';
////heading.style.backgroundColor = 'black';
//
//heading.className = "changeBG";
//heading.className = "chageFT";
//
//console.log(heading.classList);
//
//heading.classList.add('changeCL');
//heading.classList.remove('changeCL');
//
//const lis = document.querySelectorAll('li');
//console.log(lis);
//
////lis[1].style.backgroundColor = 'red';
//
//
//for (let i = 0; i < lis.length; i++){
//    lis[i].style.backgroundColor= 'royalblue'
//}
//
//lis[0].style.cssText = "background-color:coral; color:white; font-size:25px";


//const heading = document.querySelector('.heading');
//const btn = document.querySelector('.btn');
//
//btn.onclick = function myFunction() {
//    console.log('clicked');
//}
//
//btn.onmouseover = function myFunction() {
//heading.style.cssText = 'background-color:brown; color:white';
//
//}
//
//btn.onmouseout = function myFunction() {
//heading.style.cssText = 'background-color:transparent; color:black';
//
//}

//
//const clickButton = function myFunction() {
//    console.log('clicked');
//}



//document.getElementById("myBtn").addEventListener("click", function() {
//  document.getElementById("demo").innerHTML = "Hello World";
//});


//const heading = document.querySelector('.heading');

//var btn = document.querySelector('.btn');
//
//btn.addEventListener("click", myFunction);
//
//function myFunction(event) {
////   heading.style.cssText = "background-color:brown; color:white";
//    console.log(event.target)
//}


//const paragraph = document.querySelector('.paragraph');
//console.log(paragraph.getAttribute('id'));
//console.log(paragraph.getAttribute('class'));
//console.log(paragraph.getAttribute('title'));
//
//paragraph.setAttribute("style", "background-color:coral");
//paragraph.removeAttribute("style");


//const listItem = document.getElementById('list-item');
//console.log(listItem.parentElement);
//console.log(listItem.parentNode.parentNode);
//
//const list = document.querySelector('.list');
//console.log(list.childNodes);



//variables data Structure
//const productName = 'potato';
//const productPrice = 30;
//const productQuantity = 2 ;
//const isAvailable = 'true';
//

//accessing variable value

//console.log(`productName- ${productName} productPrice- ${productPrice} productQuantity- ${productQuantity} isAvailable ${isAvailable}`);

/*



*/

//Arrays data structures 

//const productInfoArray = ['potato', 30, 3, true];
//

//console.log(productInfoArray[0]);
//console.log(productInfoArray[3]);

//accessing Array values

//console.log(`productName- ${productInfoArray[0]} productPrice-  ${productInfoArray[1]} productQuantity- ${productInfoArray[2]} isAvailable ${productInfoArray[3]}`);


/*



*/

//const productInfoObj = 
//{
//productName: 'wheat',
//productPrice: 30,
//productQuantity:3,
//productAvailability: true
//}
//
//
//console.log(`${productInfoObj.productName} ${productInfoObj.productPrice} ${productInfoObj.productQuantity} ${productInfoObj.productAvailability}`);


//different way of accessing properties
//console.log(productInfoObj['productName']);
//console.log(productInfoObj.productName);
//
//console.log(productInfoObj['productQuantity']);
//console.log(productInfoObj.productQuantity);


//console.log(`${productInfoObj.productName} ${productInfoObj.productPrice} ${productInfoObj.productQuantity} ${productInfoObj.productAvailability}`);


/*



*/

////functions 
//
//const productInfoObj = 
//{
//productName: 'orange',
//productPrice: 30,
//productQuantity:3,
//productAvailability: true
//}
//
//
//
//
//function showProductInfo(productObj){
//    console.log(productObj);
//console.log(`${productObj.productName} ${productObj.productPrice} ${productObj.productQuantity} ${productObj.productAvailability}`);
//}
//
//
//showProductInfo(productInfoObj);
//
//


/*




*/



//functions console.log()

//const productInfoObj1 = 
//{
//productName: 'banana',
//productPrice: 30,
//productQuantity:3,
//productAvailability: true
//}
//
//const productInfoObj2 = 
//{
//productName: 'wheat',
//productPrice: 30,
//productQuantity:3,
//productAvailability: false
//}
//
//
//
//function showProductInfo(productObj)
//{
//    console.log(productObj);
//console.log(`${productObj.productName} ${productObj.productPrice} ${productObj.productQuantity} ${productObj.productAvailability}`);
//}
//
//
////showProductInfo(productInfoObj1);
//showProductInfo(productInfoObj2);



/*



*/


//function return

//const productInfoObj1 = 
//{
//productName: 'banana',
//productPrice: 30,
//productQuantity:3,
//productAvailability: true
//}
//
//const productInfoObj2 = 
//{
//productName: 'wheat',
//productPrice: 30,
//productQuantity:3,
//productAvailability: false
//}
//
//
//
//function showProductInfo(productObj)
//{
//return `${productObj.productName} ${productObj.productPrice} ${productObj.productQuantity} ${productObj.productAvailability}`;
//}
//
//
//const product1 = showProductInfo(productInfoObj1);
//const product2 = showProductInfo(productInfoObj2);
//
//
//console.log(product1);
//console.log(product2);



//        <h1>Welcome to JavaScript DOM</h1>

//console.log(document.getElementById('myID'));
//console.log(document.querySelector('#myID'));
//
//console.log(document.querySelector('.first'));
//
//console.log(document.querySelector('div'));
//
//
//document.querySelector('span').style.backgroundColor = 'yellow';
//document.querySelector('.first span').style.backgroundColor = 'blue';
//
//document.querySelector('li:last-child').style.backgroundColor = 'green';
//document.querySelector('li:first-child').style.backgroundColor = 'red';
//document.querySelector('li:nth-child(4)').style.backgroundColor = 'purple';

//let eleList = document.getElementsByClassName('first');
//eleList = document.getElementsByTagName('span');
//eleList = document.querySelectorAll('.first');
//
//
//for (let i = 0; i < eleList.length; i = i + 1)
//{
//let el = eleList[i];
//console.log(el);
//eleList[i].textContent = (i + 1) + 'updated';
//}
//
//
//eleList.forEach(function(el,index){
//console.log(index);
//
//el.textContent = `${index}: updateds`;
//el.style.backgroundColor = 'red';
//})////only for nodelist
//
//
//console.log(eleList);


//const temp = document.querySelector('h1');
//console.log(temp);
//temp.setAttribute('class','red');
//
//const links = document.querySelectorAll('a');
//links.forEach(function(el){
//console.log(el.getAttribute('href'));
//el.setAttribute('href','http://www.discoveryvip.com');
//})
//
//              
//const listItems = document.querySelectorAll('li');
//listItems.forEach(function(item,cnt){
//item.id = 'li' + cnt;
//item.textContent = 'list item #' +cnt;
//    if(item.getAttribute('class')
//)
//console.log(item.getAttribute('class'));
//})


//const listitems = document.querySelectorAll('li');
//console.log(listitems);
//listitems.forEach(function(el,index){
//    console.log(el.className);
//    el.classList.add('test');
//    el.classList.toggle('test1');
//    el.classList.remove('first');
//    el.classList.replace('first','test3');
//    console.log(el.classList.contains('first'));
//    el.classList.add('test4');
//})


//var myString = 'hello';
//var myNumber = 100;
//var myBoolean = 'true';
//var myNone = null;





//var question1 = 'what is your name';
////var question2 = ' age?'; 
////var question = question1 + question2 + '?';
//var myName = prompt(question1);
//alert('welcome to my website ' + myName);

//var myString = 'a' + " " +  'b';

//var a = 5;
//var b = 13;
//console.log(b);
//b++;
//console.log(b);
//a--;
//var myTotal = b % a;
//console.log(myTotal);


//var a = prompt("first number");
//var b = prompt("second number");
//var myTotal = Number(a) + Number(b);
//alert('total of ' + myTotal);
//




//var a = prompt("first number");
//var b = prompt("second number");
//
//
//var message = (Number(a) > Number(b))? a +'first is  larger ': 'First is smaller than' + b;
//alert(message);
//

//var myArray = ['string', 100, false]; //literal array
//var myArray3 = [];
////
//var myArray1 = new Array ('string', 100, false);
//
//var myArray2 = new Array();

//console.log(myArray[0]);
//
//myArray[1] = 'new value';
//console.log(myArray);



//var task = ['take out some garbage', 'read book', 'write javascript', 'go to work' , 'sleep'];
//var progress = ['done', 'in progress', 'to do'];
//
//console.log(task[(task.length-1)])


//var question1 = prompt('which task 1-'+task.length+"?");
//var question2 = prompt('status 1 = done 2 = in progress 3 = to do?'); 
//
//
//
//
//console.log('today you will ' + task[question1-1] + ' status of task = ' + progress[question2-1]);
//var task = ['drink water', 'read a book', 'write javascript', 'go to sleep' , 'jog'];
//
//var progress = ['done', 'in progress', 'to do'];
//
//
//
//task[task.length] = 'watch tv';
//
//console.log(task[(task.length-1)]);
//console.log(task);

//var question1 = prompt('which task 1-' + task.length + '?');
//
//var question2 = prompt('status 1 = done 2 = in progress 3 = to do?');
//
//
//
//
//console.log('today you will :' + task[(question1-1)] + ': status of task ' + progress[(question2-1)]);


//var task = ['drink water', 'read a book', 'write javascript', 'go to sleep' , 'jog'];


//var animals = ['cat', 'dog', 'rabbit', 'bird' , 'fish'];
//
//var randomIndex = Math.floor(Math.random()*animals.length);
//
//
//
//var randomAnimal = (animals[randomIndex]);
//
//var message = prompt('which index value is ' + randomAnimal);
//
//var response = (message==randomIndex)? 'correct': 'wrong' + randomIndex;
//alert(response);

var animals = ['cat', 'dog', 'rabbit', 'bird' , 'fish', 'zebra'];
animals.reverse().sort();
console.log(animals);
//animals.push('sheep');
//var remove1 = animals.pop();
//animals.shift();
//animals.unshift('horse');
//animals.splice(2,1);
//console.log(remove1);
//console.log(animals);
//var animals = ['cat', 'dog', 'rabbit', 'bird' , 'fish' , 'zebra'];
//animals.push('sheep');
//animals.pop('sheep');
//animals.shift('');
//animals.unshift('horse');
//
//animals.splice(2,1);
//animals.reverse(2,1);
//animals.sort();
//console.log(animals);


//var animals = ['cat', 'dog', 'rabbit', 'bird' , 'fish' , 'zebra'];
//animals.sort().reverse();
////animals.reverse();
//
//console.log(animals);

//var animals = ['cat', 'dog', 'rabbit', 'bird' , 'fish' , 'zebra'];
//
//var startVal = animals.length;
//
//animals.fill('mouse',6,(animals.length-1));


//var newHolder = ['cat', 'dog', 'rabbit', 'bird'];
//var posIndex = newHolder.indexOf('cat');
//
//var q = prompt('what did you want to look for');
//
//var p = newHolder.indexOf(q);
//
//var message = p > -1 ? 'found' : 'not there';
//console.log(message);


//var arr = [1,2,3,4,5,6,7,8,9,'me','dou']
//arr.sort();
//console.log(arr);

//var userNames = ['mike','john','larry'];
//
//var checkUser = userNames.indexOf('mike')>-1?true:false;
//


//var output = document.getElementById('output');
//var login = false;
//var outputHolder='';
//var userOkay = (login)? outputHolder = 'true': outputHolder = 'false';
//output.innerHTML = userOkay;
//
//
//
//login ? alert('okay'):alert('denied');

//var myTime = 17;
//
//var output = document.getElementById('output');
//
//if (myTime<12){
//    output.innerHTML = 'wake up it is morning';
//}
//
//else if(myTime>12&&myTime<14){
//    output.innerHTML = 'go to lunch';
//}
//else if(myTime>16&&myTime<20){
//    output.innerHTML = 'dinner time';
//}
//else{
//    output.innerHTML = 'it is evening';
//}

//var html='something went wrong';
//var output = document.getElementById('output');
//var question = prompt = ('heads or tails');
//var result = question == 'heads'?1:0;
//var randomNumber = Math.floor(Math.random()*2)
//
//if (result == randomNumber){
//    html = 'you guessed correctly';
//}else{
//        html = 'you guessed wrong';
//
//}
//output.innerHTML = html;


//var answer='something went wrong';
//var output = document.getElementById('output');
//
//var question = prompt('ask me anything');
//
//var randomNumber = Math.floor(Math.random()*6)
//switch (randomNumber) {
//  case 0 :
//    answer = "it will work out";
//    break;
//  case 1:
//    answer = "may be or may be not";
//    break;
//  case 2:
//    answer = "probably not";
//        
//        
// case 3:
//    answer = "highly likely";
//    break;
//        
// default:
//    answer = "i dont know the answer";
//    break;
//}
//
//
//
//
//output.innerHTML = 'you asked me' + question + 'i think that ' + answer;


//
//var player = prompt('did you choose rock paper or scissor?');
//var win = false;
//var computer = Math.random();
//
//if (computer < 0.34){computer = 'rock';}

//var output = document.getElementById('output');
//
//
//function myFun1(a,b,c)
//{
//var response = a + b + c;
//    
//return response;
//}

//var output = document.getElementById('output');
//output.style.fontSize = "49px";
//output.style.fontFamily = 'Annie Use Your Telescope' ;
//
//var weatherIs = prompt('how is the weather like outside');
//if (weatherIs == 'sunny') 
//{
//  output.innerHTML = "Go to the Beach";
//} 
//
//else if (weatherIs == 'raining') {
//  output.innerHTML = "stay at home";
//} 
//
// else if (weatherIs == 'hot') {
//  output.innerHTML = "turn on the AC";
//} 
//
// else if (weatherIs == 'cold') {
//  output.innerHTML = "turn on the heater";
//} 
//
//else {
//  output.innerHTML = "give a value to the variable";
//}


document.getElementById();



