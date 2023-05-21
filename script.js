let audioElement = new Audio("1.mp3");
let songIndex = 0;
let masterplay= document.getElementById("masterplay");
let myprogressbar= document.getElementById("myprogressbar");
let songsitems= Array.from(document.getElementsByClassName('songitem'));
let masterSongName= document.getElementById("masterSongName");

let songs= [

    { songname: "Shape of you", filePath: "1.mp3", coverpath: "cover.jpg" },
    { songname: "Electric", filePath: "2.mp3", coverpath: "katyp.jpg" },
    { songname: "Fake a Smile", filePath: "3.mp3", coverpath: "alan.jpg" },
    { songname: "Go Down Eh", filePath: "4.mp3", coverpath: "sean.jpg" },
    { songname: "Jhoota hae versace", filePath: "5.mp3", coverpath: "hindi.jpg" },
    { songname: "Your Power", filePath: "6.mp3", coverpath: "Billie.jpg" },
]

// songItems.forEach(element, i)=>{

//    console.log(element, i);
//    element.getElementsByTagName('img')[0].src=songs[i].filePath;
// }

songsitems.forEach((element, i)=>{

   console.log("make it run");
   console.log(element, i);
   element.getElementsByTagName("img")[0].src= songs[i].coverpath;
   element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
})

//Handle Pause Play Click
masterplay.addEventListener('click', ()=>{

    
     if(audioElement.paused || audioElement.currentTime<=0)
     {
        
        audioElement.play();
        masterplay.classList.remove("fa-play");
        masterplay.classList.add("fa-pause");
     }
     else{

        audioElement.pause();
        masterplay.classList.remove("fa-pause");
        masterplay.classList.add("fa-play");
     }

})

//Listen to Events
audioElement.addEventListener('timeupdate', ()=> {
 //update seekbar
   progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
   myprogressbar.value= progress;

})

myprogressbar.addEventListener('change', ()=> {

    audioElement.currentTime= (myprogressbar.value*audioElement.duration)/100;

})

const makeAllPlays= ()=>{

   Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=> {
      element.classList.remove('fa-pause');
      element.classList.add('fa-play');
   })
}

 Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=> {

   element.addEventListener('click', (e)=>{

       makeAllPlays();
       
       songIndex= parseInt(e.target.id);
       e.target.classList.remove('fa-play');
       e.target.classList.add('fa-pause'); 

       audioElement.src= `${songIndex}.mp3`;
       masterSongName.innerText= songs[songIndex-1].songname;
       audioElement.currentTime=0;
       audioElement.play();
       masterplay.classList.remove('fa-play');
       masterplay.classList.add('fa-pause');                                                          
   })
   
 })

 document.getElementById('next').addEventListener('click', ()=> {

   if(songIndex>=9)
   {
       songIndex = 0;

   }
   else{
      songIndex += 1;
   }
   audioElement.src= `${songIndex}.mp3`;
   masterSongName.innerText= songs[songIndex].songname;
       audioElement.currentTime=0;
       audioElement.play();
       masterplay.classList.remove('fa-play');
       masterplay.classList.add('fa-pause');       
 })

 document.getElementById('previous').addEventListener('click', ()=> {

   if(songIndex<=0)
   {
       songIndex = 0;

   }
   else{
      songIndex -= 1;
   }
   audioElement.src= `${songIndex}.mp3`;
       masterSongName.innerText= songs[songIndex].songname;
       audioElement.currentTime=0;
       audioElement.play();
       masterplay.classList.remove('fa-play');
       masterplay.classList.add('fa-pause');       
 })