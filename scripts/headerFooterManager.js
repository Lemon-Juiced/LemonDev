class CustomNavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `
        <ul class="navbar">
            <li class="dropdown">
                <a href="https://lemonjuice.dev/index.html" class="dropbtn">Home</a>
            </li>
            <li class="dropdown">
                <a href="https://lemonjuice.dev//html/esolangs/esoteric_programming_languages.html" class="dropbtn">Esoteric Programming Languages</a>
                <div class="dropdown-content">
                    <a href="https://lemonjuice.dev//html/esolangs/cscroll_jscroll.html">CScroll/JScroll</a>
                    <a href="https://lemonjuice.dev//html/esolangs/cscroll_jscroll_documentation.html">CScroll/JScroll Documentation</a>
                </div>
            </li>
            <li class="dropdown">
                <a href="https://lemonjuice.dev//html/mods/minecraft_mods.html">Minecraft Mods</a>
                <div class="dropdown-content">
                    <a href="https://lemonjuice.dev//html/mods/attributions.html">Attributions</a>
                    <a href="https://lemonjuice.dev//html/mods/contest_entry.html">Contest Entry</a>
                    <a href="https://lemonjuice.dev//html/mods/contributions.html">Contributions</a>
                    <a href="https://lemonjuice.dev//html/mods/dependencies.html">Dependencies</a>
                    <a href="https://lemonjuice.dev//html/mods/developement_progress.html">Development Progress</a>
                    <a href="https://lemonjuice.dev//html/mods/discontinued_mods.html">Discontinued Mods</a>
                    <a href="https://lemonjuice.dev//html/mods/old_ideas.html">Old Ideas</a>
                </div>
            </li>   
        </ul>
        `
    }
}

customElements.define('custom-navbar', CustomNavBar)