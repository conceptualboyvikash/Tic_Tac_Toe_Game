let gamemusic = new Audio('gamemusic.mp3');
let gameover = new Audio('gameover.mp3');
let ting = new Audio('ting.mp3');
let tick = 'X';
let gameoverhuaa=false;
let i=0;
let play=false;
let winner=false;


function reset() {

    let boxarr = document.getElementsByClassName("box");
    for (let i = 0; i < 9; i++) {
        boxarr[i].innerHTML = "";
    }
    tick = 'X';
    gameoverhuaa=false;
    document.querySelector("#trun").innerHTML = "Click play Butoon <br> to play again";
    play=false;
    winner=false;
    i=0;
    document.getElementById("nacho").style.display="none";
    document.getElementById("l1").style.display="none";
    document.getElementById("l1").style.rotate="0deg";
    document.getElementById("l1").style.width="27vw";
    // alert("boooton clicked");


}
function chagetic()
{
    if(tick==='X')
        tick='0';
    else
        tick='X';
}
function checkwin() {
    let boxes = document.getElementsByClassName("box");
    const arr = [
        [0, 1, 2], [3, 4, 5,], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]

    ]
    Array.from(arr).forEach((item) => {
        if ((boxes[item[0]].innerHTML === boxes[item[1]].innerHTML) &&
            (boxes[item[1]].innerHTML === boxes[item[2]].innerHTML) &&
            boxes[item[1]].innerHTML !== '') {
            chagetic();
            document.querySelector("#trun").innerHTML = tick + " Win";
            gameover.play();
            gameoverhuaa= true;
            winner=true;
            document.getElementById("nacho").style.display="inline-block";
           ;
           
           let li= document.getElementById("l1");
           console.log(screen.width);
           if(screen.width> "900")
           {
                if(item[0]==0 && item[1]==1 && item[2]==2)
                {
                        li.style.display="block"
                        li.style.left="16.5vw";
                        li.style.top="9.8vw";
                        li.style.rotate="0deg";
                    
                }
                else if(item[0]==3 && item[1]==4 && item[2]==5)
                {
                        li.style.display="block"
                        li.style.left="16.5vw";
                        li.style.top="19.7vw";
                        li.style.rotate="0deg";
                }
                else if(item[0]==6 && item[1]==7 && item[2]==8)
                {
                        li.style.display="block"
                        li.style.left="16.5vw";
                        li.style.top="29.7vw";
                        li.style.rotate="0deg";
                }
                else if(item[0]==0 && item[1]==3 && item[2]==6)
                {
                        li.style.display="block"
                        li.style.left="6.5vw";
                        li.style.top="20vw";
                        li.style.rotate="90deg";
                      //  li.style.rotate="0deg";
                
                }
                else if(item[0]==1 && item[1]==4 && item[2]==7)
                {
                        li.style.display="block"
                        li.style.left="16.5vw";
                        li.style.rotate="90deg";
                        li.style.top="20vw";
                        
                }
                else if(item[0]==2 && item[1]==5 && item[2]==8)
                {
                        li.style.display="block"
                        li.style.left="26.5vw";
                        li.style.rotate="90deg";
                        li.style.top="20vw";
                }
                else if(item[0]==0 && item[1]==4 && item[2]==8)
                {
                        li.style.display="block"
                        li.style.left="11vw";
                        li.style.width="39vw";
                        li.style.top="20.5vw";
                        li.style.rotate="45deg";


                }
                else if(item[0]==2 && item[1]==4 && item[2]==6)
                {
                        li.style.display="block"
                        li.style.left="9vw";
                        li.style.width="39vw";
                        li.style.top="21vw";
                        li.style.rotate="-45deg";
                }

        }
        
            
            //document.getElementById("#nacho").style.display=block;
        }
        
       
       else if(i==9)
       {
        gameoverhuaa=true;
        
       }

       
        
    })
}


// alert("hellow");

// alert("hellow");




 

document.getElementsByClassName("play")[0].addEventListener("click", reset);
document.getElementsByClassName("play")[1].addEventListener("click", () => {
    play=true;
    if(!gameoverhuaa)
    {
        document.querySelector("#trun").innerHTML = "Turn for " + tick;

    }
    let boxes = document.getElementsByClassName("box");
    // console.log(Array.isArray(boxes));
    
    Array.from(boxes).forEach((item) => {
     
        // console.log("hello")
        //  console.log(item.innerHTML);
        
        item.addEventListener("click", () => {
            // console.log(typeof(item));
            
            if (item.innerHTML === '' && !gameoverhuaa && play) {
                
              //  console.log(tick);
              i++;
                item.innerHTML = tick;
                ting.play();
                chagetic();
                checkwin();
               // console.log(gameover);
                if(!gameoverhuaa)
                {

                    document.querySelector("#trun").innerHTML = "Turn for " + tick;
                }
                else if(gameoverhuaa && !winner)
                {
                    document.querySelector("#trun").innerHTML = "Koi Nahi Jeeta";
                }
               

                //  console.log(item.innerHTML);
               
               
               
                
               


            }
        })
       
       // document.querySelector("#trun").innerHTML = "Turn for " + tick;
    })
});










