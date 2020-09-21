let btn = document.getElementById('menu-btn');
let nav = document.getElementById('sideNav');

nav.style.right = "-250px"
btn.onclick = () => {
    if (nav.style.right == "-250px") {
        nav.style.right = "0px"
    }else{
        nav.style.right = "-250px"
    }
};


