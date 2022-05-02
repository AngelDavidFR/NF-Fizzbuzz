class FizzbuzzService{
    static applyValidationInExplorer(explorer){
        let scr=explorer.score;
        if((scr%3 === 0)&&(scr%5!=0)) explorer.trick = "FIZZ";
        else if((scr%3 != 0)&&(scr%5===0)) explorer.trick = "BUZZ";
        else if((scr%3 === 0)&&(scr%5===0)) explorer.trick = "FIZZBUZZ";
        else explorer.trick = explorer.score;

        return explorer;
    }
    static applyValidationInNumber(number){
        if((number%3 === 0)&&(number%5!=0)) return "FIZZ";
        else if((number%3 != 0)&&(number%5===0)) return "BUZZ";
        else if((number%3 === 0)&&(number%5===0)) return "FIZZBUZZ";
        else return number;

        
    }
}
module.exports = FizzbuzzService;