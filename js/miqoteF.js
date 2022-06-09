//该方法在图片列表加载完成以后执行：
window.onload = function() {
    addExpand();
}

/*循环给class='img-toggle'图片的onclick和onckeydown指定了expandPhoto方法，
该方法实现了点击图片放大的功能：*/
function addExpand() {
    var imgs = document.getElementsByClassName("img-toggle");
    imgs[0].focus();
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].onclick = expandPhoto;
        imgs[i].onkeydown = expandPhoto;
    }
}

/*expndPhoto创建了一个id="overlay"，class="overlay"的div，
再给div创建了一个id="expand"，class="overlayimg"的img标签，
overlay和overlayimg类选择器定义如下：*/
function expandPhoto() {
    var overlay = document.createElement("div");
    overlay.setAttribute("id", "overlay");
    overlay.setAttribute("class", "overlay");
    document.body.appendChild(overlay);
    var img = document.createElement("img");
    img.setAttribute("id", "expand")
    img.setAttribute("class", "overlayimg");
    img.src = this.getAttribute("src");
    document.getElementById("overlay").appendChild(img);
    img.onclick = restore;
}

/*给创建的img标签的onclick指定了restore方法，该方法实现了点击大图回到图片列表的功能*/
function restore() {
    document.body.removeChild(document.getElementById("overlay"));
    document.body.removeChild(document.getElementById("expand"));
}