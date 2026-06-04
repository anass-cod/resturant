onload = function () {
    let images = document.querySelectorAll(".img");
    let positions = ["apres", "vu", "avant"];

    function updateClasses() {
        images.forEach((img, i) => {
            img.classList.remove("apres", "vu", "avant");
            img.classList.add(positions[i]);
        });
    }

    setInterval(() => {

        // نديرو rotation ديال positions
        positions.unshift(positions.pop());

        updateClasses();

    }, 3000);
    let menu = [
        { img: "images/menu/pizza-margarita.jpg", titre: "Pizza Margherita", prix: "45DH" },
        { img: "images/menu/Pizza-4-Fromages.jpg", titre: "Pizza 4 Fromages", prix: "60DH" },
        { img: "images/menu/Burger-Chicken.jpg", titre: "Burger Chicken", prix: "40DH" },
        { img: "images/menu/Burger-Classic.jpg", titre: "Burger Classic", prix: "45DH" },
        { img: "images/menu/Sandwich-Mixte.jpg", titre: "Sandwich Mixte", prix: "30DH" },
        { img: "images/menu/Tacos-poulet.jpg", titre: "Tacos poulet", prix: "30DH" },
        { img: "images/menu/Tajine-poulet.jpg", titre: "Tajine poulet", prix: "55DH" },
        { img: "images/menu/Couscous-Royal.jpg", titre: "Couscous Royal", prix: "70DH" },
    ]
    let menuSort = [0, 1, 2, 3, 4, 5, 6, 7]
    let cards = document.getElementById("cards")
    menuSort.sort(() => Math.random() - 0.5);

    function read() {
        cards.innerHTML = ""
        let content = ""
        for (let i = 0; i < menu.length; i++) {
            content += `
               <div>
                    <img src="${menu[menuSort[i]].img}">
                    <h2>${menu[menuSort[i]].titre}</h2>
                    <h3>prix : <span>${menu[menuSort[i]].prix}</span></h3>
                </div>
        `
        } cards.innerHTML = content
    }
    read()
    window.addEventListener("scroll", () => {
        let header = document.getElementById("header");

        header.style.top = "0";

        clearTimeout(window.scrollTimer);

        window.scrollTimer = setTimeout(() => {
            if (scrollY > innerHeight - 150) {
                header.style.top = "-100px";
            }
        }, 3000);

        sectionAndMenu();
    });
    let sections = document.querySelectorAll("section")
    function sectionAndMenu() {
        sections.forEach(section => {
            let bottom = section.getBoundingClientRect().bottom
            let top = section.getBoundingClientRect().top
            if (bottom < innerHeight + 100 && top > -100) {
                let as = document.querySelectorAll(`.${section.id}`)[0]
                document.querySelectorAll("a").forEach(aa => {
                    aa.style.textDecoration = "none"
                })
                as.style.textDecoration = "underline"
            }
            if (top < innerHeight - 300) {
                section.style.opacity = "1"
                section.style.transform = "translateY(0px)"
                section.style.transform = "translatex(0px)"

            }
        })
    }
    onscroll = sectionAndMenu
    sectionAndMenu()

}