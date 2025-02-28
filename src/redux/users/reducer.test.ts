import { InitialUsersType } from "./type";
import usersReducer, { followUnfollow } from './slice'


let state: InitialUsersType;

beforeEach(() => {
    state = {
        users: [
            {id: 0, name: 'Dimych 0', status: 'status 0',
                photos: {small: null, large: null}, followed: false},
            {id: 1, name: 'Dimych 1', status: 'status 1',
                photos: {small: null, large: null}, followed: false},
            {id: 2, name: 'Dimych 2', status: 'status 2',
                photos: {small: null, large: null}, followed: true},
            {id: 3, name: 'Dimych 3', status: 'status 3',
                photos: {small: null, large: null}, followed: true},
        ],
        pageSize: 10,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [],
        filter: { term: '', friend: null }
    };
})

test('follow success', () => {

const newState = usersReducer(state, followUnfollow({ userId: 1, followType: true }))

expect(newState.users[0].followed).toBe(false);
expect(newState.users[1].followed).toBe(true);
});

test('unfollow success', () => {

    const newState = usersReducer(state, followUnfollow({ userId: 3, followType: false  }))

    expect(newState.users[2].followed).toBe(true);
    expect(newState.users[3].followed).toBe(false);
});