const Reader = require("../../lib/utils/Reader");
const ExplorerService = require("../../lib/services/ExplorerService");
const FizzbuzzService = require("../../lib/services/FizzbuzzService");

class ExplorerController{
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByMission(explorers, mission); 
    }
    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }
    static getExplorersAmountByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }
    static getFizzbuzzServiceByNumber(number){
        return FizzbuzzService.applyValidationInNumber(number);
    }
    static getFizzbuzzByTelegramBot(message){
        const numberToApplyFb = parseInt(message);
        if(!isNaN(numberToApplyFb)){
            const fizzbuzzTrick = FizzbuzzService.applyValidationInNumber(numberToApplyFb);
            const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
            return responseBot
        } else {
            if(message.toLowerCase()=="node"||message.toLowerCase()=="java"){
                const explorers = Reader.readJsonFile("explorers.json");
                const mission=message.toLowerCase()
                const responseBot=ExplorerService.getExplorersUsernamesByMission(explorers,mission).toString()
                return responseBot;  
            }
            return "Envía un número o misión válido"
        }
    }
}
module.exports=ExplorerController;