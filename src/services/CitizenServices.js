import axios from 'axios';

const CITIZEN_API_BASE_URL = "http://localhost:8080/api/v1/citizens";

class CitizenService{
    
    generateCitizenId(citizen){
        return axios.post(CITIZEN_API_BASE_URL, citizen);

    }
}

export default new CitizenService()