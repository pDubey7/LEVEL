import { create } from 'zustand';
import { User, UserRole } from '../types';

interface AuthStore {
  user: User | null;
  role: UserRole | null;
  gymId: string | null;
  isLoading: boolean;
  setUser: (user: User | null) => void;
  setRole: (role: UserRole | null) => void;
  setGymId: (id: string | null) => void;
  setLoading: (loading: boolean) => void;
  reset: () => void;
}

const initialState = {
  user: null,
  role: null,
  gymId: null,
  isLoading: false,
};

export const useAuthStore = create<AuthStore>((set) => ({
  ...initialState,
  setUser: (user) => set({ user }),
  setRole: (role) => set({ role }),
  setGymId: (gymId) => set({ gymId }),
  setLoading: (isLoading) => set({ isLoading }),
  reset: () => set(initialState),
}));
