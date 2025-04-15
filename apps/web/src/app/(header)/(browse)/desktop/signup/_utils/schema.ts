import { z } from "zod";

const credential = {
  email: "nononcrust@gmail.com",
  password: "123",
};

export const emailFormSchema = z.object({
  email: z.string().email("올바른 이메일 주소를 입력해 주세요."),
});

export type EmailForm = z.infer<typeof emailFormSchema>;

export const authApi = {
  checkEmail: async (email: string) => {
    await sleep(500);
    console.log(`check email: ${email}`);
  },
  login: async (email: string, password: string) => {
    await sleep(500);

    if (email !== credential.email || password !== credential.password) {
      throw new Error("Invalid credentials");
    }
  },
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
