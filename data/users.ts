export const USERS = {
  standard: {
    username: "standard_user",
    password: "wrongpass",
  },
  wrongUser: {
    username: "wrongUser",
    password: "secret_sauce",
  },
  wrongPass: {
    username: "standard_user",
    password: "wrongpass",
  },
  emptyUser: {
    username: "",
    password: "secret_sauce",
  },
  emptyPass: {
    username: "standard_user",
    password: "",
  },
} as const;
