import axios from "axios";
import SignInRequestDto from "src/interfaces/request/auth/sign-in.request.dto";
import SignUpRequestDto from "src/interfaces/request/auth/sign-up.request.dto";
import { PatchBoardRequestDto, PostBoardRequestDto, PostCommentRequestDto } from "src/interfaces/request/board";
import { PatchNicknameRequestDto, PatchProfileImageRequestDto } from "src/interfaces/request/user";
import { SignInResponseDto, SignUpResponseDto } from "src/interfaces/response/auth";
import { GetBoardResponseDto, GetCommentListResponseDto, GetCurrentResponseDto, GetFavoriteListResponseDto, GetSearchBoardResponseDto, GetTop3ResponseDto, GetUserListResponseDto, PatchBoardResponseDto, PostBoardResponseDto, PostCommentResponseDto, PutFavoriteResponseDto } from "src/interfaces/response/board";
import DeleteBoardResponseDto from "src/interfaces/response/board/delete-board.response.dto";
import ResponseDto from "src/interfaces/response/response.dto";
import { GetPopularListResponseDto, GetRelationListResponseDto } from "src/interfaces/response/search";
import { GetLoginUserResponseDto, GetUserResponseDto, PatchNicknameResponseDto, PatchProfileImageResponseDto } from "src/interfaces/response/user";

const API_DOMAIN = 'http://localhost:4040/api/v1';
const SIGN_UP_URL = () => `${API_DOMAIN}/auth/sign-up`;
const SIGN_IN_URL = () => `${API_DOMAIN}/auth/sign-in`;

const GET_TOP3_BOARD_LIST_URL = () => `${API_DOMAIN}/board/top-3`;
const GET_CURRENT_BOARD_LIST_URL = (section: number) => `${API_DOMAIN}/board/current-board/${section}`;
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

const PATCH_USER_NICKNAME_URL = () => `${API_DOMAIN}/user/nickname`;
const PATCH_USER_PROFILE_URL = () => `${API_DOMAIN}/user/profile`;

const GET_SIGN_IN_USER_URL = () => `${API_DOMAIN}/user`;
const UPLOAD_FILE = () => `http://localhost:4040/file/upload`;

export const signUpRequest = async (data: SignUpRequestDto) => {
  const result = 
    await axios.post(SIGN_UP_URL(), data)
    .then((response) => {
      const responseBody: SignUpResponseDto = response.data;
      const { code } = responseBody;
      return code;
    })
    .catch((error) => {
      const responseBody: ResponseDto = error.response.data;
      const { code } = responseBody;
      return code;
    });

  return result;
}

export const signInRequest = async (data: SignInRequestDto) => {
  const result = await axios.post(SIGN_IN_URL(), data)
    .then((response) => {
      const responseBody: SignInResponseDto = response.data;
      return responseBody;
    })
    .catch((error) => {
      const responseBody: ResponseDto = error.response.data;
      return responseBody;
    });

  return result;
}

// 괄호 같은거 최대로 생략 했을 때 코드
// 위의 코드랑 같은 작동함
export const getTop3BoardListRequest = async () => 
  await axios.get(GET_TOP3_BOARD_LIST_URL())
  .then((response) => {
    const responseBody: GetTop3ResponseDto = response.data;
    return responseBody;
  })
  .catch((error) => {
    const responseBody: ResponseDto = error.response.data;
    return responseBody;
  });

export const getCurrentBoardListRequest = async (section: number) =>
  await axios.get(GET_CURRENT_BOARD_LIST_URL(section))
  .then((response) => {
    const responseBody: GetCurrentResponseDto = response.data;
    return responseBody;
  })  
  .catch((error) => {
    const responseBody: ResponseDto = error.response.data;
    return responseBody;
  });

export const getPopularListRequest = async () =>
  await axios.get(GET_POPULAR_LIST_URL())
    .then((response) => {
      const responseBody: GetPopularListResponseDto = response.data;
      return responseBody;
    })
    .catch((error) => {
      const responseBody: ResponseDto = error.response.data;
      return responseBody;
    });

export const getSearchBoardListRequest = async (searchWord: string) =>
  await axios.get(GET_SEARCH_BOARD_LIST_URL(searchWord))
  .then((response) => {
    const responseBody: GetSearchBoardResponseDto = response.data;
    return responseBody;
  })
  .catch((error) => {
    const responseBody: ResponseDto = error.response.data;
    return responseBody;
  });
  
export const getRelationListRequest = async (searchWord: string) =>
  await axios.get(GET_RELATION_LIST_URL(searchWord))
    .then((response) => {
      const responseBody: GetRelationListResponseDto = response.data;
      return responseBody;
    })
    .catch((error) => {
      const responseBody: ResponseDto = error.response.data;
      return responseBody;
    });

export const getBoardRequest = async (boardNumber: number | string) =>
  await axios.get(GET_BOARD_URL(boardNumber))
    .then((response) => {
      const responseBody: GetBoardResponseDto = response.data;
      return responseBody;
    })
    .catch((error) => {
      const responseBody: ResponseDto = error.response.data;
      return responseBody;
    });

