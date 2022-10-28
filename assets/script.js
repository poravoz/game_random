window.onload = function() {
    var button_generate = document.getElementById("button_generate");
    var div_round = document.getElementById("div_round");
    var div_player = document.getElementById("div_player");
    var div_player_score = document.getElementById("div_player_score");
    var div_computer = document.getElementById("div_computer");
    var div_computer_score = document.getElementById("div_computer_score");
    var div_draw = document.getElementById("div_draw");
    var who_has_won = document.getElementById("who_has_won");
    var button_reload = document.getElementById("button_reload");


    var your_name = prompt("Enter your name:");
    var choose_name = document.getElementById("choose_name");

    if(your_name == false || your_name == null)
    choose_name.innerHTML = "Player:";
    else choose_name.innerHTML = your_name + ":";
    
    var player = 0;
    var computer = 0;
    var round = 0;

    button_generate.onclick = function() {
        round++;
        div_round.innerHTML = round;

        div_draw.innerHTML = "";

        div_player.innerHTML = get_random_number();
        div_computer.innerHTML = get_random_number();

        if(div_player.innerHTML > div_computer.innerHTML) {
            player += 1;
            div_player_score.innerHTML = "Score: " +  player;
        }
        else  if(div_player.innerHTML < div_computer.innerHTML) {
            computer += 1;
            div_computer_score.innerHTML = "Score: " + computer;
        }
        else { 
            div_draw.innerHTML = "Draw";
        }

        if(player == 3 || computer == 3)
        {
            if(player > computer)
            who_has_won.innerHTML = choose_name.innerHTML + " Won";
            else {
                who_has_won.innerHTML = "Computer Won";
            }

            $(button_generate).attr("disabled", true);
            $(button_reload).attr("disabled", false);
        }

        button_reload.onclick = function() {
            location.reload();
        }
    }

    
function get_random_number() {
    const min = 1;
    const max = 3;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

}
