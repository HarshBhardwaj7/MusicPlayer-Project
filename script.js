let audioElement = new Audio("1.mp3");
let songIndex = 0;
let masterplay= document.getElementById("masterplay");
let myprogressbar= document.getElementById("myprogressbar");
let songsitems= Array.from(document.getElementsByClassName('songitem'));
let masterSongName= document.getElementById("masterSongName");

let songs= [

    { songname: "Shape of you", filePath: "E:\\spotify\\1.mp3", coverpath: "E:\\spotify\\cover.jpg" },
    { songname: "Electric", filePath: "E:\\spotify\\2.mp3", coverpath: "E:\\spotify\\katyp.jpg" },
    { songname: "Fake a Smile", filePath: "E:\\spotify\\3.mp3", coverpath: "E:\\spotify\\alan.jpg" },
    { songname: "Go Down Eh", filePath: "E:\\spotify\\4.mp3", coverpath: "E:\\spotify\\sean.jpg" },
    { songname: "Jhoota hae versace", filePath: "E:\\spotify\\5.mp3", coverpath: "E:\\spotify\\hindi.jpg" },
    { songname: "Your Power", filePath: "E:\\spotify\\6.mp3", coverpath: "E:\\spotify\\Billie.jpg" },
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

       audioElement.src= `E:\\spotify\\${songIndex}.mp3`;
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
   audioElement.src= `E:\\spotify\\${songIndex}.mp3`;
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
   audioElement.src= `E:\\spotify\\${songIndex}.mp3`;
       masterSongName.innerText= songs[songIndex].songname;
       audioElement.currentTime=0;
       audioElement.play();
       masterplay.classList.remove('fa-play');
       masterplay.classList.add('fa-pause');       
 })