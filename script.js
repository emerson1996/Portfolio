

                                    //Inicio evento do menu hamburguer


   var hamburguer = document.querySelector(".hamburguer") //(.hamburguer) seletor do html

   hamburguer.addEventListener("click",function(){ // addEventListener vai escutar o evento de click, quando acontercer o click chama a função

   document.querySelector('.container').classList.toggle('showMenu');  // toglee adicionar ou remover a classe showMenu me informa se o menu está aberto ou fechado
   });  

//Fim evento  menu hamburguer


                                    //Iníco Animação JS h1 digitação 
   
function typeWrite (elemento){
    const textArray = elemento.innerHTML.split ('');
    elemento.innerHTML='';
            textArray.forEach((letra,i) =>{
                setTimeout(function(){
                    elemento.innerHTML += letra;

                },70*i)
            });

}
 const name = document.querySelector('.animation');
typeWrite(name);

//Fim Animação JS h1 digitação



                                    //Início Animação FLIPCARD


let cards = document.querySelectorAll(".card");

function flipcard() {
    this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipcard));


//Fim Animação JS FLIPCARD



                                    //Início Animação label do formulário

function Campo(p) {
    var campo = document.getElementsByTagName("input")[p]
    var styleLabel = campo.parentElement.lastElementChild.style;
    if (campo.value != "") {

    styleLabel.fontSize =".8rem"; 
    styleLabel.top ="0px";
    styleLabel.color ="#450288";

    } else {

    styleLabel.fontSize ="1rem"; 
    styleLabel.top ="3rem";
    styleLabel.color ="#000";
        
    }
   
    
    }
function Campo1(q) {
    var campo1 = document.getElementsByTagName("textarea")[q]
    var styleLabel2 = campo1.parentElement.lastElementChild.style;
    if (campo1.value != "") {
       
        styleLabel2.fontSize =".8rem"; 
        styleLabel2.top ="0px";
        styleLabel2.color ="#450288";
    } else {
        
        styleLabel2.fontSize ="1rem"; 
        styleLabel2.top ="3rem";
        styleLabel2.color ="#000";

    }
    
    }




