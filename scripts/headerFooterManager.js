class CustomNavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `
        <ul class="navbar">
            <li class="dropdown">
                <a href="index.html" class="dropbtn">Home</a>
            </li>
            <li class ="dropdown">
                <a href = "pro_work.html" class="dropbtn">Pro Work</a>
                <div class="dropdown-content">
                    <a href="pro_work_cextension.html">CExtension</a>
                    <a href="pro_work_gitmirror.html">GitMirror</a>
                    <a href="pro_work_isometric2dblockrenderer.html">Isometric2DBlockRenderer</a>
                    <a href="pro_work_jot.html">Jot</a>
                    <a href="pro_work_license.html">LemonDev FOSS License</a>
                    <a href="pro_work_tommaven.html">TomMaven</a>
                    <a href="pro_work_whothat.html">WhoThat</a>
                    <a href="pro_work_wincoreutils.html">WinCoreUtils</a>
                </div>
            </li>
            <li class="dropdown">
                <a href="minecraft_mods.html">Minecraft Mods</a>
            </li>   
            <li class="dropdown">
                <a href="code_style.html" class="dropbtn">Code Style</a>
            </li>
            <li class="dropdown navbar-right">
                <a href="http://scalarstudios.site/">Scalar Studios</a>
            </li>
        </ul>
        `
    }
}

customElements.define('custom-navbar', CustomNavBar)