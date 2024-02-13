import ResponseDto from "../response.dto";

export default interface GetFavoriteListResponseDto extends ResponseDto {
  favoriteList: FavoriteResponseDto[];
}

interface FavoriteResponseDto {
  nickname: string;
  email: string;
  profileImageUrl: string;
}