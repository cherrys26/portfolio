import axios from 'axios';

export default class ExperienceService {
    getExperience() {
        return axios.get('data/Experience.json').then(res => res.data.data);
    }
}
