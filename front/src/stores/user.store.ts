import UserResponseDto from "src/interfaces/response/user.response.dto";
import { create } from "zustand";

interface UserStore {
  user: UserResponseDto | null;
  setUser: (user: UserResponseDto | null) => void;
}

const useStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set((state) => ({ ...state, user })),
}));

export default useStore;