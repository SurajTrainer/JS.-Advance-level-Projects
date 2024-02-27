console.log('hey are you working...');
let currentsong =  new Audio;
let song;


function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}

async function getSong() {
    // let a = await fetch('http://127.0.0.1:5500/song/')
    let a = await fetch('http://127.0.0.1:5500/js%20spotify%20project/song/')
    let songData = await a.text();
    let div = document.createElement('div')
    div.innerHTML = songData;
    let as = div.getElementsByTagName('a')
    song = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            song.push(element.href.split('/song/')[1])
        }
    }
    return song;
}

const playMusic = (track,pause = true) => {
    currentsong.src = '/song/' + track
    if (!pause) {
        currentsong.play();
        play.src = 'img/pause.svg'
    }
    document.querySelector('.songinfo').innerHTML = track
    document.querySelector('.songtime').innerHTML = '00:00 / 00:00'
}

async function main() {

    // get the list of all song..
    let song = await getSong();
    playMusic(song[0],true)
    // console.log(song);

    // show all the song in the playlist
        let songUl = document.querySelector('.songList').getElementsByTagName('ul')[0]
        for (const songs of song) {
            // let li = document.createElement('li')
            // li.innerHTML = song
            // songUl.appendChild(li) + ` <li> ${songs.replace('%20', ' ')} </li>`;
            songUl.innerHTML = songUl.innerHTML + 
            `  <li>
            <img class="invert" src="img/music.svg" alt="">
            <div class="info">
                <div>${songs}</div>
                <div>Song Artist</div>
            </div>
            <div class="playnow">
                <span>play now</span>
                <img class="invert" src="img/play.svg" alt="">
            </div>
        </li>`;
        }

        // Attach the event listner with every li
        Array.from(document.querySelector('.songList').getElementsByTagName('li')).forEach((e) => {
           e.addEventListener("click", element => {
            // console.log(e.querySelector('.info').firstElementChild.innerHTML);
            playMusic(e.querySelector('.info').firstElementChild.innerHTML)
           })
        })
        

            // Attach an  event listner to play, preview and next
            play.addEventListener('click', () => {
                if (currentsong.paused){
                    currentsong.play()
                    play.src = 'img/pause.svg'
                }else{
                    currentsong.pause();
                    play.src = 'img/play.svg'
                }
            })


    // play the first song..
    // var audio =  new Audio(song[0]);
    // audio.play();

    // audio.addEventListener('loadeddata',() => {
    //     let duration = audio.duration
    //     console.log(duration);
    //     console.log(audio.duration,audio.currentSrc,audio.currentTime);
    // })


    // Listen for timeupdate event
    currentsong.addEventListener('timeupdate', ()=> {
        // console.log(currentsong.currentTime, currentsong.duration);
        document.querySelector('.songtime').innerHTML =` ${secondsToMinutesSeconds(currentsong.currentTime)} / ${secondsToMinutesSeconds.duration}`

        document.querySelector('.circle').style.left =  (currentsong.currentTime, currentsong.duration) * 100 +'%';
    })

    // Add an event listner to seekbar
    document.querySelector('.seekbar').addEventListener("click", (e)=> {
        let percent = (e.offsetX/ e.target.getBoundingClientRect().width) * 100;
        document.querySelector('.circle').style.left =  percent + '%';
        currentsong.currentTime = ((currentsong.duration)* percent)/100
    })

    // Add an event lsitener for hamburger..
    document.querySelector('.hamburger').addEventListener("click",()=> {
        document.querySelector('.left').style.left = '0' 
    }) 


    // Add an event lsitener for close button..
    document.querySelector('.close').addEventListener("click",()=> {
        document.querySelector('.left').style.left = '-130%' 
    }) 



     // Add an event listener to previous
     previous.addEventListener("click", () => {
        currentSong.pause()
        console.log("Previous clicked")
        let index = song.indexOf(currentSong.src.split("/").slice(-1)[0])
        if ((index - 1) >= 0) {
            playMusic(song[index - 1])
        }
    })

    // Add an event listener to next
    next.addEventListener("click", () => {
        currentSong.pause()
        console.log("Next clicked")

        let index = song.indexOf(currentSong.src.split("/").slice(-1)[0])
        if ((index + 1) < song.length) {
            playMusic(song[index + 1])
        }
    })


    //  Add an event to volume
    document.querySelector('.range').getElementsByTagName("input")[0].addEventListener("change",(e) => {
        // console.log(e,e.target,e.target.value);
        currentsong.volume = parseInt(e.target.value)/100
        if (currentsong.volume > 0) {
            document.querySelector('.volume>img').src = document.querySelector('.volume>img').src.replace('img/volume.svg' , 'img/mute.svg')
        }
    })


    // Add event listener to mute the track..
    document.querySelector('.volume>img').addEventListener("click", e => {
        // console.log(e.target);
        // console.log('changing', e.target.src);
        if (e.target.src.includes('img/volume.svg')) {
            e.target.src == e.target.replace('img/volume.svg' , 'img/mute.svg')
            currentsong.volume = 0;
            document.querySelector('.range').getElementsByTagName("input")[0].value = 0;
        }else{
            e.target.src == e.target.replace('img/volume.svg' , 'img/mute.svg')
            currentsong.volume = .10;
            document.querySelector('.range').getElementsByTagName("input")[0].value = 10;
        }
    })
}
main();
