# Combat Tracker Extensions (Foundry V13)

This module provides UI enhancements and small quality-of-life improvements for Foundry VTT's Combat Tracker. This repository is a fork maintained by AlexBlankComposer and has been upgraded for compatibility with Foundry VTT v13.

## Installation

1. In Foundry VTT, open the Add-on Modules install dialog.
2. Install using the following manifest URL:

https://raw.githubusercontent.com/AlexBlankComposer/Combat-Tracker-Extensions/main/module.json

3. Enable the module in your world, then configure settings under Module Settings if desired.

## What changed for V13

- Added an ES module entry (scripts/module.js) and referenced it from module.json (esmodules).
- Declared minimumCoreVersion: "13" in module.json.
- Converted initialization code to use Hooks.once('init') and Hooks.once('ready').
- Added a simple language file and a styles entry.
- Updated readme/changelog to document the upgrade.

## Usage

Enable or disable the module's features via Module Settings -> Combat Tracker Extensions -> Enable Combat Tracker Extensions.

## Development

- The module entrypoint is scripts/module.js (ES module).
- Styles live in styles/module.css.
- Translation strings live in languages/en.json.

## License

This project is licensed under AGPL-3.0. See LICENSE for details.
