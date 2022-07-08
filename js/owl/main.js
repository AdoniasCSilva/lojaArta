document.querySelector("#items") /*Selecionei a div items*/
.addEventListener("wheel", event => {
    if(event.deltaY > 0){
        event.target.scrollBy(300, 0)
    } else{
        event.target.scrollBy(-300, 0)
    }
}) /*adicionando um evento. Toda vez que adicionamos um evento ele dispara uma função */
