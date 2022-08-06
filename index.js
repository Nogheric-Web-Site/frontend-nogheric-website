
const body = document.querySelector("body");
const navIcon = document.querySelector("#menu-btn");

const iconMenu = document.getElementsByClassName("icon-menu");
const splashScreen = document.getElementsByClassName("splash-screen");

const menuList = document.getElementById("menu");
const lateralSocialMedia = document.getElementById("lateral-social-media");

const language = document.getElementById("language");
const iconLanguage = document.getElementById("icon-language");
const selectLanguage = document.getElementById("select-language");
const optionLanguage1 = document.getElementById("option-language1");
const optionLanguage2 = document.getElementById("option-language2");
const iconPareance = document.getElementById("icon-apareance");

const languageFull = document.getElementById("language-full");
const iconLanguageFull = document.getElementById("icon-language-full");
const selectLanguageFull = document.getElementById("select-language-full");
const optionLanguage1Full = document.getElementById("option-language1-full");
const optionLanguage2Full = document.getElementById("option-language2-full");
const iconPareanceFull = document.getElementById("icon-apareance-full");

const logoHeader = document.getElementById("logo-header");
const pillar1 = document.getElementById("pillar-1");
const pillar2 = document.getElementById("pillar-2");
const pillar3 = document.getElementById("pillar-3");

window.setTimeout(()=>{
    window.scrollTo(0, 0);
    body.style.overflowY='hidden';
    window.location.href="/#";
},0);

window.setTimeout(()=>{
    body.style.removeProperty("overflow-y");
    splashScreen[0].classList.add("none-splash");
},5000);

navIcon.addEventListener('click', ()=>{
    for (let i = 0; i < iconMenu.length; i++) {
        if(iconMenu[i].classList.contains("show-icon")){
            iconMenu[i].classList.remove("show-icon");
            body.style.removeProperty("overflow-y");
        }else{
            iconMenu[i].classList.add("show-icon");
            menuList.classList.toggle("active-menu");
            body.style.overflowY='hidden';
        }
    }
});

language.addEventListener('click',(e)=>{
    selectLanguage.classList.add("active-select-language");
});

languageFull.addEventListener('click',(e)=>{
    selectLanguageFull.classList.add("active-select-language");
});

if(window.matchMedia("(prefers-color-scheme: dark)").matches){
    body.className="dark-mode";
    logoHeader.src = "./assets/Nogheric_logo_dark.png";
    pillar1.src = "./assets/lamp-charge-dark.png";
    pillar2.src = "./assets/people-dark.png";
    pillar3.src = "./assets/award-dark.png";
    iconPareance.src = "./assets/sun.png";
    iconPareanceFull.src = "./assets/sun.png";
}


iconPareance.addEventListener('click',()=>{
    if(body.className==""){
        body.className="dark-mode";
        logoHeader.src = "./assets/Nogheric_logo_dark.png";
        pillar1.src = "./assets/lamp-charge-dark.png";
        pillar2.src = "./assets/people-dark.png";
        pillar3.src = "./assets/award-dark.png";
        iconPareance.src = "./assets/sun.png";
        iconPareanceFull.src = "./assets/sun.png";
    }else{
        body.className="";
        logoHeader.src = "./assets/Nogheric_logo.png";
        pillar1.src = "./assets/lamp-charge.png";
        pillar2.src = "./assets/people.png";
        pillar3.src = "./assets/award.png";
        iconPareance.src = "./assets/moon.png";
        iconPareanceFull.src = "./assets/moon.png";
    } 
});


iconPareanceFull.addEventListener('click',()=>{
    if(body.className==""){
        body.className="dark-mode";
        logoHeader.src = "./assets/Nogheric_logo_dark.png";
        pillar1.src = "./assets/lamp-charge-dark.png";
        pillar2.src = "./assets/people-dark.png";
        pillar3.src = "./assets/award-dark.png";
        iconPareanceFull.src = "./assets/sun.png";
    }else{
        body.className="";
        logoHeader.src = "./assets/Nogheric_logo.png";
        pillar1.src = "./assets/lamp-charge.png";
        pillar2.src = "./assets/people.png";
        pillar3.src = "./assets/award.png";
        iconPareanceFull.src = "./assets/moon.png";
    } 
});

window.onclick = function(e){
    if(!language.contains(e.target)){
        selectLanguage.classList.remove("active-select-language");
    }
    if(optionLanguage1.contains(e.target) || optionLanguage2.contains(e.target)){
        selectLanguage.classList.remove("active-select-language");
        menuList.classList.toggle("active-menu");
        iconMenu[0].classList.add("show-icon");
        iconMenu[1].classList.remove("show-icon");
        body.style.removeProperty("overflow-y");
    }
    if(menuList.contains(e.target) && !language.contains(e.target) && !iconPareance.contains(e.target)){
        menuList.classList.toggle("active-menu");
        iconMenu[0].classList.add("show-icon");
        iconMenu[1].classList.remove("show-icon");
        body.style.removeProperty("overflow-y");
    }

    if(optionLanguage1Full.contains(e.target) || optionLanguage2Full.contains(e.target)){
        selectLanguageFull.classList.remove("active-select-language");
    }

    if(!languageFull.contains(e.target)){
        selectLanguageFull.classList.remove("active-select-language");
    }

}