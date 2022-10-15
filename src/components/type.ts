export type NAME = 'Chris' | 'James';
export type NavProps = {
  isSelected: boolean | null;
  name: NAME;
  users: User[];
}

export type User = {
  name: NAME;
  age?: number;
}

