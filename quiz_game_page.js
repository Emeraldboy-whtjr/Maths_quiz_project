var question_turn = "player1";
var answer_turn = "player2";
var player_1_score = 0;
var player_2_score = 0;

player_1_name = localStorage.getItem("player_1");
player_2_name = localStorage.getItem("player_2");

document.getElementById("player_1_name").innerHTML = player_1_name + ":- ";
document.getElementById("player_2_name").innerHTML = player_2_name + ":- ";

document.getElementById("plyr_Q").innerHTML = player_1_name;
document.getElementById("plyr_A").innerHTML = player_2_name;

function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    product = parseInt(number1) * parseInt(number2);

    question_number = "<h3 id='question'>" + number1 + "X" + number2 + "</h3>";
    input_box = "<label>Answer :</label><input id='ans' type='text'>";
    check_button = "<br><h3 id='answer' class='btn btn-info' onclick='Answer()'>Answer</h3>"; 

    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;

    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

function Answer(){
    get_answer = document.getElementById("ans").value;

    if(get_answer == product){
        if(answer_turn == "player1"){
            update_player_1_score = player_1_score + 1;
            document.getElementById("player_1_score").innerHTML = update_player_1_score;
        }
        else{
            update_player_2_score = player_2_score +1;
            document.getElementById("player_2_score").innerHTML = update_player_2_score;
        }
    }
    if(question_turn == "player1"){

        question_turn = "player2";
        document.getElementById("plyr_Q").innerHTML = player_2_name;
        answer_turn = "player1";
        document.getElementById("plyr_A").innerHTML = player_1_name;
    }
    else{
        question_turn = "player1";
        document.getElementById("plyr_Q").innerHTML = player_1_name;
        answer_turn = "player2";
        document.getElementById("plyr_A").innerHTML = player_2_name;
    }

    document.getElementById("ans").value = "";
    document.getElementById("question").innerHTML = "";
}
