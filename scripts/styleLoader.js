function loadStyles(optionalStyle = 0) {
    const styles = [
        "styles/styles.css",
        "styles/navbar.css",
        "styles/buttons.css",
        "styles/tables.css",
        "styles/markdown.css",
        "styles/homepage.css"
    ];

    // Add base stylesheets
    styles.forEach(style => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = style;
        document.head.appendChild(link);
    });

    // Add optional stylesheets based on the parameter
    if (optionalStyle === 1) {
        const splitStyle = document.createElement("link");
        splitStyle.rel = "stylesheet";
        splitStyle.href = "styles/split_style.css";
        document.head.appendChild(splitStyle);
    } else if (optionalStyle === 2) {
        const pro_workStyle = document.createElement("link");
        pro_workStyle.rel = "stylesheet";
        pro_workStyle.href = "styles/pro_work.css";
        document.head.appendChild(pro_workStyle);
        
        const projectBoxStyle = document.createElement("link");
        projectBoxStyle.rel = "stylesheet";
        projectBoxStyle.href = "styles/project_box.css";
        document.head.appendChild(projectBoxStyle);
    }

}

// Automatically call loadStyles(0) if no explicit call is made
if (typeof loadStyles !== "undefined") {
    loadStyles();
}