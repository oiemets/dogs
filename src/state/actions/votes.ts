import { AddVotePayload, VoteResponse } from '../../thedogsapi';
import { AppAction, AppCommand } from '../types';

export type VotesLoadStart = AppAction<'VotesLoadStart'>;

export type VotesLoadSuccess = AppAction<'VotesLoadSuccess', VoteResponse[]>;

export const votesLoadStart = (): VotesLoadStart => ({
	type: 'VotesLoadStart',
});

export const votesLoadSuccess = (
	payload: VoteResponse[]
): VotesLoadSuccess => ({
	type: 'VotesLoadSuccess',
	payload,
});

export const loadVotes = (): AppCommand => async (dispatch, _, { api }) => {
	dispatch(votesLoadStart());
	const votes = await api.votes().list();
	dispatch(votesLoadSuccess(votes));
};

export const addVote = (payload: AddVotePayload): AppCommand => async (
	_,
	__,
	{ api }
) => {
	api.votes().add(payload);
};
