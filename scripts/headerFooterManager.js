class CustomNavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `
        <ul class="navbar">
            <li class="dropdown">
                <a href="index.html" class="dropbtn">Home</a>
            </li>
            <li class="dropdown">
                <a href="esoteric_programming_languages.html" class="dropbtn">Esoteric Programming Languages</a>
                <div class="dropdown-content">
                    <a href="cscroll_jscroll.html">CScroll/JScroll</a>
                    <a href="cscroll_jscroll_documentation.html">CScroll/JScroll Documentation</a>
                </div>
            </li>
            <li class="dropdown">
                <a href="minecraft_mods.html">Minecraft Mods</a>
                <div class="dropdown-content">
                    <a href="attributions.html">Attributions</a>
                    <a href="contest_entry.html">Contest Entry</a>
                    <a href="contributions.html">Contributions</a>
                    <a href="dependencies.html">Dependencies</a>
                    <a href="developement_progress.html">Development Progress</a>
                    <a href="discontinued_mods.html">Discontinued Mods</a>
                    <a href="old_ideas.html">Old Ideas</a>
                </div>
            </li>   
        </ul>
        `
    }
}

customElements.define('custom-navbar', CustomNavBar)