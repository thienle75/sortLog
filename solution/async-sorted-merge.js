"use strict";

module.exports = (logSources, printer) => {

  Promise.all(logSources.map(log => log.popAsync())).then((result) => {
    result.sort((a,b) => a.date - b.date).forEach((log) => printer.print(log))
    printer.done()
  })

  return new Promise((resolve, reject) => {

    resolve(console.log("Async sort complete."));
  });
};
