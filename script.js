

//Inicio evento do menu hamburguer


   var hamburguer = document.querySelector(".hamburguer") //(.hamburguer) seletor do html

   hamburguer.addEventListener("click",function(){ // addEventListener vai escutar o evento de click, quando acontercer o click chama afunção

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

