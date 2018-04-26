import { HttpHeaders } from '@angular/common/http';

const appKey = 'kid_SkFD-lSoz';
const appSecret = '388bba914ddb446599772094d6978a2b';
const appMaster = '2a71481ddc9a407f9bae443bb281e721';
const getEmployeesUrl = `https://baas.kinvey.com/appdata/${appKey}/Employees`;

export default {
    getEmployeesUrl: getEmployeesUrl,
    createAuthHeader: (type: string)=>{
        if (type == 'Basic') {
            return  new HttpHeaders({
                'Authorization': `Basic ${btoa(`${appKey}:${appMaster}`)}`,
                'Content-Type': 'application/json'
            })
        }
    }
}