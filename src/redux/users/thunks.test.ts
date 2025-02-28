import userThunks from "./thunks";
import userApi from "../../api/userApi";
import { APIResponseType, ResultCodeEnum } from "../../api/types";
import {followUnfollow, toggleIsFollowingProgress} from "./slice";


const result: APIResponseType = {
    resultCode: ResultCodeEnum.Success,
    messages: [],
    data: {}
}

jest.mock("../../api/userApi")
const userAPIMock = userApi as jest.Mocked<typeof userApi>;
userAPIMock.followUser.mockResolvedValue(result)

const dispatchMock = jest.fn();
const getStateMock = jest.fn();

beforeEach( () => {
    jest.clearAllMocks();
})

test('', async () => {
    const thunk = userThunks.followUnfollowUser( { userId: 1, followType: true });


    await thunk(dispatchMock, getStateMock, {})
    console.log(dispatchMock.mock.calls.map(call => call[0]));
    expect(dispatchMock).toBeCalledTimes(4);
    // @ts-ignore
    expect(dispatchMock).toHaveBeenNthCalledWith(2, toggleIsFollowingProgress( { followingInProgress: true, userId: 1 }))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, toggleIsFollowingProgress( { followingInProgress: false, userId: 1 }))
    expect(dispatchMock).toHaveBeenNthCalledWith(
        4,
        expect.objectContaining({
            type: "users/followUnfollowUser/fulfilled"
        })
    );

});

