import { LeadersReq, LeadersDTO, NewLeader, LeaderDataDTO } from '@src/types/leaders';
import { BASE_API, TEAM_NAME } from '@src/utils/constants';
import axios, { AxiosPromise } from 'axios';

export const getLeaders = (data: LeadersReq): AxiosPromise<LeadersDTO> =>
    axios.post(`${BASE_API}/leaderboard/${TEAM_NAME}`, data, { withCredentials: true });

export const setLeader = (dto: LeaderDataDTO): AxiosPromise => {
    const requestParams: NewLeader = {
        ratingFieldName: 'score',
        teamName: TEAM_NAME,
    };

    return axios.post(`${BASE_API}/leaderboard`, { data: dto, ...requestParams }, { withCredentials: true });
};
