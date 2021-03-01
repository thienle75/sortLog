const LogSource = require("../lib/log-source");
const Printer = require("../lib/printer");
describe("Sync sorted merge Behaviors", () => {
  test("It should drain a log sync sorted merge", () => {
    const syncLogSources = [];
    for (let i = 0; i < 5; i++) {
      syncLogSources.push(new LogSource());
    }
    try{
      result = require("../solution/sync-sorted-merge")(syncLogSources, new Printer());
    }
    catch (e) {
    }
    expect(result).toEqual(undefined)
    
  });
});
