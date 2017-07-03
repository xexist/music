<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>N8112 - Home Made Garbage Music - </title>

  <!-- Bootstrap core CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">

  <!-- Custom fonts for this template -->
  <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic" rel="stylesheet" type="text/css">
  <link href='https://fonts.googleapis.com/css?family=Cabin:700' rel='stylesheet' type='text/css'>

  <!-- Custom styles for this template -->
  <link href="css/grayscale.css" rel="stylesheet">
  <link href="css/styles.css" rel="stylesheet">

  <!-- Temporary navbar container fix -->
  <style>
  .navbar-toggler {
      z-index: 1;
  }
  
  @media (max-width: 576px) {
      nav > .container {
          width: 100%;
      }
  }
  </style>

</head>
<body id="page-top">

  <!-- Navigation -->
  <nav id="mainNav" class="navbar fixed-top navbar-toggleable-md navbar-light">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarExample" aria-controls="navbarExample" aria-expanded="false" aria-label="Toggle navigation">
        Menu <i class="fa fa-bars"></i>
    </button>
    <div class="container">
      <a class="navbar-brand" href="#page-top">N8112</a>
      <div class="collapse navbar-collapse" id="navbarExample">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#music">Music</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#video">Video</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">About</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Intro Header -->
  <header class="masthead">
    <div class="intro-body">
      <div class="container">
        <div class="row">
          <div class="col-md-5 offset-md-4">
            <h1 class="brand-heading"><img src="img/logo.jpg" alt="N8112" class="mw-100"></h1>
            <p class="intro-text">Music</p>
              <a href="#music" class="btn btn-circle page-scroll">
                <i class="fa fa-angle-double-down animated"></i>
             </a>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- About Section -->
  <section id="music" class="container text-center">
    <h2 class="">Music</h2>
    <div class="row">

<?php
 echo file_get_contents('http://homemadegarbage.0t0.jp/n8112/inc/music-posts.php');
?>

    </div>
    <!--
    <a href="http://startbootstrap.com/template-overviews/grayscale/" class="btn btn-default btn-lg">More Video Page</a>
    -->
  </section>

  <!-- Download Section -->
  <section id="video" class="content-section text-center">
    <div class="download-section">
      <div class="container">
        <h2>Video</h2>
        <p>準備中</p>
        <!--
        <div class="row">
          <div class="col-lg-3 col-md-4 item">
            <a class="thumbnail" href="#">
              <img class="mw-100" src="http://placehold.it/400x300" alt="">
            </a>
          </div>
          <div class="col-lg-3 col-md-4 item">
            <a class="thumbnail" href="#">
              <img class="mw-100" src="http://placehold.it/400x300" alt="">
            </a>
          </div>
          <div class="col-lg-3 col-md-4 item">
            <a class="thumbnail" href="#">
              <img class="mw-100" src="http://placehold.it/400x300" alt="">
            </a>
          </div>
          <div class="col-lg-3 col-md-4 item">
            <a class="thumbnail" href="#">
              <img class="mw-100" src="http://placehold.it/400x300" alt="">
            </a>
          </div>
        </div>
        <a href="http://startbootstrap.com/template-overviews/grayscale/" class="btn btn-default btn-lg">More Video Page</a>
        -->
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="about" class="content-section text-center">
    <div class="row">
      <div class="col-lg-8 offset-md-2">
        <h2>About</h2>
        <p>Home Made Garbage のサイドプロジェクト<br>
          welcome 脳 と ア・ノッキンオンニョ 司による音楽ユニット</p>
        <ul class="list-inline banner-social-buttons">
            <li class="list-inline-item">
              <a href="http://homemadegarbage.0t0.jp/" class="btn btn-default btn-lg" target="_blank"><i class="fa fa-home fa-fw"></i> <span class="network-name">Home Made Garbage</span></a>
            </li>
        </ul>
      </div>
    </div>
  </section>

  <section id="controller">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-6 p-0">
          <div class="d-flex flex-row">
            <div class="p-2">
              <figure class="thumbnail m-0">
                <a href="">
                  <img src="" class="thumbnail">
                </a>
              </figure>
            </div>
            <div class="p-2">
              <div class="title">
                <a href="">
                  Song Title
                </a>
              </div>
              <div class="name">Artist Name</div>
            </div>
          </div>
        </div>

        <div class="col-md-3 col-6 pt-4">
          <div class="row">
            <div class="col-2">
              <i id="play" class="fa fa-play fa-2x" aria-hidden="true"></i>
            </div>
            <div class="col-2">
              <i class="fa fa-step-backward fa-2x" aria-hidden="true"></i>
            </div>
            <div class="col-2">
              <i class="fa fa-step-forward fa-2x" aria-hidden="true"></i>
            </div>
            <div class="col-2">
              <i class="fa fa-repeat fa-2x" aria-hidden="true"></i>
            </div>
            <div class="col-2">
              <i class="fa fa-random fa-2x" aria-hidden="true"></i>
            </div>
          </div>
        </div>

        <div class="col-md-6 mt-4 p-0">
          <div id="timeline"></div>
          <div id="fader"></div>
          <div class="d-flex justify-content-between">
            <div id="currentTime" class="p-0">0:00</div>
            <div id="duration" class="p-0">0:00</div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <div class="container text-center">
      <p>Copyright &copy; N8112</p>
    </div>
  </footer>

  <!-- Bootstrap core JavaScript -->
  <script
  src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
  <script src="vendor/tether/tether.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>

  <!-- Plugin JavaScript -->
  <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

  <!-- Custom scripts for this template -->
  <script src="js/grayscale.js"></script>
  <script src="js/audio.js"></script>

  <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-76849716-1', 'auto');
    ga('send', 'pageview');
  </script>

  <!-- YouTube -->
  <script src="https://www.youtube.com/iframe_api"></script>
  <script>  
    function onYouTubeIframeAPIReady() {
      ytPlayer = new YT.Player(
        'masthead', // 埋め込む場所をIDで設定
        {
          videoId: 'Adut7kwNfSs', // YouTubeのIDを指定
          playerVars: {
              loop: 1,//0:ループしない 1:ループする 1の場合playlist設定必須
              controls: 0,//コントローラー無し
              autoplay: 1,//オートプレイ
              showinfo: 0//動画タイトルなど表示しない
          },
          events: {
              'onReady': onPlayerReady
          }
        }
      );
    }
    //プレイ準備完了後
    function onPlayerReady(event) {
      event.target.playVideo();
      event.target.mute();
    }
  </script>


</body>
</html>
