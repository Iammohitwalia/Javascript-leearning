//start comment
/**
 * started comment
 */
 const PI = 3.14;
//console.log('Testing');
//alert('My name is aksu');
//confirm('Are you aksu?');
//prompt('Tells your age?');

var aksu = "aksu"; //The data which is already presented in th our document.
let age; // Assume any value in case if required.
age = 100;
const DOB = 2003; //Value that never changes
var aksu = "new";
console.log('My name is '+aksu+ ', My age is '+age+', my DOB is '+DOB);

const btn = document.getElementById('clickelm');
const tag = document.getElementsByTagName('button');
const cls = document.getElementsByClassName('elem');
const rmv = document.getElementById('removal');

const heading = document.getElementById('head');
const desc = document.getElementById('des');

btn.addEventListener('click',function(){
console.log(PI);
heading.classList.add('heading');
desc.classList.add('desc');
btn.classList.add('clicks');
});


rmv.addEventListener('click',function(){
    console.log(PI);
    heading.classList.remove('heading');
    desc.classList.remove('desc');
    btn.classList.remove('clicks');
    });










