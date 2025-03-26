class CustomNavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `
        <ul class="navbar">
            <li class="dropdown">
                <a href="../index.html" class="dropbtn">Home</a>
            </li>
            <li class="dropdown">
                <a href="../esolangs/esoteric_programming_languages.html" class="dropbtn">Esoteric Programming Languages</a>
                <div class="dropdown-content">
                    <a href="../esolangs/lemonic.html">Lemonic</a>
                </div>
            </li>
            <li class="dropdown">
                <a href="../mods/minecraft_mods.html">Minecraft Mods</a>
            </li>   
            <li class="dropdown">
                <a href="http://scalarstudios.site/">Scalar Studios</a>
            </li>   
        </ul>
        `
    }
}

class CustomHomepageNavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `
        <ul class="navbar">
            <li class="dropdown">
                <a href="index.html" class="dropbtn">Home</a>
            </li>
            <li class="dropdown">
                <a href="esolangs/esoteric_programming_languages.html" class="dropbtn">Esoteric Programming Languages</a>
                <div class="dropdown-content">
                    <a href="esolangs/lemonic.html">Lemonic</a>
                </div>
            </li>
            <li class="dropdown">
                <a href="mods/minecraft_mods.html">Minecraft Mods</a>
            </li>
            <li class="dropdown">
                <a href="http://scalarstudios.site/">Scalar Studios</a>
            </li>     
        </ul>
        `
    }
}

customElements.define('custom-navbar', CustomNavBar)
customElements.define('custom-homepage-navbar', CustomHomepageNavBar)