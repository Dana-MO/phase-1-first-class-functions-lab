// Code your solution in this file!

const returnFirstTwoDrivers = (array) => array.slice(0, 2);

const returnLastTwoDrivers = (array) => array.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
    return function(fare) {
        return fare * fare;
    }
}


const fareDoubler = function(fare) {
    return fare * 2;
}

const fareTripler = function(fare) {
    return fare * 3;
}


const selectDifferentDrivers = function (array, returnFunction) {
    if (returnFunction === returnFirstTwoDrivers) {
        return array.slice(0, 2);
    } else if (returnFunction === returnLastTwoDrivers) {
        return array.slice(-2);
    }
}