/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Currency Symbol - Select the currency symbol to display in calculations */
  "currencySymbol": "$" | "€" | "£" | "JPY¥" | "¥" | "C$" | "A$" | "CHF" | "₹" | "₩"
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `calculate` command */
  export type Calculate = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `calculate` command */
  export type Calculate = {}
}

