import configData from "../config/config.json";

export const getHireCost = async (registration, startDate, endDate) => {
    try {
        const requestOptions = {
            headers: {
                method: "GET",
                headers: "application/json"
            }
        }
        const response = await fetch(`${configData.hireUrl}?regNumber=${registration}&start=${startDate}&end=${endDate}`, requestOptions);
        return response.json();
    } catch(e) {
        return new Promise((reject) => {
            reject(e);
        })
    }
}