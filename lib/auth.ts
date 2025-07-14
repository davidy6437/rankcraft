import nodemailer from 'nodemailer';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import EmailProvider from 'next-auth/providers/email';
import type { NextAuthOptions } from 'next-auth';

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER!,
      from: process.env.EMAIL_FROM!,
      async sendVerificationRequest({ identifier, url, provider }) {
        const { server, from } = provider;
        const transport = nodemailer.createTransport(server);

        await transport.sendMail({
          to: identifier,
          from,
          subject: 'Sign in to RankCraft',
          text: `Sign in link: ${url}`,
          html: `<p>Sign in link: <a href="${url}">${url}</a></p>`,
        });
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
