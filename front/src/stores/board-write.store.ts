import { create } from 'zustand';

interface BoardWriteStore {
  boardTitle: string;
  boardContent: string;
  boardImage: File | null;

  setBoardTitle: (boardTitle: string) => void;
  setBoardContent: (boardContent: string) => void;
  setBoardImage: (boardImage: File | null) => void;
}

const useStore = create<BoardWriteStore>((set) => ({
  boardTitle: '',
  boardContent: '',
  boardImage: null,
}));