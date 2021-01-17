import axios from 'axios';

const Admin_API_BASE_URL = "http://localhost:8080/login/admin";

class AdminServices {

    getAdminById(adminUserName) {
        return axios.get(Admin_API_BASE_URL + '/' + adminUserName);
    }

    updateAdminPassword(adminUserName, admin) {
        return axios.put(Admin_API_BASE_URL + '/' + adminUserName, admin);
    }
    loginAdmin(adminUserName, adminPassword) {
        return axios.get(Admin_API_BASE_URL + '/' + adminUserName+ '/'+adminPassword);
    }
}

export default new AdminServices()
