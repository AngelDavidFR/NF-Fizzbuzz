class ExplorerService{
    static filterByMission(explorers, mission){
        return explorers.filter((explorer) => explorer.mission == mission);
    }
    static getAmountOfExplorersByMission(explorers, mission){
        return explorers.filter((explorer) => explorer.mission == mission).length;
    }
    static getExplorersUsernamesByMission(explorers, mission){
        let explorersInNodeToGetUsernames = this.filterByMission(explorers, mission);
        return explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
    }
}
module.exports=ExplorerService;