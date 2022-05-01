const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Unit tests for Explorer Controller", () => {
    test("Use the Explorer Controller", () => {
        expect(ExplorerController.getExplorersByMission("node").length).toBe(10);
        expect(ExplorerController.getExplorersUsernamesByMission("node").length).toBe(10);
        expect(ExplorerController.getExplorersAmountByMission("node")).toBe(10);
    });
});