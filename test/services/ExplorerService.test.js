const Reader = require("../../lib/utils/Reader");
const ExplorerService=require("../../lib/services/ExplorerService");
describe("Test for ExplorerService", () => {
    test("Test for method of the class ExplorerServices", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        expect(ExplorerService.filterByMission(explorers, "node").length).toBe(10);
        expect(ExplorerService.getAmountOfExplorersByMission(explorers, "node")).toBe(10);
        expect((ExplorerService.getExplorersUsernamesByMission(explorers, "node"))[0]).toBe("ajolonauta1");
        expect(ExplorerService.getExplorersUsernamesByMission(explorers, "node")).toEqual(["ajolonauta1",
            "ajolonauta2","ajolonauta3","ajolonauta4","ajolonauta5","ajolonauta11","ajolonauta12","ajolonauta13","ajolonauta14","ajolonauta15"]);
        

        

    });
});