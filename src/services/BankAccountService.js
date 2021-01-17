import axios from 'axios';

const BANKACCOUNT_API_BASE_URL = "http://localhost:8080/accounts/createNewAccount";

class BankAccountService {


    createNewAccount(account) {
        return axios.post(BANKACCOUNT_API_BASE_URL, account);
    }
}

export default new BankAccountService()