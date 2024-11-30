import { QwikAuth$ } from "@auth/qwik";
import Credentials from "@auth/qwik/providers/credentials";

export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [
      Credentials({
        async authorize(credentials, req) {
          // Add logic here to look up the user from the credentials supplied
          const user = {
            id: 1,
            name: "Mike",
            email: "mike@example.com",
          };

          return user;
        },
      }),
    ],
  }),
);
