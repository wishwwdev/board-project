import { create } from 'zustand';

interface BoardWriteStore {
  boardNumber: string;
  boardTitle: string;
  boardContent: string;
  boardImage: File | null;

  setBoardNumber: (boarNumber: string) => void;
  setBoardTitle: (boardTitle: string) => void;
  setBoardContent: (boardContent: string) => void;
  setBoardImage: (boardImage: File | null) => void;

  resetBoard: () => void;
}

const useStore = create<BoardWriteStore>((set) => ({
  boardNumber: '',
  boardTitle: '',
  boardContent: '',
  boardImage: null,

  setBoardNumber: (boardNumber) => set((state) => ({ ...state, boardNumber })),
  setBoardTitle: (boardTitle) => set((state) => ({ ...state, boardTitle })),
  setBoardContent: (boardContent) => set((state) => ({ ...state, boardContent })),
  setBoardImage: (boardImage) => set((state) => ({ ...state, boardImage })),
  resetBoard: () => set((state) => ({ ...state, boardNumber: '', boardTitle: '', boardContent: '', boardImage: null })),
}));

export default useStore;