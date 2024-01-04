/**
 * A <code>Mod</code> object that stores information about a mod
 * 
 * Note: More information, may be added to this object in the future such as the GitHub URL and other information such as total downloads.
 * 
 * @param name The name of the mod
 * @param url The CurseForge URL extension of the mod
 */
class Mod{
    constructor(name, url){
        this.name = name;
        this.url = url;
    }
    
    /**
     * @returns The CurseForge URL of the mod
     */
    getURL(){
        return "https://www.curseforge.com/minecraft/mc-mods/" + this.url;
    }
}

// Mods
// Core Mods
const lembrary = new Mod("Lembrary", "lembrary")
const lemon_core = new Mod("Lemon Core", "lemon-core")
const lime_converter = new Mod("Lime Converter", "lime-converter")
// Scalar Utils Mods
const scalar_utils = new Mod("Scalar Utils 5", "scalar-utils-5")
const scalar_utils_agriculture_addon = new Mod("Scalar Utils 5 Agriculture Addon", "scalar-utils-5-agriculture-addon")
// Better Mods
const better_angel_ring = new Mod("Better Angel Ring", "better-angel-ring")
const better_apatite = new Mod("Better Apatite", "better-apatite")
const better_berries = new Mod("Better Berries", "better-berries-redux")
const better_berries_plus = new Mod("Better Berries Plus", "better-berries-redux-plus")
const better_bronze = new Mod("Better Bronze", "better-bronze")
const better_certus_quartz = new Mod("Better Certus Quartz", "better-certus-quartz")
const better_lead = new Mod("Better Lead", "better-lead")
const better_rubber = new Mod("Better Rubber", "better-rubber")
const better_silicon = new Mod("Better Silicon", "better-silicon")
const better_silver = new Mod("Better Silver", "better-silver")
const better_steel = new Mod("Better Steel", "better-steel")
// Other Mods
const black_lotus = new Mod("Black Lotus", "black-lotus")
const lite_exchange = new Mod("Lite Exchange", "lite-exchange")
const lite_exchange_integrations = new Mod("Lite Exchange Integrations", "lite-exchange-integrations")
const project_yellow = new Mod("Project Yellow", "project-yellow")
const reaped = new Mod("Reaped", "reaped")
const soul_cages = new Mod("Soul Cages", "soul-cages")
const xychron = new Mod("Xychron", "xychron")