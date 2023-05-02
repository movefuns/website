const MOVEFUNS_TEAM: Record<string, AuthorDetails> = {
  xx: {
    name: "xx",
    twitterUsername: "xx",
    avatar: "xx",
  },
};

export type Author = keyof typeof MOVEFUNS_TEAM;
export type AuthorDetails = {
  name: string;
  twitterUsername?: string;
  avatar: string;
};

export default MOVEFUNS_TEAM;
