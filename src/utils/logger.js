/* eslint-disable no-console */

// eslint-disable-next-line no-undef
const isProduction = process.env.NODE_ENV === "production";

export function log(message, ...args) {
  if (!isProduction) console.log(message, args);
}

export function error(err) {
  if (!isProduction) console.error(err);
}
