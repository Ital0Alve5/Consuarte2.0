
window.onscroll = function(){fixarNava()}
function fixarNava(){
    var nava = document.querySelector('.nav')
    if(document.documentElement.scrollTop > 100 && window.innerWidth > 800){
        nava.style.display = 'flex'
        nava.style.position = 'fixed'
        nava.style.top = 0
        nava.style.marginTop = 0
        nava.style.backgroundColor = 'rgba(21, 54, 105, 0.192)';
        nava.style.zIndex = 999
    }
    else{
    nava.style.position = 'absolute'
    nava.style.marginTop = 10+'px'
    nava.style.backgroundColor = ''
    }
}

document.getElementById('serviçosLabel').addEventListener('mouseover', subMenuOn)
var subitens = document.getElementById('subItens')
var sub  = document.querySelectorAll('.sub')
subitens.addEventListener('mouseover', subMenuOn)
var serviços = document.getElementById('serviços')
sub.forEach(subs => {addEventListener('mouseout', subMenuOut)})
function subMenuOn(event){  
    if(event.target.id == 'serviçosLabel' && window.innerWidth > 800){serviços.checked = true}
    else if(event.target.name == 'sub' && window.innerWidth > 800){serviços.checked = true}
}
function subMenuOut(){serviços.checked = false}


var serviçosLabel = document.getElementById('serviçosLabel')
serviçosLabel.addEventListener('mouseover', setaDown)
serviçosLabel.addEventListener('mouseout', setaUp)
subitens.addEventListener('mouseover', setaDown)
subitens.addEventListener('mouseout', setaUp)

function setaUp(){
    var seta1 = document.querySelector('.seta1')
    var seta2 = document.querySelector('.seta2')
    seta1.className = ''
    seta2.className = 'seta2'
    seta1.className = 'seta1'
}
function setaDown(){
    var seta1 = document.querySelector('.seta1')
    var seta2 = document.querySelector('.seta2')
    seta1.classList.add('seta1Up')
    seta2.classList.add('seta2Up')
}