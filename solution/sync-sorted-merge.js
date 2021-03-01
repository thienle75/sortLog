"use strict";

// Print all entries, across all of the sources, in chronological order.

module.exports = (logSources, printer) => {
  logSources.slice().sort((a,b) => a.last.date - b.last.date).forEach(log => printer.print(log.last));
  printer.done()
  return console.log("Sync sort complete.");
};
