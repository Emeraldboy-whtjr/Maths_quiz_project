function adduser(){
    player_1UserName = document.getElementById("player1_username").value;
    player_2UserName = document.getElementById("player2_username").value;
    
    localStorage.setItem("player_1",player_1UserName);
    localStorage.setItem("player_2",player_2UserName);

    window.location = "quiz_game_page.html";
}