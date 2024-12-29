import FormLogin from "@/app/components/ui/Forms/FormLogin";

const Login = () => {
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
      <FormLogin />
    </main>
  );
};

export default Login;
