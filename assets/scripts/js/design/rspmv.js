var o = document.getElementById('searchbox');
window.onmousemove = function(e) {
    var x = - e.clientX/12, y = - e.clientY/12;
    o.style.backgroundPositionX = x + 'px';
    o.style.backgroundPositionY = y + 'px';
}