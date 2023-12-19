import { LoginForm } from "@/components/loginForm";
import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const isAuthenticated = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);
  return (
    <section className="flex h-screen items-center justify-center bg-primary">
      <div className="rounded-[26px] py-16 px-[110px] w-[742px] bg-white">
        <div className="flex flex-col items-center">
          <h1 className="mb-12 font-montserrat text-[30px] font-bold leading-8">
            Tizimga kirish
          </h1>
          <LoginForm />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
