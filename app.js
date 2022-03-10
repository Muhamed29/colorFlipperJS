var colors=['red','blue','beige','orange'];
var bg= document.querySelector('.main');
var btn = document.querySelector('.btn');
var p = document.querySelector('.p');
btn.addEventListener('click',function(){
    var colorNumber = getRandomNumber() ;
    document.body.style.backgroundColor = colors[colorNumber];
    p.innerHTML = colors[colorNumber];
});
function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}