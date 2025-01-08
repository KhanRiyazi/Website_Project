const introDiv = document.getElementById("introDiv");
const introString = "O my God listen my pray increase my knowledge day by day. The quick brown fox jumps over the lazy dog. Over success depands upon effectiveness of our personality presentaion skill and communication. Communication there are two types of communication verbal communication and non verbal communication, non-verbal communication is the process of sending and recieving wordless massege by means of facial expression gesture posture and tone of voice.";
const typingSpeed = 50;
//Counts number of typed letters
let letterCount=0;
const typingInterval=setInterval(function(){typeString(introString)}, typingSpeed);
// This function types the specified string
function typeString (str) {
    let letter="";
    letter = str.charAt(letterCount);
    introDiv.innerHTML+=letter;
    letterCount++;
    //Verifying if the last letter has been typed.
    if(letterCount==introString.length){
      clearInterval(typingInterval);
    }
}

