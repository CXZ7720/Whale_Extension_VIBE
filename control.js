$(document).ready(function(){
    setTimeout(() => {
        modify_play();
    }, 3000);

})

function modify_play(){
    // var obj = $("object")[0].innerHTML;
    $('object').contents().find('.player_controller').style.height = '81px';



    // $(".player_controller").style.height = '81px';
    // $(".volume_area").style.display = 'block';
    // $(".volume_area").style.top = '50px';
    // $(".volume_area").style.right = '88px';
    // $(".song_info").style.marginTop = '18px';
}
