import { apiOptions, matchesTable, matchesType } from "@/types";

const option: apiOptions = {
    next: { revalidate: 30 },
    headers: {
        "X-Auth-Token": process.env.API_TOKEN,
        "Content-Type": "application/json"
    }
};

export const getMatch = async () => {
    try {
        const matchData = await fetch('https://api.football-data.org/v4/matches', option);
        if (!matchData.ok) {
            throw new Error(`HTTP error! status: ${matchData.status}`);
        }
        const data = await matchData.json();
        console.log('Match Data:', data);
        return data;
    } catch (error) {
        console.error('Error fetching match data:', error);
    }
};

export const getTableBSA = async () => {
    const tableData = await fetch('https://api.football-data.org/v4/competitions/BSA/standings', option);
    const data = await tableData.json();
    console.log(data)
    return data;
        
    
}; 

export const getTableCL = async () => {
    const tableData = await fetch('https://api.football-data.org/v4/competitions/CL/standings', option);
    const data = await tableData.json();
    console.log(data)
    return data;
        
    
}; 

export const getTablePD = async () => {
    const tableData = await fetch('https://api.football-data.org/v4/competitions/PD/standings', option);
    const data = await tableData.json();
    console.log(data)
    return data;
        
    
}; 

export const getTablePL = async () => {
    const tableData = await fetch('https://api.football-data.org/v4/competitions/PL/standings', option);
    const data = await tableData.json();
    console.log(data)
    return data;
        
    
}; 

export const getTableELC = async () => {
    const tableData = await fetch('https://api.football-data.org/v4/competitions/ELC/standings', option);
    const data = await tableData.json();
    console.log(data)
    return data;
        
    
}; 

export const getTableSA = async () => {
    const tableData = await fetch('https://api.football-data.org/v4/competitions/SA/standings', option);
    const data = await tableData.json();
    console.log(data)
    return data;
        
    
}; 

const todayDate = new Date();
const yesterdayDate = new Date(todayDate.getTime());
yesterdayDate.setDate(todayDate.getDate());
const year = yesterdayDate.getFullYear();
const month = String(yesterdayDate.getMonth() + 1).padStart(2, '0');
const day = String(yesterdayDate.getDate()).padStart(2, '0');

const yesterday = [year, month, day].join('-');

const lastWeekDate = new Date(todayDate.getTime());
lastWeekDate.setDate(todayDate.getDate() - 7);
const lastWeekYear = lastWeekDate.getFullYear();
const lastWeekMonth = String(lastWeekDate.getMonth() + 1).padStart(2, '0');
const lastWeekDay = String(lastWeekDate.getDate()).padStart(2, '0');

const lastWeekk = [lastWeekYear, lastWeekMonth, lastWeekDay].join('-');

console.log('Last Week Date:', lastWeekk);
console.log('Yesterday Date:', yesterday);

export const getMatchFinished = async () => {
    try {
        const matchData = await fetch(`https://api.football-data.org/v4/matches?dateFrom=${lastWeekk}&dateTo=${yesterday}`, option);
        if (!matchData.ok) {
            throw new Error(`HTTP error! status: ${matchData.status}`);
        }
        const data = await matchData.json();
        console.log('Match Week Data:', data);
        return data;
    } catch (error) {
        console.error('Error fetching match week data:', error);
    }
};

export const getNewsInfo = async () => {
    const newsData = await fetch(`https://newsapi.org/v2/everything?apiKey=${process.env.API_TOKEN_NEWS}&q=soccer&pageSize=10`,
    {next:{revalidate:20}})
    return newsData.json()
  }

export const filterLeague = async (filterData: string) => {
    const leagueData = await getMatchFinished();
    const filterLeague: matchesType[] = leagueData.matches;
    const filteredData = filterLeague.filter((item) => item.competition.name === filterData);
    return filteredData;
}

