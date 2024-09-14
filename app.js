//in js we choose stuff like the button

var pics = [
    "img/IMG_0627.jpg", //funny facce 
    "img/IMG_0625.jpg", //leloko 
    "img/IMG_0631.jpg", //south park 
    "img/IMG_0628.jpg", //ranger
    "img/IMG_0630.jpg", //sleevless vest 
    "img/IMG_0633.jpg"
];

var btn = document.querySelector("button"); //searchs the HTML doc and looks for 1st instance of button 
var img = document.querySelector("img"); //searchs the HTML doc and looks for 1st instance of img. img tag, name of the tag 
var counter = 1; //start at one because when open the site it starts at 0 already 

btn.addEventListener("click", function(){ //what's inside brackets will run  whenever this button is clicked 
    img.src = pics[counter] //src from img tag from HTML
    counter++;
    if(counter >= pics.length){ //if counter is greater than or equal to the length of the array 
        counter = 0; //reset counter to 0
    }
});

