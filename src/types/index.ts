// ─── Auth ─────────────────────────────────────────────────────────────────────

export interface User {
  id: string;
  email: string;
  phone?: string;
  name?: string;
  avatarUrl?: string;
  createdAt: string;
}

export type UserRole = 'owner' | 'member';

// ─── Gym ──────────────────────────────────────────────────────────────────────

export interface Gym {
  id: string;
  name: string;
  ownerId: string;
  address?: string;
  city?: string;
  pincode?: string;
  logoUrl?: string;
  createdAt: string;
}

// ─── Member ───────────────────────────────────────────────────────────────────

export interface Member {
  id: string;
  userId: string;
  gymId: string;
  name: string;
  phone: string;
  email?: string;
  membershipPlan?: string;
  membershipExpiry?: string;
  isActive: boolean;
  qrCode: string;
  joinedAt: string;
}

// ─── Membership Plan ─────────────────────────────────────────────────────────

export interface MembershipPlan {
  id: string;
  gymId: string;
  name: string;
  durationDays: number;
  price: number;
  currency: 'INR';
  isActive: boolean;
}

// ─── Payment ──────────────────────────────────────────────────────────────────

export type PaymentMethod = 'razorpay' | 'solana_pay' | 'cash';
export type PaymentStatus = 'pending' | 'completed' | 'failed' | 'refunded';

export interface Payment {
  id: string;
  gymId: string;
  memberId: string;
  amount: number;
  currency: 'INR';
  method: PaymentMethod;
  status: PaymentStatus;
  referenceId?: string;
  createdAt: string;
}

// ─── Navigation ───────────────────────────────────────────────────────────────

export type AuthStackParamList = {
  Auth: undefined;
};

export type OwnerTabParamList = {
  Dashboard: undefined;
  Members: undefined;
  Payments: undefined;
  Space: undefined;
  Profile: undefined;
};

export type MemberTabParamList = {
  Home: undefined;
  MyQR: undefined;
  Fitness: undefined;
  Space: undefined;
  Profile: undefined;
};
