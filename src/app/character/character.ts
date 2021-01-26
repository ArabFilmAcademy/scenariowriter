export interface Character {
  id: number;
  name: string;
  profile?: Profile;
}
export interface Profile {
  dob?: string;
  bio?: string;
  relatives?: Relative[];
}
export interface Relative {
  characterId?: number;
  name: string;
  relation: string;
  relative?: Relative[];
  bio?: string;
  dob?: string;
  dod?: string;
}
