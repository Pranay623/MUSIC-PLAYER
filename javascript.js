const music = new Audio('audio/1.mp3');
music.play();

const songs=[
    {
        id: 1,
        songName:'Untill I Found Her<br><div class="subtitle">Stephen Sanchez</div>',
        poster: "IMAGES/1.webp",
    },
    {
        id: 2,
        songName:'Lalkaara<br><div class="subtitle">Diljit Dosanjh</div>',
        poster: "IMAGES/2.webp",
    },
    {
        id: 3,
        songName:'Admirin You<br><div class="subtitle">Karan Aujla</div>',
        poster: "IMAGES/3.webp",
    },
    {
        id: 4,
        songName:'Lemonade<br><div class="subtitle">Diljit Dosanjh</div>',
        poster: "IMAGES/4.webp",
    },
    {
        id: 5,
        songName:'Dhundhla<br><div class="subtitle">Talwinder</div>',
        poster: "IMAGES/5.webp",
    },
    {
        id: 6,
        songName:'Aam Jahe Munde<br><div class="subtitle">Parmish Verma</div>',
        poster: "IMAGES/6.webp",
    },
    {
        id: 7,
        songName:'Tose Naina<br><div class="subtitle">Arijit Singh</div>',
        poster: "IMAGES/7.webp",
    },
    {
        id: 8,
        songName:'Tera Rasta Main Chodun Na<br><div class="subtitle">AMITABH BHATTACHARYA</div>',
        poster: "IMAGES/8.webp",
    },
    {
        id: 9,
        songName:'FE!N<br><div class="subtitle">Travis Scott</div>',
        poster: "IMAGES/9.webp",
    },
    {
        id: 10,
        songName:'Popular<br><div class="subtitle">The Weeknd</div>',
        poster: "IMAGES/10.webp",
    },
    {
        id: 11,
        songName:'Choo Lo<br><div class="subtitle">The Local Train</div>',
        poster: "IMAGES/11.webp",
    },
    {
        id: 12,
        songName:'ILuvUIHateU<br><div class="subtitle">Playboi Carti</div>',
        poster: "IMAGES/12.webp",
    },
    {
        id: 13,
        songName:'Ankhian Gulab<br><div class="subtitle">Mitraz</div>',
        poster: "IMAGES/13.webp",
    },
    {
        id: 14,
        songName:'Rage<br><div class="subtitle">Playboi Carti</div>',
        poster: "IMAGES/14.webp",
    },
    {
        id: 15,
        songName:'Redrum<br><div class="subtitle">Travis Scott</div>',
        poster: "IMAGES/15.webp",
    },
    {
        id: 16,
        songName:'Reminder<br><div class="subtitle">Travis Scott</div>',
        poster: "IMAGES/16.webp",
    },
    {
        id: 17,
        songName:'Superman<br><div class="subtitle">Travis Scott</div>',
        poster: "IMAGES/17.webp",
    },
    
]


Array.from(document.getElementsByClassName('songitem')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
} )

Array.from(document.getElementsByClassName('content')).forEach((e, i) =>{
    
    e.getElementsByTagName('h1')[0].innerHTML = songs[i].songName;
} )

let masterPlay = document.getElementById('masterPlay');
let masterPause = document.getElementById('masterPause');

masterPlay.addEventListener('click', () => {
    if (music.paused && music.currentTime >= 0) {
        music.play();  
        
        masterPlay.classList.remove('ph-play');
        masterPlay.classList.add('ph-pause');

       
    }
    else {
        
        music.pause();

        masterPlay.classList.remove('ph-pause');
        masterPlay.classList.add('ph-play');

        
    }
});

const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songitem')).forEach((el) =>{
        el.styles.background = 'rgb(105, 105, 105, .0)'
    })
}
let index = 0;
let poster_master_play = document.getElementById('poster_master_play');

