const Reader = require("../../lib/utils/Reader");

describe("Test for Reader", () => {
    test("Create a Reader object", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        expect(explorers.length).toBe(15);
    });
});