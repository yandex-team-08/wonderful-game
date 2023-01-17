import { LeadersReq, LeadersDTO, NewLeader, LeaderDataDTO } from '@src/types/leaders';
import { BASE_API } from '@src/utils/constants';
import axios, { AxiosPromise } from 'axios';

export const getLeaders = (teamName: string, data: LeadersReq): AxiosPromise<LeadersDTO> =>
    axios.post(`${BASE_API}/leaderboard/${teamName}`, data, { withCredentials: true });

export const setLeader = (dto: LeaderDataDTO): AxiosPromise => {
    const requestParams: NewLeader = {
        ratingFieldName: 'score',
        teamName: 'team8',
    };

    return axios.post(`${BASE_API}/leaderboard`, { data: dto, ...requestParams });
};
