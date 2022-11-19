function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase());
}
function logWhisper(string) {
    console.log(string.toLowerCase());
} 
function sayHiToHeadphonedRoommate(string) {
    var unHeard = "I can't hear you!";
    var heard = 'YES INDEED!';
    var dinner = "I would love to!";
    if(string.toLowerCase === string) {
        return unHeard;
    }
    else if(string.toUpperCase === string) {
        return heard;
    }
    else if(("Let's have dinner together!") === string) {
        return dinner;
    }
    

    
}