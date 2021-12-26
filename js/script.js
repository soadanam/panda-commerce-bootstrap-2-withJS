//1. connecting - done
//document.body.style.backgroundColor = 'red';


//2. select all h2 and change their color to lightblue
const h2Items = document.getElementsByTagName('h2');
for(const item of h2Items){
    item.style.color = 'lightblue';
};


//3. get the ID 'backpack' and change the backgroundColor to tomato.
document.getElementById('backpack').style.backgroundColor = 'tomato';


//4. all class named 'card' have to have 30px border radius.
const cards = document.getElementsByClassName('card');
for(const card of cards){
    card.style.borderRadius = '30px';
}



//5/ write a function, there will be a console.log in it, add this function to any button as a click handler.
function makeBlue(){
    //document.getElementById('blue').style.backgroundColor = 'blue';  //jekono id call kore dewa jay
    console.log('hello make blue');
    //shudhu jetay click kore hocce tar upor kaj korte..
    //event.target.parentNode.removeChild(event.target);
    // event.target.style.visibility = 'hidden';
    // event.target.style.backgroundColor = "green";
    //event.target.style.borderRadius = '30px';
};



//6/ add such an event handler to all the buy-new button which will remove them when we click them;

//button theke call korte hobe
// function removeButton(){
//     const buttons = document.getElementsByClassName('btn');
//     for(const button of buttons){
//         button.style.visibility = 'hidden';
//         button.style.backgroundColor = 'yellow';
//     }
// }

//button theke call korte hobe na!
const buttons = document.getElementsByClassName('btn');
for(const button of buttons){
    //button.onclick.style.visibility = 'hidden';
    button.addEventListener('click', function(event){
        //button.style.backgroundColor = 'yellow';
        //event.target.style.backgroundColor = 'green';
        
        event.target.remove(event.target);
        //button.style.visibility = 'hidden';
        
    })
}



//7// make or create disabled submit button, then if anyone provide an input exactly "email" then the button will be enabled again.
document.getElementById('input-btn').addEventListener('keyup', function(event){
    if(event.target.value == 'email'){
        console.log(event.target.value);
        document.getElementById('sub-btn').removeAttribute('disabled');
    }
    else{
        document.getElementById('sub-btn').setAttribute('disabled', true)
    };
});



//8. mouseenter and image change!!

const images = document.getElementsByTagName('img');
for(const image of images){
    image.addEventListener('mouseenter', function(){
        image.src ="https://images.moviesanywhere.com/890fbf2b0a670dae45c01a009fb2fc1e/4c3e2e4c-da15-4b21-be58-a1c7645a9db9.jpg?h=375&resize=fit&w=250"
    });
};


//9. if we double click on the area of "lets stay in touch" the background will be changed!
document.getElementById('subscribe').addEventListener('dblclick',function(event){
    event.target.style.backgroundColor = 'goldenrod';
})
