  var menuitem = document.querySelector('.menuitem');
//   var menu = document.querySelector('.menu');

menuitem.style.maxHeight ='0px';

function menu(){
    if(menuitem.style.maxHeight=='0px'){ 

        menuitem.style.maxHeight='400px';
    }
    else{
        menuitem.style.maxHeight='0px'
    }
}
 