const botoesCurtir = document.querySelectorAll(".curtir");
botoesCurtir.forEach(function(botaoCurtir)
    let curtiu = false;
    botaoCurtir.addEventListener("click",curtir);
    function curtir(){
        const Contador = botaoCurtir.querySelector("span");
        if(curtium=== false){
            contador.textContent++;
            curtiu = true;
            else{
                contador.textContent--;
                curtiu = false;
            
        }
    }
})