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
import { FileUpload } from "@/components/ui/file-upload";
import { FileUploadDemo } from "../../common/FileUpload";

type SignupSchema = z.infer<typeof signupSchema>;

const signupSchema = z
  .object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Please enter a valid email" }),
    password: z
      .string()
      .min(5, { message: "Password must be at least 5 characters" }),
    confirmPassword: z
      .string()
      .min(5, { message: "Password must be at least 5 characters" }),

    avatar: z.any(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const FormSignup = () => {
  const form = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      avatar: "",
    },
  });

  const onSubmit = async (data: SignupSchema) => {
    if (data.avatar) {
      const formData = new FormData();
      formData.append("avatar", data.avatar[0]);
      formData.append("upload_preset", "au6wplfw");
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_CLOUDINARY_URL!, {
          method: "POST",
          body: formData,
        });
        console.log(await response.json());
      } catch (error) {}
    }
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
            <FileUploadDemo name="avatar" />
            <FormInput name="name" label="Name" type="text" />
            <FormInput name="email" label="Email" type="email" />
            <FormInput name="password" label="Password" type="password" />
            <FormInput
              name="confirmPassword"
              label="Confirm password"
              type="password"
            />
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </form>
        </Form>
        <div className="flex items-center justify-center gap-2 text-base font-semibold">
          <p>
            Already have an account?{" "}
            <Link href={"/signup"} className="text-rose-500 hover:underline">
              Login in
            </Link>
          </p>
        </div>
      </MaxWidthWrapper>
    </MotionItem>
  );
};

export default FormSignup;
