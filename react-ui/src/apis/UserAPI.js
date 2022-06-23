import axios from 'axios';

const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}

export class UserAPI {

    static async AddTask(newTask) {
        return await axios.post('/api/user/tasks', new URLSearchParams({ "task": JSON.stringify(newTask) }), config).catch(function (error) {
            return error.response;
       });;
    }


}