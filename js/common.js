var u1 = document.querySelector('.u1');
var lis = u1.children;
for (var i = 0; i < lis.length; i++) {
    lis[i].onmouseover = function() {
        this.children[1].style.display = 'block';
    }
}
for (var i = 0; i < lis.length; i++) {
    lis[i].onmouseout = function() {
        this.children[1].style.display = 'none';
    }
}