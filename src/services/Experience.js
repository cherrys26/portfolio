import axios from 'axios';

export default class ExperienceService {
    getExperience() {
        return axios.get('data/Experience.json').then(res => console.log(res.data.data));
    }

    getDescriptions() {
        return axios.get('data/Experience.json').then(res => res.data.description);
    }
}