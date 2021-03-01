const LogSource = require("../lib/log-source");
const Printer = require("../lib/printer");
describe("Sync sorted merge Behaviors", () => {
  test("It should drain a log sync sorted merge", async() => {
    const asyncLogSources = [];
    for (let i = 0; i < 5; i++) {
        asyncLogSources.push(new LogSource());
    }
    const result = await  require("../solution/async-sorted-merge")(asyncLogSources, new Printer())
    
    expect(result).toEqual(undefined)
  });
});