import axios from 'axios';
import { devSetting } from './settings';
const headersApplicationJson = {
    'Content-Type': 'application/json',
}

export const ApiUrls = {
    get_all_forms,create_form,edit_form,view_form,delete_form
};
    function get_all_forms() {
        return axios.get(`${devSetting.api.url}`, { headers: headersApplicationJson })
    }
    function create_form(params) {
        return axios.post(`${devSetting.api.url}create`,params, { headers: headersApplicationJson })
    }
    function edit_form(params) {
        return axios.patch(`${devSetting.api.url}edit/${params}`, params,{ headers: headersApplicationJson })
    }
    function view_form(params) {
        return axios.get(`${devSetting.api.url}${params}`, { headers: headersApplicationJson })
    }
    function delete_form(params) {
        return axios.delete(`${devSetting.api.url}delete/${params}`, { headers: headersApplicationJson })
    }



