var imagenames = ["bere", "biro", "caco", "cera", "dadi", "dama", "fumo", "gola", "moto", "nano", "nave", "pane", "pepe", "pino", "rana", "remo", "rosa", "sega", "tana", "toro", "zero"];
var lastrng = 0;
var imagerng;
var correct;


function newimage(){
    while(true){
        imagerng = Math.floor(Math.random() * 100);

        if(imagerng <= 21){
            if(imagerng != 0){
                if(imagerng != lastrng){
                    if(imagerng != undefined){
                        lastrng = imagerng;
                        document.getElementById('image').setAttribute("src", './res/images/' + imagenames[imagerng] + '.png');
                        if(document.getElementById('image').getAttribute("src") == "./res/images/undefined.png"){
                            newimage();
                            break;
                        }
                        break;
                    }
                }
            }
        }
    }
}

function check(){
    if(document.getElementById('text').value.length == 4){
        document.getElementById('text').setAttribute("readonly", true);
        if(document.getElementById('text').value.toLowerCase() == imagenames[imagerng]){
            correct = true;
        }
        else{
            correct = false;
        }
        setTimeout(hidecontrols, 3000);
    }
}

var hidecontrols = function(){

    if(correct){
        document.getElementById('emo').setAttribute("src", './res/smiley/smile' + imagerng + '.jpg');
        console.log("si");
        newimage();

    }
    else{
        document.getElementById('emo').setAttribute("src", './res/ops.JPG');
        console.log("no")
    }


    document.getElementById('image').style.visibility = "hidden";
    document.getElementById('text').style.visibility = "hidden";
    document.getElementById('emo').style.visibility = "visible";
    document.getElementById('text').value = null;

    setTimeout(showcontrols, 3000);
}

var showcontrols = function(){
    document.getElementById('image').style.visibility = "visible";
    document.getElementById('text').style.visibility = "visible";
    document.getElementById('emo').style.visibility = "hidden";
    document.getElementById('text').focus();
    document.getElementById('text').removeAttribute("readonly")

}