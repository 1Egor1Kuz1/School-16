
const menus = document.querySelectorAll(".menu");

for (const menu of menus) {
    initMenu(menu);
}

function initMenu(menu) {
    const subMenus = menu.querySelectorAll('li ul');
    for (const subMenu of subMenus) {
        const parentLi = subMenu.closest('li');
        parentLi.addEventListener('click', (e) => {
            e.preventDefault();
            parentLi.classList.toggle('open');
            subMenu.classList.toggle('open');
        });
    }
}




