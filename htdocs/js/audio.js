var audio = new Audio();
var currentTime = 0;
var duration;

var item = document.getElementsByClassName("item");
var length = item.length - 1;
var id = 0;
var requestId;

// favicon
document.head = document.head || document.getElementsByTagName("head")[0];
var link = document.createElement("link");
link.id = "favicon";
link.rel = "shortcut icon";

// URLからID
if (1 < document.location.search.length) {
  id = document.location.search.substring(1);
}
// 曲選択
select(id);

/**
* function
*/
// rprefix
var requestAnimationFrame = window.requestAnimationFrame ||
　　　　　　　　　　　　　　　　　　　window.mozRequestAnimationFrame ||
                          　window.webkitRequestAnimationFrame ||
　　　　　　　　　　　　　　　　　　　window.msRequestAnimationFrame;
window.requestAnimationFrame = requestAnimationFrame;

var cancelAnimationFrame = window.cancelAnimationFrame ||
　　　　　　　　　　　　　　　　　　　window.mozcancelAnimationFrame ||
                          　window.webkitcancelAnimationFrame ||
　　　　　　　　　　　　　　　　　　　window.mscancelAnimationFrame;
window.cancelAnimationFrame = cancelAnimationFrame;

// 曲選択
function select(i) {
  // 現在選択中を解除
  var current = document.getElementById("current");
  if (current) {
    current.removeAttribute("id");
  }

  id = i;
  audio.currentTime = 0;
  item[i].setAttribute("id","current");
  setCurrentTime();

  // 曲情報取得
  var title = item[i].getAttribute("data-title");
  var artist = item[i].getAttribute("data-artist");
  var cover = item[i].getElementsByTagName("img")[0].src;
  // 曲情報をHTMLにセット
  document.getElementById("title").innerHTML = title;
  document.getElementById("artist").innerHTML = artist;
  document.getElementById("cover").src = cover;
  // 画像をfaviconにセット
  document.head.removeChild(document.getElementById("favicon"));
  link.href = cover;
  document.head.appendChild(link);
  // meta title に曲名セット
  document.title = title + " by " +  artist;

  // audio 読み込み
  audio.src = item[i].getAttribute("data-file");
  audio.load();
  audio.addEventListener("loadedmetadata", function() {
    duration = audio.duration;
    document.getElementById("duration").innerHTML = time(Math.round(duration));
  });
  audio.addEventListener("ended", function() {
    select(i+1);
  });
  // 再生中であればそのまま再生
  if (document.getElementById("play").innerHTML == "||") {
    audio.play();
  }
}
// 再生バーに再生位置のセット
function setCurrentTime() {
  currentTime = audio.currentTime;
  document.getElementById("currentTime").innerHTML = time(Math.round(currentTime));
  document.getElementById("fader").style.left = (currentTime / duration) * 100 + "%";
}
// 再生バーの描画
function draw() {
  requestId = window.requestAnimationFrame(this.draw.bind(this));
  console.log((currentTime / duration) * 100);
  setCurrentTime();
};
// 時間
function time(t) {
  var m = t % 3600 / 60 | 0;
  var s = t % 60;
  return m + ":" + padZero(s);
  function padZero(v) {
    if (v < 10) {
      return "0" + v;
    } else {
      return v;
    }
  }
}
// 再生
function play(){
  if (audio.paused) {
    audio.play();
    draw();
    document.getElementById("play").innerHTML = "||";
  } else {
    audio.pause();
    document.getElementById("play").innerHTML = "▶";
    window.cancelAnimationFrame(requestId);
  }
}
// 前の曲へ
function prev() {
  if (id <= 0) {
    id = length;
  } else {
    id -= 1;
  }
  select(id);
}
// 次の曲へ
function next() {
  if (id >= length) {
    id = 0;
  } else {
    id += 1;
  }
  select(id);
}
function loop() {
  // ループ再生を有効
  if (audio.loop) {
    audio.loop = false;
    document.getElementById("loop").style.color = "white";
  } else {
    audio.loop = true;
    document.getElementById("loop").style.color = "red";    
  }
}

/**
 * Event
 */
// バーのクリック
document.getElementById( "time" ).addEventListener( "click", function( e ) {
  var mouseX = e.pageX;
  var element = document.getElementById( "time" ) ;
  var rect = element.getBoundingClientRect() ;
  var positionX = rect.left + window.pageXOffset ;  // 要素のX座標
  var w = element.offsetWidth;  // 要素の幅
  var offsetX = mouseX - positionX ;
  audio.currentTime = currentTime = duration * (offsetX / w);
  setCurrentTime();
});


(function($) {

})(jQuery); // End of use strict

