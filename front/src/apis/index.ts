import axios from "axios";
import { PostBoardRequestDto, SignInRequestDto, SignUpRequestDto } from "src/interfaces/request";

const API_DOMAIN = 'http://localhost:4040/api/v1';
const SIGN_UP_URL = () => `${API_DOMAIN}/auth/sign-up`;
const SIGN_IN_URL = () => `${API_DOMAIN}/auth/sign-up`;

const GET_TOP3_BOARD_LIST_URL = () => `${API_DOMAIN}/board/top-3`;
const GET_CURRENT_BOARD_LIST_URL = () => `${API_DOMAIN}/auth/current-board`;
const GET_POPULAR_LIST_URL = () => `${API_DOMAIN}/search/popular`;

const GET_SEARCH_BOARD_LIST_URL = (searchWord: string) => `${API_DOMAIN}/board/search/${searchWord}`;
const GET_RELATION_LIST_URL = (searchWord: string) => `${API_DOMAIN}/search/relation/${searchWord}`;

const GET_BOARD_URL = (boardNumber: number | string) => `${API_DOMAIN}/board/${boardNumber}`;
const GET_FAVORITE_LIST_URL = (boardNumber: number | string) => `${API_DOMAIN}/board/${boardNumber}/favorite-list`;
const GET_COMMENT_LIST_URL = (boardNumber: number | string) => `${API_DOMAIN}/board/${boardNumber}/comment-list`;

const PUT_FAVORTIE_URL = (boardNumber: number | string) => `${API_DOMAIN}/board/${boardNumber}/favorite`;
const POST_COMMENT_URL = (boardNumber: number | string) => `${API_DOMAIN}/board/${boardNumber}/comment`;

const PATCH_BOARD_URL = (boardNumber: number | string) => `${API_DOMAIN}/board/${boardNumber}`;
const DELETE_BOARD_URL = (boardNumber: number | string) => `${API_DOMAIN}/board/${boardNumber}`;
const POST_BOARD_URL = () => `${API_DOMAIN}/board`;

const GET_USER_URL = (email: string) => `${API_DOMAIN}/user/${email}`;
const GET_USER_BOARD_LIST_URL = (email: string) => `${API_DOMAIN}/board/user-list/${email}`;

const PATCH_USER_NICKNAME_URL = (email: string) => `${API_DOMAIN}/user/${email}/nickname`;
const PATCH_USER_PROFILE_URL = (email: string) => `${API_DOMAIN}/user/${email}/profile`;

const GET_SIGN_IN_USER_URL = () => `${API_DOMAIN}/user`;
const POST_FILE = () => `${API_DOMAIN}/file/upload`;

export const signUpRequest = async (data: SignUpRequestDto) => 
  await axios.post(SIGN_UP_URL(), data)
    .then((response) => {
      return response;
    })
    .catch((error) => null);

export const signInRequest = async (data: SignInRequestDto) => {
  const result = await axios.post(SIGN_IN_URL(), data)
    .then((response) => {
      return response;
    })
    .catch((error) => null)

  return result;
}

export const getTop3BoardListRequest = async () =>
  await axios.get(GET_TOP3_BOARD_LIST_URL())
    .then((response) => response)
    .catch((error) => null);

export const getCurrentBoardListRequest = async () =>
  await axios.get(GET_CURRENT_BOARD_LIST_URL())
    .then((response) => response)
    .catch((error) => null);

export const getPopularListRequest = async () =>
  await axios.get(GET_POPULAR_LIST_URL())
  .then((response) => response)
  .catch((error) => null);

export const getSearchBoardListRequest = async (searchWord: string) =>
  await axios.get(GET_SEARCH_BOARD_LIST_URL(searchWord))
  .then((response) => response)
  .catch((error) => null);
  
export const getRelationListRequest = async (searchWord: string) =>
  await axios.get(GET_RELATION_LIST_URL(searchWord))
  .then((response) => response)
  .catch((error) => null);

export const getBoardRequest = async (boardNumber: number | string) =>
  await axios.get(GET_BOARD_URL(boardNumber))
  .then((response) => response)
  .catch((error) => null);

export const getFavoriteListRequest = async (boardNumber: number | string) =>
  await axios.get(GET_FAVORITE_LIST_URL(boardNumber))
  .then((response) => response)
  .catch((error) => null);

  
export const getCommentListRequest = async (boardNumber: number | string) =>
  await axios.get(GET_COMMENT_LIST_URL(boardNumber))
  .then((response) => response)
  .catch((error) => null);


export const putFavoriteRequest = async (boardNumber: number | string, data: any) =>
  await axios.put(PUT_FAVORTIE_URL(boardNumber), data)
  .then((response) => response)
  .catch((error) => null);

  
export const postCommentRequest = async (boardNumber: number | string, data: any) =>
  await axios.post(POST_COMMENT_URL(boardNumber), data)
  .then((response) => response)
  .catch((error) => null);

export const patchBoardRequest = async (boardNumber: number | string, data: any) =>
  await axios.patch(PATCH_BOARD_URL(boardNumber), data)
  .then((response) => response)
  .catch((error) => null);

export const deleteBoardRequest = async (boardNumber: number | string) =>
  await axios.delete(DELETE_BOARD_URL(boardNumber))
  .then((response) => response)
  .catch((error) => null);

export const getUserRequest = async (email: string) =>
  await axios.get(GET_USER_URL(email))
  .then((response) => response)
  .catch((error) => null);

export const getUserBoardRequest = async (email: string) =>
  await axios.get(GET_USER_BOARD_LIST_URL(email))
  .then((response) => response)
  .catch((error) => null);

export const getSignInUserRequest = async () =>
  await axios.get(GET_SIGN_IN_USER_URL())
  .then((response) => response)
  .catch((error) => null);

export const postFileRequest = async () =>
  await axios.post(POST_FILE())
  .then((response) => response)
  .catch((error) => null);

export const postBoardRequest = async (data: PostBoardRequestDto) =>
  await axios.post(POST_BOARD_URL(), data)
  .then((response) => response)
  .catch((error) => null);

export const patchUserNicknameRequest = async (email: string, data: any) =>
  await axios.patch(PATCH_USER_NICKNAME_URL(email), data)
  .then((response) => response)
  .catch((error) => null);

export const patchUserProfileRequest = async (email: string, data: any) =>
  await axios.patch(PATCH_USER_PROFILE_URL(email), data)
  .then((response) => response)
  .catch((error) => null);