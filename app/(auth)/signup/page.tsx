import FormSignup from "@/app/components/ui/Forms/FormSignup";

const Signup = () => {
  return (
    <main
      className="min-h-screen w-full flex justify-center items-center"
      style={{
        backgroundImage: "url(background.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <FormSignup />
    </main>
  );
};

export default Signup;
