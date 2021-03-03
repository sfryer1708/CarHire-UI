import configData from "../config/config.json";

export const getVehicles = async (showAvailableVehicles) => {
    try {
        const requestOptions = {
            headers: {
                method: "GET",
                headers: "application/json"
            }
        }
        const response = await fetch(`${configData.vehiclesUrl}?onlyAvailable=${showAvailableVehicles}`, requestOptions);
        return response.json();
    } catch(e) {
        return new Promise((reject) => {
            reject(e);
        })
    }
}