export const getFavoriteListRequest = async (boardNumber: number | string) =>
  await axios.get(GET_FAVORITE_LIST_URL(boardNumber))
    .then((response) => {
      const responseBody: GetFavoriteListResponseDto = response.data;
      return responseBody;
    })
    .catch((error) => {
      const responseBody: ResponseDto = error.response.data;
      return responseBody;
    });
  
export const getCommentListRequest = async (boardNumber: number | string) =>
  await axios.get(GET_COMMENT_LIST_URL(boardNumber))
  .then((response) => {
    const responseBody: GetCommentListResponseDto = response.data;
    return responseBody;
  })
  .catch((error) => {
    const responseBody: ResponseDto = error.response.data;
    return responseBody;
  });

export const putFavoriteRequest = async (boardNumber: number | string, token: string) =>
  await axios.put(PUT_FAVORTIE_URL(boardNumber), {}, { headers: { Authorization: `Bearer ${token}` } })
    .then((response) => {
      const responseBody: PutFavoriteResponseDto = response.data;
      const { code } = responseBody;
      return code;
    })
    .catch((error) => {
      const responseBody: ResponseDto = error.response.data;
      const { code } = responseBody;
      return code;
    });
  
export const postCommentRequest = async (boardNumber: number | string, data: PostCommentRequestDto, token: string) =>
  await axios.post(POST_COMMENT_URL(boardNumber), data, { headers: { Authorization: `Bearer ${token}` } })
    .then((response) => {
      const responseBody: PostCommentResponseDto = response.data;
      const { code } = responseBody;
      return code;
    })
    .catch((error) => {
      const responseBody: ResponseDto = error.response.data;
      const { code } = responseBody;
      return code;
    });

export const patchBoardRequest = async (boardNumber: number | string, data: PatchBoardRequestDto, token: string) =>
  await axios.patch(PATCH_BOARD_URL(boardNumber), data, { headers: { Authorization: `Bearer ${token}` } })
    .then((response) => {
      const responseBody: PatchBoardResponseDto = response.data;
      const { code } = responseBody;
      return code;
    })
    .catch((error) => {
      const responseBody: ResponseDto = error.response.data;
      const { code } = responseBody;
      return code;
    });

export const deleteBoardRequest = async (boardNumber: number | string, token: string) =>
  await axios.delete(DELETE_BOARD_URL(boardNumber), { headers: { Authorization: `Bearer ${token}` } })
    .then((response) => {
      const responseBody: DeleteBoardResponseDto = response.data;
      const { code } = responseBody;
      return code;
    })
    .catch((error) => {
      const responseBody: ResponseDto = error.response.data;
      const { code } = responseBody;
      return code;
    });

export const getUserRequest = async (email: string) =>
  await axios.get(GET_USER_URL(email))
  .then((response) => {
    const responseBody: GetUserResponseDto = response.data;
    return responseBody;
  })
  .catch((error) => {
    const responseBody: ResponseDto = error.response.data;
    return responseBody;
  });

export const getUserBoardListRequest = async (email: string) =>
  await axios.get(GET_USER_BOARD_LIST_URL(email))
  .then((response) => {
    const responseBody: GetUserListResponseDto = response.data;
    return responseBody;
  })
  .catch((error) => {
    const responseBody: ResponseDto = error.response.data;
    return responseBody;
  });

export const getSignInUserRequest = async (token: string) => {
  const headers = { headers: { 'Authorization': `Bearer ${token}` } };
  const result = await axios.get(GET_SIGN_IN_USER_URL(), headers)
  .then((response) => {
    const responseBody: GetLoginUserResponseDto = response.data;
    return responseBody;
  })
  .catch((error) => {
    const responseBody: ResponseDto = error.response.data;
    return responseBody;
  });
  return result;
}

export const uploadFileRequest = async (data: FormData) =>
  await axios.post(UPLOAD_FILE(), data, { headers: { 'Content-Type': 'multipart/form-data' }})
  .then((response) => {
    const imageUrl: string = response.data;
    return imageUrl;
  })
  .catch((error) => null);

export const postBoardRequest = async (data: PostBoardRequestDto, token: string) =>
  await axios.post(POST_BOARD_URL(), data, { headers: { Authorization: `Bearer ${token}` } })
  .then((response) => {
    const responseBody: PostBoardResponseDto = response.data;
    const { code } = responseBody;
    return code;
  })
  .catch((error) => {
    const responseBody: ResponseDto = error.response.data;
    const { code } = responseBody;
    return code;
  });

export const patchNicknameRequest = async (data: PatchNicknameRequestDto) =>
  await axios.patch(PATCH_USER_NICKNAME_URL(), data)
  .then((response) => {
    const responseBody: PatchNicknameResponseDto = response.data;
    const { code } = responseBody;
    return code;
  })
  .catch((error) => {
    const responseBody: ResponseDto = error.response.data;
    const { code } = responseBody;
    return code;
  });

export const patchProfileImageRequest = async (data: PatchProfileImageRequestDto) =>
  await axios.patch(PATCH_USER_PROFILE_URL(), data)
  .then((response) => {
    const responseBody: PatchProfileImageResponseDto = response.data;
    const { code } = responseBody;
    return code;
  })
  .catch((error) => {
    const responseBody: ResponseDto = error.response.data;
    const { code } = responseBody;
    return code;
  });