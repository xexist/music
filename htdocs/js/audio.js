
var audio = new Audio();
var currentTime = 0;
var duration;

var isPlaying = true;

var controller = document.getElementById('controller');
var timeline = 'timeline';

// 再生バーに再生位置のセット
function setCurrentTime() {
  currentTime = audio.currentTime;
  document.getElementById("currentTime").innerHTML = time(Math.round(currentTime));
  document.getElementById("fader").style.marginLeft = (currentTime / duration) * 100 + "%";
}
// 再生バーの描画
function draw() {
  requestId = window.requestAnimationFrame(this.draw.bind(this));
  if ( isPlaying ) {
    setCurrentTime();
//    console.log((currentTime / duration) * 100);    
  }
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


/**
 * Event
 */
// バーのクリック
document.getElementById(timeline).addEventListener( "click", function( e ) {
  var mouseX = e.pageX;
  var element = document.getElementById(timeline) ;
  var rect = element.getBoundingClientRect() ;
  var positionX = rect.left + window.pageXOffset ;  // 要素のX座標
  var w = element.offsetWidth;  // 要素の幅
  var offsetX = mouseX - positionX ;
  audio.currentTime = currentTime = duration * (offsetX / w);
  setCurrentTime();
});

(function($) {
  var item = $('#music .item');
  var length = item.length - 1;
  var id = -1;
  var requestId;
  var random = false;

  $(item).click(function(){
    var index = $(item).index(this);
    select(index);
  });
  $('#play').click(function(){
    if (id >= 0) {
      select(id);
    }
  });
  $('.fa-step-backward').click(function(){
    console.log('prev');
    prev();
  });
  $('.fa-step-forward').click(function(){
    console.log('next');
    next();
  });
  $('.fa-repeat').click(function(){
    if (audio.loop) {
      audio.loop = false;
      $(this).css('color','black');
    } else {
      audio.loop = true;
      $(this).css('color','#5bc0de');
    }
  });
  $('.fa-random').click(function(){
    if (random) {
      random = false;
      $(this).css('color','black');
    } else {
      random = true;
      $(this).css('color','#5bc0de');
    }
  });

  select(0);

  // 再生・一時停止
  function play() {
    var classPlay = 'fa-play';
    var classPause = 'fa-pause';

    var classPlayCircle = 'fa-play-circle';
    var classPauseCircle = 'fa-pause-circle-o';

    console.log(isPlaying);
    if (isPlaying) {
      audio.pause();
      window.cancelAnimationFrame(requestId);
      $(item[id]).find('.thumbnail i').removeClass(classPauseCircle).addClass(classPlayCircle);
      $(controller).find('#play').removeClass(classPause).addClass(classPlay);      
      $(item[id]).removeAttr('id');
      isPlaying = false;
    } else {
      audio.play();
      draw();
      $(item[id]).find('.thumbnail i').removeClass(classPlayCircle).addClass(classPauseCircle);
      isPlaying = true;
      $(controller).find('#play').removeClass(classPlay).addClass(classPause);      
    }
  }

  // 曲選択
  function select(i) {
    if ( id == i ) {
      play();
      return;
    }
    if (id >= 0) {
      $(item[id]).removeAttr('id');
      isPlaying = false;
    }
    id = i;
    $(item[id]).attr('id','playing');

    audio.currentTime = 0;
    setCurrentTime();


    // 曲情報取得
    var thumbnail = $(item[id]).find('.thumbnail img').attr('src');
    var title = $(item[id]).find('.title').text();
    var name = $(item[id]).find('.name').text();
    var url = $(item[id]).find('a').attr('href');
    // 曲情報をControllerにセット
    console.log(thumbnail);
    $(controller).find('.thumbnail img').attr('src',thumbnail);
    $(controller).find('.title a').text(title);
    $(controller).find('.name').text(name);
    $(controller).find('a').attr('href',url);
    // 画像をfaviconにセット
 //   document.head.removeChild(document.getElementById("favicon"));
//    link.href = cover;
//    document.head.appendChild(link);
    // meta title に曲名セット
//    document.title = title + " by " +  artist;

    // audio 読み込み＿再生
    audio.src = $(item[id]).attr('data-file');
    audio.load();
    audio.addEventListener("loadedmetadata", function() {
      duration = audio.duration;
      document.getElementById("duration").innerHTML = time(Math.round(duration));
    });
    // 曲終了後の次の曲セット
    audio.addEventListener("ended", function() {
      next();
    });
    play();
  }



  // 前の曲へ
  function prev() {
    var i;
    if (random) {
      i = Math.round( Math.random()*length );
    } else {
      if (id <= 0) {
        i = length;
      } else {
        i = id - 1;
      }      
    }
    select(i);
  }
  // 次の曲へ
  function next() {
    var i;
    if (random) {
      i = Math.round( Math.random()*length );
    } else {
      if (id >= length) {
        i = 0;
      } else {
        i = id + 1;
      }
    }
    select(i);
  }



})(jQuery); // End of use strict


