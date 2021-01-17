import axios from 'axios';

const TELEPHONE_API_BASE_URL = "http://localhost:8080/react/telephones";

class TelephoneConnectionService{

    getAllConnections(){
        return axios.get(TELEPHONE_API_BASE_URL);
    }

    createNewTelephoneConnection(telephone){
        return axios.post(TELEPHONE_API_BASE_URL, telephone);
    }

    /*getConnectionById(employeeId){
        return axios.get(TELEPHONE_API_BASE_URL + '/' + employeeId);
    }*/

   
}

export default new TelephoneConnectionService()