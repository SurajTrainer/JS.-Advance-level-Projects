let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');

song.onloadeddata = function(){
    progress.max = song.duration;
    progress.value = song.curretTime;
}

function playpause() {
    if (ctrlIcon.classList.contains('pause')) {
        song.pause();
        ctrlIcon.classList.remove('pause')
        ctrlIcon.classList.add('play')
    }else{
        song.play();
        ctrlIcon.classList.add('pause')
        ctrlIcon.classList.remove('play')
    }
}
if (song.play()) {
    setInterval(() => {
            progress.value = song.curretTime;
    },500);
}

progress.onchange = function(){
    song.play();
    song.curretTime = progress.value;
    ctrlIcon.classList.add('pause')
    ctrlIcon.classList.remove('play')
}