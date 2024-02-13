import ResponseDto from "../response.dto";

export default interface GetCommentListResponseDto extends ResponseDto {
  top3: CommentListResponseDto[];
}

interface CommentListResponseDto {
  profileImageUrl: string;
  nickname: string;
  contents: string;
  writeDatetime: string;
}