class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector(".site-header__menu-icon");
        this.menuContent = document.querySelector(".site-header__menu-content");
        this.events();
    }

    events() {
        this.menuIcon.addEventListener('click', () => this.toggleTheMenu())
    }

    toggleTheMenu() {
        console.log("hooray - the menu was clicked");
        this.menuContent.classList.toggle("site-header__menu-content--is-visible");
    }
}

export default MobileMenu;