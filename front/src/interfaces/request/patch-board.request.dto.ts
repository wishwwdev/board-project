export default interface PatchBoardRequestDto {
  boardNumber: number;
  title: string;
  contents: string;
  imageUrl?: string | null;
}