Array.from(document.getElementsByClassName('ph-fill')).forEach((e) =>{
    e.addEventListener('click', (el)=>{
        let index = el.target.id;
        console.log(index);
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `IMAGES/${index}.webp`;
        music.play();
        masterPlay.classList.remove('ph-play');
        masterPlay.classList.add('ph-pause');

        let  songTitles = songs.filter((els) => {
            return els.id == index;
        })
        songTitles.forEach(elss => {
            let { songName,poster } = elss;
            title.innerHTML = songName;
            poster_master_play.src = poster;
        })
        makeAllBackground()
        Array.from(document.getElementsByClassName('songitem'))[index-1].styles.background = 'rgb(105, 105, 105, .1)';
        makeAllplays();
        el.target.classList.remove('ph-play');
        el.target.classList.add('ph-pause');
        
    })
} );

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () =>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur/60);
    let sec1 = Math.floor(music_dur%60);

    if (sec1 < 10){
        sec1 = `0${sec1}`;
    }

    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr/60);
    let sec2 = Math.floor(music_curr%60);
    if (sec2< 10){
        sec2 = `0${sec2}`;
    }

    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_dur)*100);
    seek.value = progressBar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change',() => {
    music.currentTime = seek.value * music.duration / 100;
})

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change',() =>{
    if(vol.value == 0){
        vol_icon.classList.remove('ph-speaker-simple-high');
        vol_icon.classList.remove('ph-speaker-simple-low');
        vol_icon.classList.add('ph-speaker-simple-none');
    }
    if(vol.value > 0){
        vol_icon.classList.remove('ph-speaker-simple-high');
        vol_icon.classList.add('ph-speaker-simple-low');
        vol_icon.classList.remove('ph-speaker-simple-none');
    }
    if(vol.value > 50){
        vol_icon.classList.add('ph-speaker-simple-high');
        vol_icon.classList.remove('ph-speaker-simple-low');
        vol_icon.classList.remove('ph-speaker-simple-none');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -=1;
    if (index < 1){
        index = Array.from(document.getElementsByClassName('songitem')).length;
    }
    music.src = `audio/${index}.mp3`;
        poster_master_play.src = `IMAGES/${index}.webp`;
        music.play();
        // masterPlay.classList.remove('ph-play');
        // masterPlay.classList.add('ph-pause');

        let  songTitles = songs.filter((els) => {
            return els.id == index;
        })
        songTitles.forEach(elss => {
            let { songName,poster } = elss;
            title.innerHTML = songName;
            poster_master_play.src = poster;
        })
        makeAllBackground()
        Array.from(document.getElementsByClassName('songitem'))[index-1].styles.background = 'rgb(105, 105, 105, .1)';
        makeAllplays();
        el.target.classList.remove('ph-play');
        el.target.classList.add('ph-pause');
});

next.addEventListener('click', ()=>{
    index ++;
    if (index > Array.from(document.getElementsByClassName('songitem')).length){
        index =1;
    }
    music.src = `audio/${index}.mp3`;
        poster_master_play.src = `IMAGES/${index}.webp`;
        music.play();
        // masterPlay.classList.remove('ph-play');
        // masterPlay.classList.add('ph-pause');

        let  songTitles = songs.filter((els) => {
            return els.id == index;
        })
        songTitles.forEach(elss => {
            let { songName,poster } = elss;
            title.innerHTML = songName;
            poster_master_play.src = poster;
        })
        makeAllBackground()
        Array.from(document.getElementsByClassName('songitem'))[index-1].styles.background = 'rgb(105, 105, 105, .1)';
        makeAllplays();
        el.target.classList.remove('ph-play');
        el.target.classList.add('ph-pause');
});








let pop_song_left=document.getElementById('pop_song_left');
let pop_song_right=document.getElementById('pop_song_right');
let pop=document.getElementsByClassName('pop')[0];


pop_song_right.addEventListener('click', ()=>{
    pop.scrollLeft += 330;
});
pop_song_left.addEventListener('click', ()=>{
    pop.scrollLeft -= 330;
});
let pop_art_left=document.getElementById('pop_art_left');
let pop_art_right=document.getElementById('pop_art_right');
let item=document.getElementsByClassName('item')[0];


pop_art_right.addEventListener('click', ()=>{
    item.scrollLeft += 330;
});
pop_art_left.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
});


