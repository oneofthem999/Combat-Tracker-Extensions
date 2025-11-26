// scripts/renderCompat.js
// Compatibility shim: make native HTMLElement behave more like a jQuery-like wrapper
// so existing code that expects `html[0]` and `html.find()` continues to work.
if (typeof Element !== "undefined") {
  try {
    if (!Object.getOwnPropertyDescriptor(Element.prototype, '0')) {
      Object.defineProperty(Element.prototype, '0', {
        configurable: true,
        get() { return this; }
      });
    }
    if (!Element.prototype.find) {
      Element.prototype.find = function(selector) {
        return this.querySelectorAll(selector);
      };
    }
  } catch (err) {
    console.warn("combat-tracker-extensions | renderCompat shim failed", err);
  }
}