function destinationOver(){
    document.getElementById("destination-boxborder").style.display = "block";
}
function destinationOut(){
    document.getElementById("destination-boxborder").style.display = "none";
}
function commentOver(){
    document.getElementById("comment-box").style.display = "block";
}
function commentOut(){
    document.getElementById("comment-box").style.display = "none";
}
function picOver(){
    document.getElementById("picture-box").style.display = "block";
}
function picOut(){
    document.getElementById("picture-box").style.display = "none";
}
var topbutton=1;
$( ".div_button" ).hover(
        function() {
        if(topbutton==1){
        $( this ).animate({ backgroundColor: "#748787" },1000);
        setTimeout(function(){$( ".top-button" ).slideDown("slow");},1000);
        setTimeout(function(){$(".div_button").animate({ backgroundColor: "rgba(255, 255, 255, 0)" });},2000);
        topbutton=0;
        }
        }, function() {
        }
);
