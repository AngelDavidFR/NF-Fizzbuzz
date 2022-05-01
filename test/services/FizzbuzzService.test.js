
const FizzbuzzService=require("../../lib/services/FizzbuzzService");
describe("Test for FizzbuzzService", () => {
    test("Application of the ExplorerService to the list of explorers", () => {
        const explorer1 = {name: "Explorer1", score: 1};
        const explorer3 = {name: "Explorer3", score: 3};
        const explorer5 = {name: "Explorer5", score: 5};
        const explorer15 = {name: "Explorer15", score: 15};
        expect(FizzbuzzService.applyValidationInExplorer(explorer1)).toEqual({name: "Explorer1", score: 1, trick: 1});
        expect(FizzbuzzService.applyValidationInExplorer(explorer3)).toEqual({name: "Explorer3", score: 3, trick: "FIZZ"});
        expect(FizzbuzzService.applyValidationInExplorer(explorer5)).toEqual({name: "Explorer5", score: 5, trick: "BUZZ"});
        expect(FizzbuzzService.applyValidationInExplorer(explorer15)).toEqual({name: "Explorer15", score: 15, trick: "FIZZBUZZ"});

    });
});