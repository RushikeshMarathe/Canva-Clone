b_container = document.querySelector("[box-container")
l_arrow =document.querySelector("[arrow-left]");
r_arrow =document.querySelector("[arrow-right]");
cont_l_arrow = document.querySelector("[cont-arrow-left]");
cont_r_arrow = document.querySelector("[cont-arrow-right]");
cont_b_container = document.querySelector("[cont-b-conatainer]");


l_arrow.style="display:none";
r_arrow.style="display:flex";

if(b_container.scrollLeft = b_container.scrollLeft - b_container.clientWidth){
        
}



function rightSlide(){
    b_container.scrollLeft = b_container.scrollLeft + b_container.clientWidth;
    r_arrow.style="display:none";
    l_arrow.style="display:visible";
}

function leftSlide(){
    b_container.scrollLeft = b_container.scrollLeft - b_container.clientWidth;
    l_arrow.style="display:none";
    r_arrow.style="display:visible";

}






cont_l_arrow.style="display:none";
cont_r_arrow.style="display:flex";

function cont_rightSlide(){
    cont_b_container.scrollLeft = cont_b_container.scrollLeft + cont_b_container.clientWidth;
    cont_r_arrow.style="display:none";
    cont_l_arrow.style="display:visible";
}

function cont_leftSlide(){
    b_container.scrollLeft = b_container.scrollLeft - b_container.clientWidth;
    cont_l_arrow="display:none";
    cont_r_arrow="display:visible";

}