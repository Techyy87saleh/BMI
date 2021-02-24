let kilogram = document.getElementById('kg');
let height   = document.getElementById('meter');
let element  = document.getElementById('content');
let button   = document.getElementById('calculate');
let element1 = document.getElementById('content1');
let element2 = document.getElementById('content2');
let element3 = document.getElementById('content3');
let element4 = document.getElementById('content4');
let element5 = document.getElementById('content5')


button.addEventListener('click',()=>{
    
   let kilo = (parseInt(kilogram.value)); 

   let height1 = (parseInt(height.value));

   let BMI =  kilo/(height1/100*height1/100).toFixed(2);

   let BMI1 = BMI.toFixed(2);

   let bodymassindex =  BMI1; 


    element.innerHTML = `Your BMI is : ${bodymassindex}`;

    element1.textContent = "BMI Categories:";

    element2.textContent = "Underweight = < 18.5";

    element3.textContent = "Normal Weight = 18.5-24.9";
    
    element4.textContent = "Overweight = 25-29.9";

    element5.textContent = "Obesity = BMI of 39 or greater";



    ;
 
})
