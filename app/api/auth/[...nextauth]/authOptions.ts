import type { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import axios from 'axios';
import axiosErrorFormatter from '@/lib/axiosErrorFormattor';
import { API_BASE } from '@/lib/constants';

type LoginApiResponse = {
    success: boolean;
    message: string;
    data: {
        token: string;
        name: string;
        roleId: string;
        avatar: string;
        email: string;
    }
}

const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        name: { type: 'text' },
        password: { type: "password" }
      },
      authorize: async (credentials: any) => {
        try {
          const { data } = await axios.post(`${API_BASE}/login`, {
            name: credentials.name,
            password: credentials.password,
          }); 
          let d = data as LoginApiResponse;
          return {
            name: d.data.name,
            email: d.data.email,
            image: d.data.avatar,
            id: "",
            roleId: d.data.roleId,
            token: d.data.token
          };         
        } catch (error) {
          let e = axiosErrorFormatter(error);
          throw new Error(e);
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
  callbacks: {
    async jwt({ token, user }) {
      return {...token, ...user};
    },
    async session({ session, token}) {
      if (session?.user) return {...session, user: {...session.user, ...token}};
      return session;
    },
  },
  pages: {
    signIn: "/login"
  }
};

export default authOptions;