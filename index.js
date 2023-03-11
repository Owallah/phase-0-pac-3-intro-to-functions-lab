function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    console.log(string.toUpperCase());
}

function logWhisper(string){
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string){
    // if(string === string.toLowerCase()){
    //     return "I can\'t hear you!"
    // }
    // else if(string === string.toUpperCase()){
    //     return string = "YES INDEED!";
    // }
    // else if(string === "Let\'s have dinner together!"){
    //     return string = "I would love to!";
    // }

    switch (string) {
        case string.toLowerCase():
            return "I can\'t hear you!";
        
        case string.toUpperCase():
            return "YES INDEED!";
            
        case "Let\'s have dinner together!":
            return "I would love to!";
            
        default:
            break;
    }
}