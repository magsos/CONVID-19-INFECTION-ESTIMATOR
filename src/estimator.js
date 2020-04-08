input = {
    region: {
    name: "Africa",
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
    },
    periodType: "days",
    timeToElapse: 58,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614
   }

const Infectedpips = (input, value ) => input.reportedCases * value 

const covid19ImpactEstimator = (data) => {
    const input = data;
    return {
        data: input, 
        impact: {
            currentlyInfected: Infectedpips(input, 10)        
        },
        severeImpact: {
            currentlyInfected: Infectedpips(input, 50)
        }
    };
};

console.log(covid19ImpactEstimator(input))
module.exports = {
    covid19ImpactEstimator
}
