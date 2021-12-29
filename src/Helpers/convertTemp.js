const convertTemp = (temp, tempUnit) => {
    if(tempUnit === "F"){
        temp = (temp * 1.8) + 32;
    }

    return parseInt(temp);
};

export default convertTemp;