// scripts/module.js
export const MODULE_ID = "combat-tracker-extensions";

Hooks.once("init", async () => {
  console.log(`${MODULE_ID} | Initializing Combat Tracker Extensions (Foundry V13)`);

  // Register settings
  game.settings.register(MODULE_ID, "enableExtensions", {
    name: "Enable Combat Tracker Extensions",
    hint: "Enable the module's enhancements to the Combat Tracker UI.",
    scope: "world",
    config: true,
    type: Boolean,
    default: true
  });
});

Hooks.once("ready", async () => {
  if (!game.settings.get(MODULE_ID, "enableExtensions")) return;
  console.log(`${MODULE_ID} | Ready`);
  // Final setup that needs game data can go here
});

Hooks.on("renderCombatTracker", (app, html, data) => {
  if (!game.settings.get(MODULE_ID, "enableExtensions")) return;
  // Example enhancement: mark the header
  const header = html.find('.window-title');
  if (header.length) header.addClass('cte-enhanced');
});