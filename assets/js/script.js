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