function generateDiv(){
    var div = '<div class="container">'
    div += '<div class="cont__cont">'
    div += '<figure class="cont__logo">'
    div += '<img src="" alt="">'
    div += '</figure>'
    div += '<div class="cont__art">'
    div += '<article class="cont__arte">'
    div += '<p id="paragraph"></p>'
    div += '</article>'
    div += '</div>'
    div += '</div>'
    div += '</div>'

    const _div = document.getElementById('sect--1')
    _div.innerHTML = div
}

document.addEventListener('DOMContentLoaded', function(){

    generateDiv()
})