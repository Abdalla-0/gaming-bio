"use client";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import FormInput from "./FormInput";
import MotionItem from "../../common/MotionItem";
import MaxWidthWrapper from "../../defaults/MaxWidthWrapper";
import Logo from "../../defaults/Logo";
import Link from "next/link";

type LoginSchema = z.infer<typeof loginSchema>;

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email" }),
  password: z
    .string()
    .min(5, { message: "Password must be at least 5 characters" }),
});

const FormLogin = () => {
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginSchema) => {
    console.log(data);
  };

  return (
    <MotionItem
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-6/12 duration-300"
    >
      <MaxWidthWrapper className="flex flex-col gap-4 bg-black/60 rounded-2xl border border-input">
        <Logo className="justify-center" />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <FormInput name="email" label="Email" type="email" />
            <FormInput name="password" label="Password" type="password" />
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </form>
        </Form>
        <div className="flex items-center justify-center gap-2 text-base font-semibold">
          <p>
            Do not have an account?{" "}
            <Link href={"/signup"} className="text-rose-500 hover:underline">
              Register with us now
            </Link>
          </p>
        </div>
      </MaxWidthWrapper>
    </MotionItem>
  );
};

export default FormLogin;
