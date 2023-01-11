window.sr = ScrollReveal();
sr.reveal('.anime-left',{
    origin:'left',
    duration:1000,
    distance:'25rem',
    delay:300
});

sr.reveal('.anime-right',{
    origin:'right',
    duration:1000,
    distance:'25rem',
    delay:600
});

sr.reveal('.anime-top',{
    origin:'top',
    duration:1000,
    distance:'25rem',
    delay:600
});

sr.reveal('.anime-bottom',{
    origin:'bottom',
    duration:1000,
    distance:'25rem',
    delay:600
});

ScrollReveal().reveal('.spotlight', {
    distance: '0px',
    opacity: 0.8
})

ScrollReveal().reveal('.ani1',{delay:250});
ScrollReveal().reveal('.ani2',{delay:250});
ScrollReveal().reveal('.ani3',{delay:500});
ScrollReveal().reveal('.ani4',{delay:750});
ScrollReveal().reveal('.ani5',{delay:1000});
ScrollReveal().reveal('.ani6',{delay:1250});
ScrollReveal().reveal('.ani7',{delay:1500});
ScrollReveal().reveal('.ani8',{delay:1750});


var menuitems = document.getElementById("menuitems");
menuitems.style.maxHeight = '0px';
function menuToggle() {
    if(menuitems.style.maxHeight == '0px'){
        menuitems.style.maxHeight = '200px';
    }else{
        menuitems.style.maxHeight = '0px';
    }
}

const readingProgress = document.querySelector('#reading-progress-fill');
document.addEventListener('scroll', function(e) {
let w = (document.body.scrollTop || document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
readingProgress.style.setProperty('width', w + '%');
});


function myFunction(x) {
    x.classList.toggle("change");
}


/*Gallery*/

for(i=0; i<document.getElementsByClassName('overlay').length; i++){
    document.getElementsByClassName('overlay')[i].insertAdjacentHTML('beforeend', '<hr style="width: 20%;"/>')
}

/*Gallery*/
/*discount*/

function openCity(evt, cityName) {

    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";

    var imgid = cityName +'1';
    magnify(imgid, 3);
    document.getElementsByClassName('img-magnifier-glass')[0].style.display='none'

}
  
document.getElementById("defaultOpen").click();

function discountContent()
{

for(j=0; j<3; j++){

    const currentDate = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const rndInt = Math.floor(Math.random() * 6) + 1

    const bikes=["CANYON", "BMC", "SPECIALIZED"];
    const percentage=["20%", "30%", "25%"];

    var idValue='';
    if(j==0){
        idValue='card1'
    }else if(j==1){
        idValue='card2'
    }else{
        idValue='card3'
    }



    document.getElementsByClassName('discount-card')[0].innerHTML+=

    `<div id="${idValue}" class="tabcontent">
        <div class="coupon ">
            <div class="discount-item ">
                <h3>${bikes[j]}</h3>
            </div>
            <div id='magnifier-container' class="img-magnifier-container">
                <img  onMouseOver='showGlass()' id=${idValue}1 class="card-image" src="assets/image/g${j+1}.jpg" alt="Bike" style="width:100%;">
            </div>
            `+
            `<div class="discount-content">
                <h2><b><span>${percentage[j]}</span> OFF YOUR PURCHASE</b></h2>`+
                '<p>We offer bikes at budget-friendly prices</p>'+
                '<p>Promo Code: <span class="promo">BOH232</span></p>'+
                `<p class="expire">Expires: ${months[rndInt]}, ${rndInt*2}, ${currentDate.getFullYear()}</p> 
            </div>
        </div>
    </div>`;

}
}

window.onload=function(){
    discountContent();
    openCity(event,'card1');

}


function hideGlass(){
    document.getElementsByClassName('img-magnifier-glass')[0].style.display='none'
}

function showGlass(){
    document.getElementsByClassName('img-magnifier-glass')[0].style.display='block'
}



function magnify(imgID, zoom) {
    var img, glass=null, w, h, bw;
    img = document.getElementById(imgID);
    glass = document.createElement("DIV");
    glass.setAttribute("class", "img-magnifier-glass");

    img.parentElement.classList.remove('img-magnifier-glass');
    img.parentElement.insertBefore(glass, img);

    if(document.getElementsByClassName('img-magnifier-glass').length==3){
        document.getElementsByClassName('img-magnifier-glass')[1].remove();
    }
    for(i=0; i<document.getElementsByClassName('img-magnifier-glass').length;i++){
        document.getElementsByClassName('img-magnifier-glass')[i].remove()
    }


    img.parentElement.insertBefore(glass, img);

    let  numb =  document.getElementById("magnifier-container").childElementCount;


    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
    bw = 3;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;

    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);
    glass.addEventListener("mouseout", hideGlass);


    glass.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);

    const cardImg = document.getElementsByClassName('card-image')[0];

    console.log('CRDA',cardImg)


    function moveMagnifier(e) {
      var pos, x, y;

      e.preventDefault();

      pos = getCursorPos(e);
      x = pos.x;
      y = pos.y;


      if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
      if (x < w / zoom) {x = w / zoom;}
      if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
      if (y < h / zoom) {y = h / zoom;}
      /*set the position of the magnifier glass:*/
      glass.style.left = (x - w) + "px";
      glass.style.top = (y - h) + "px";
      /*display what the magnifier glass "sees":*/
      glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
    }
    function getCursorPos(e) {
      var a, x = 0, y = 0;
      e = e || window.event;
      /*get the x and y positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x and y coordinates, relative to the image:*/
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return {x : x, y : y};
    }
  }


/*blog*/




for(k=0; k<3; k++){

    const currentDate = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const rndInt = Math.floor(Math.random() * 12) + 0
    const randYear = Math.floor(Math.random() * 3) + 0

    const blogHeading = ["New Design", "Modern Techniques", "High Comfort"];



    document.getElementsByClassName('blog-item')[k].firstElementChild.innerHTML+=

    `${months[rndInt]} ${rndInt+1}, ${currentDate.getFullYear()-randYear}`;

    let m = (k+1).toString()
    const second = document.querySelector('.blog-item:nth-child('+m+') h3');
    second.innerHTML+=`${blogHeading[k]}`

    second.style.marginLeft='0px'


}

let child = 1;
const marginHead = () =>{ 

   
    if(document.querySelector('.blog-item:nth-child('+child+') h3').style.marginLeft=='0px'){

        document.querySelector('.blog-item:nth-child('+child+') h3').style.marginLeft='10px';      
        document.querySelector('.blog-item:nth-child('+child+') h3').style.color='#5538ab'; 
        document.querySelector('.blog-item:nth-child('+child+')').style.boxShadow='rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'; 

    
    }else{
         
        document.querySelector('.blog-item:nth-child('+child+') h3').style.marginLeft='0px';      
        document.querySelector('.blog-item:nth-child('+child+') h3').style.color='rgb(232, 226, 226)'; 
        document.querySelector('.blog-item:nth-child('+child+')').style.boxShadow='none'; 

        child=child+1;   

        if(child>3){
            child=1;
        }

    }
    
}



setInterval(marginHead, 2000)

/*blog*/
