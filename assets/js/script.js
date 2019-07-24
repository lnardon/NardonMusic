let isPlaying = false
function play1 (){
    if (isPlaying){
        document.getElementById('player1').pause();
        isPlaying = false;
        document.getElementById('pause1').style.display = 'none';
        document.getElementById('play1').style.display = 'flex';
    } else {
        document.getElementById('player1').play();
        isPlaying = true;
        document.getElementById('pause1').style.display = 'flex';
        document.getElementById('play1').style.display = 'none';
    }
}

function play2 (){
    if (isPlaying){
        document.getElementById('player2').pause();
        isPlaying = false;
        document.getElementById('pause2').style.display = 'none';
        document.getElementById('play2').style.display = 'flex';
    } else {
        document.getElementById('player2').play();
        isPlaying = true;
        document.getElementById('pause2').style.display = 'flex';
        document.getElementById('play2').style.display = 'none';
    }
}

function play3 (){
    if (isPlaying){
        document.getElementById('player3').pause();
        isPlaying = false;
        document.getElementById('pause3').style.display = 'none';
        document.getElementById('play3').style.display = 'flex';
    } else {
        document.getElementById('player3').play();
        isPlaying = true;
        document.getElementById('pause3').style.display = 'flex';
        document.getElementById('play3').style.display = 'none';
    }
}

function play4 (){
    if (isPlaying){
        document.getElementById('player4').pause();
        isPlaying = false;
        document.getElementById('pause4').style.display = 'none';
        document.getElementById('play4').style.display = 'flex';
    } else {
        document.getElementById('player4').play();
        isPlaying = true;
        document.getElementById('pause4').style.display = 'flex';
        document.getElementById('play4').style.display = 'none';
    }
}

function play5 (){
    if (isPlaying){
        document.getElementById('player5').pause();
        isPlaying = false;
        document.getElementById('pause5').style.display = 'none';
        document.getElementById('play5').style.display = 'flex';
    } else {
        document.getElementById('player5').play();
        isPlaying = true;
        document.getElementById('pause5').style.display = 'flex';
        document.getElementById('play5').style.display = 'none';
    }
}

function getInfo(url){
    var win = window.open(url, '_blank');
    win.focus();
}