import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/user";

class UserRegisterService {


    saveUser(user){
        return axios.post(USER_API_BASE_URL+"/register", user);
    }

    getUser(uemailid,upass){
        return axios.get(USER_API_BASE_URL+"/login/"+uemailid+"/"+upass);
    }

    updateUserPassword(uemailid,user){
        return axios.patch(USER_API_BASE_URL+"/resetpassword/"+uemailid, user);
    }


}

export default new UserRegisterService();