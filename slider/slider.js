var photos = new Array();
var wich = 0;

photos[0]="./slider/Css.png"
photos[1]="./slider/JavaScript.png"
photos[2]="./slider/jquery.png"
photos[3]="./slider/netCore.png"
photos[4]="./slider/SAP ABAP.jpg"
function forward(){
    if( wich < photos.length-1 )
        wich++;
    else
        wich=0;
    //cambiar la imagen del elemento slider
    imagen = document.getElementById("slider");
    imagen.src = photos[wich];
}

function backward(){
    if( wich> 0 )
        wich--;
    else
        wich = 4;
    //cambiar la imagen del elemento slider
    imagen = document.getElementById("slider");
    imagen.src = photos[wich];
}



setInterval('forward()', 3000);
		
		// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("slider");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

modal.onclick = function(){
    if(modal.style.display == "block"){
        
        modal.style.display = "none";
        }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    alert("exit");
  modal.style.display = "none";
}

