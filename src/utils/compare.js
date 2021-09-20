const timeDifference = (past, present, flag) => {
const diffTime = present - past; // time in milliseconds

const difference = new Date(diffTime);

const diffHours = difference.getHours();
const diffMins = difference.getMinutes();

    switch(flag){
        case "min": 
            return diffMins
        case "hour":
            return diffHours;
    }

    return 0;
}

module.exports = {
    timeDifference,
}