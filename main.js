function saythatwaseasy(){
 var thatwaseasy = new Audio ("EasyNorm.mp3")
thatwaseasy.play()   
}

function delegateKeypress(event) {
   if (event.charCode == 97) {
       saythatwaseasy()
       
   }
}
$("#easy").on("click", saythatwaseasy)

$(document).keypress(delegateKeypress)
