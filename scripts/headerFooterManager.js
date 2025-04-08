class CustomNavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `
        <ul class="navbar">
            <li class="dropdown">
                <a href="index.html" class="dropbtn">Home</a>
            </li>
            <li class="dropdown">
                <a href="esolangs.html" class="dropbtn">Esoteric Programming Languages</a>
                <div class="dropdown-content">
                    <a href="esolangs_lemonic.html">Lemonic</a>
                </div>
            </li>
            <li class ="dropdown">
                <a href = "pro_work.html" class="dropbtn">Pro Work</a>
                <div class="dropdown-content">
                    <a href="pro_work_dtar.html">DTar</a>
                    <a href="pro_work_rpjl.html">RPJL</a>
                    <a href="pro_work_license.html">LemonDev FOSS License</a>
                </div>
            </li>
            <li class="dropdown">
                <a href="minecraft_mods.html">Minecraft Mods</a>
            </li>   
            <li class="dropdown">
                <a href="http://scalarstudios.site/">Scalar Studios</a>
            </li>   
        </ul>
        `
    }
}

customElements.define('custom-navbar', CustomNavBar)