const prompt = require("prompt-sync")();

const ho = prompt("ENTER YOUR NAME");
if(ho>33){
    console.log("passed")
}else{
    console.log("fail")
}