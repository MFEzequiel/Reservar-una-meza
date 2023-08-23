function generateNav(data){
    let nav = '<nav class="header__nav">'
    nav += '<a href="'+ data +'">HTML</a>';
    nav +='</nav>';

    const my_he = document.getElementById('head');
    my_he.innerHTML = nav;
}


// document.addEventListener('DOMContentLoaded', function(){

//     var navcontainer = document.getElementById('head');
//     var link1 = navcontainer.getAttribute('data-link1');
//     var link2 = navcontainer.getAttribute('data-link2');
//     var link3 = navcontainer.getAttribute('data-link3');
//     var link4 = navcontainer.getAttribute('data-link4');

//     insertnav(link1, link2, link3, link4);
// });


document.addEventListener('DOMContentLoaded', function(){
    
    const headerelement = document.getElementById("head")
    
    const data1value = headerelement.getAttribute("data-link1")
    
    const navegation = generateNav(data1value)
    
    console.log(navegation)
    

    // const en = document.get
});

