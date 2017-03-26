console.log('Loaded!');
var img=document.getElementById('madi');
var marginleft=0;
function moveright(){
    margileft=marginleft+1;
    img.style.marginleft=marginleft+'px';
}
img.onclick=function(){
    var interval=setInterval(moveright,50);
};