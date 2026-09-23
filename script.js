const botoesCurtir = document.querySelectorAll(".curtir");
botoesCurtir.forEach(function(botaoCurtir)
    let curtiu = false;
    botaoCurtir.addEventListener("click",curtir);
    function curtir(){
        const Contador = botaoCurtir.querySelector("span");
        if(curtiu=== false){
            botaoCurtiu
            contador.textContent++;
            curtiu = true;
            else{
                contador.textContent--;
                curtir = false;
            
        }
    }
})