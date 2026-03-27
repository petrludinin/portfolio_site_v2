const btn = document.getElementById("themeBtn");

// применяем тему при загрузке страницы
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

if (btn) {
    btn.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }

    });
}
