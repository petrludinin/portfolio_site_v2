const btn = document.getElementById("themeBtn");

// проверяем сохраненную тему при загрузке страницы
if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
}

btn.onclick = function(){

    document.body.classList.toggle("dark");

    // если включена темная тема
    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");
    }

}
