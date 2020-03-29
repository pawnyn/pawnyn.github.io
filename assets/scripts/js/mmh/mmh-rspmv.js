var o = document.getElementById('landing');
window.onmousemove = function(e) {
    var x = - e.clientX/80, y = - e.clientY/80;
    o.style.backgroundPositionX = x + 'px';
    o.style.backgroundPositionY = y + 'px';
}