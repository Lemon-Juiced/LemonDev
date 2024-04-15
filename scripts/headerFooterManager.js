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
                    <a href="../esolangs/cscroll_jscroll.html">CScroll/JScroll</a>
                    <a href="../esolangs/cscroll_jscroll_documentation.html">CScroll/JScroll Documentation</a>
                    <a href="../esolangs/qu.html">Qu</a>
                    <a href="../esolangs/qu_documentation.html">Qu Documentation</a>
                </div>
            </li>
            <li class="dropdown">
                <a href="../mods/minecraft_mods.html">Minecraft Mods</a>
                <div class="dropdown-content">
                    <a href="../mods/attributions.html">Attributions</a>
                    <a href="../mods/contest_entry.html">Contest Entry</a>
                    <a href="../mods/contributions.html">Contributions</a>
                    <a href="../mods/dependencies.html">Dependencies</a>
                    <a href="../mods/developement_progress.html">Development Progress</a>
                    <a href="../mods/discontinued_mods.html">Discontinued Mods</a>
                    <a href="../mods/old_ideas.html">Old Ideas</a>
                </div>
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
                    <a href="esolangs/cscroll_jscroll.html">CScroll/JScroll</a>
                    <a href="esolangs/cscroll_jscroll_documentation.html">CScroll/JScroll Documentation</a>
                </div>
            </li>
            <li class="dropdown">
                <a href="mods/minecraft_mods.html">Minecraft Mods</a>
                <div class="dropdown-content">
                    <a href="mods/attributions.html">Attributions</a>
                    <a href="mods/contest_entry.html">Contest Entry</a>
                    <a href="mods/contributions.html">Contributions</a>
                    <a href="mods/dependencies.html">Dependencies</a>
                    <a href="mods/developement_progress.html">Development Progress</a>
                    <a href="mods/discontinued_mods.html">Discontinued Mods</a>
                    <a href="mods/old_ideas.html">Old Ideas</a>
                </div>
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