function menuToggle(){
    let menuArea = document.getElementById("menu_nav");
    if(menuArea.style.display == 'block'){
        menuArea.style.display = 'none';
    } else {
        menuArea.style.display = 'block';
    }
}