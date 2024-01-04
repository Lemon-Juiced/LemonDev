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
lembrary = new Mod("Lembrary", "lembrary")
var lemon_core = new Mod("Lemon Core", "lemon-core")
var lime_converter = new Mod("Lime Converter", "lime-converter")
// Scalar Utils Mods
var scalar_utils = new Mod("Scalar Utils 5", "scalar-utils-5")
var scalar_utils_agriculture_addon = new Mod("Scalar Utils 5 Agriculture Addon", "scalar-utils-5-agriculture-addon")
// Better Mods
var better_angel_ring = new Mod("Better Angel Ring", "better-angel-ring")
var better_apatite = new Mod("Better Apatite", "better-apatite")
var better_berries = new Mod("Better Berries", "better-berries-redux")
var better_berries_plus = new Mod("Better Berries Plus", "better-berries-redux-plus")
var better_bronze = new Mod("Better Bronze", "better-bronze")
var better_certus_quartz = new Mod("Better Certus Quartz", "better-certus-quartz")
var better_lead = new Mod("Better Lead", "better-lead")
var better_rubber = new Mod("Better Rubber", "better-rubber")
var better_silicon = new Mod("Better Silicon", "better-silicon")
var better_silver = new Mod("Better Silver", "better-silver")
var better_steel = new Mod("Better Steel", "better-steel")
// Other Mods
var black_lotus = new Mod("Black Lotus", "black-lotus")
var lite_exchange = new Mod("Lite Exchange", "lite-exchange")
var lite_exchange_integrations = new Mod("Lite Exchange Integrations", "lite-exchange-integrations")
var project_yellow = new Mod("Project Yellow", "project-yellow")
var reaped = new Mod("Reaped", "reaped")
var soul_cages = new Mod("Soul Cages", "soul-cages")
var xychron = new Mod("Xychron", "xychron")