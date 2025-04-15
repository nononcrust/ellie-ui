"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Email } from "./_components/email";
import { Password } from "./_components/password";
import { EmailForm, emailFormSchema } from "./_utils/schema";

export default function SignupPage() {
  const [step, setStep] = useState(1);

  const form = useForm<EmailForm>({
    resolver: zodResolver(emailFormSchema),
    defaultValues: {
      email: "nononcrust@gmail.com",
    },
  });

  const onEmailFormSubmit = () => {
    setStep(2);
  };

  return (
    <main className="mx-auto mt-16 max-w-[400px]">
      {step === 1 && <Email form={form} onSubmit={onEmailFormSubmit} />}
      {step === 2 && <Password email={form.getValues("email")} onPrevious={() => setStep(1)} />}
    </main>
  );
}
