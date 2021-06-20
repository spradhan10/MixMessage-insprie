// storing inspring message 
var inMessage1 = "The only way to win with a toxic person, is not to play.";
var inMessage2 = "Kindness makes you the most beautiful person in the world";
var inMessage3 = "You're Stepping into The Most successful season of your life. Claim it.";
var inMessage4 = "You deserve to feel the same love you give"
var inMessage5 = "Ignoring your partner's needs and still expecting a happy relationship, is like ignoring your plants need water and till expecting a beautiful garden.";
        
        function imessage(){
            var i, text;
                    //testing 
                    //i = 1;
                i = Math.floor(Math.random() * 5)+1
                // checking the number 
                //document.getElementById("num").innerHTML = i;
                

                switch(i)
                {
                    case 1: 
                    text = inMessage1;
                    break;
                    case 2: 
                    text = inMessage2;
                    break;
                    case 3: 
                    text = inMessage3;
                    break;
                    case 4: 
                    text = inMessage4;
                    break;
                    case 5: 
                    text = inMessage5;
                    break;
                    default:
                    text = "You are beautiful";


                }
                document.getElementById("message").innerHTML= text;
                
                


            }