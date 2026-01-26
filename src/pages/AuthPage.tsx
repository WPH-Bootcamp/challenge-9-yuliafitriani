import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { LoginForm } from "@/features/auth/login/ui/LoginForm";
import { RegisterForm } from "@/features/auth/register/ui/RegisterForm";
import { Logo } from "@/components/Logo";
import FrameImage from "@/assets/Frame 76.jpg";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left Image (lg only) */}
      <div className="w-auto hidden lg:block">
        <img alt="Auth Image" src={FrameImage} className="w-auto" />
      </div>

      {/* Right Content */}
      <div
        className="
          flex flex-1
          items-center justify-center
          px-4
        "
      >
        <Card className="w-[345px] border-none shadow-none">
          <CardContent className="flex flex-col gap-4 p-0">
            {/* Logo */}
            <Logo />

            {/* Title */}
            <div>
              <h1 className="text-2xl font-extrabold text-[#0A0D12]">
                Welcome Back
              </h1>
              <p className="text-sm font-medium text-[#0A0D12]">
                Good to see you again! Let’s eat
              </p>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="signin">
              <TabsList className="h-12 w-full rounded-2xl bg-[#F5F5F5] p-1">
                <TabsTrigger
                  value="signin"
                  className="flex-1 rounded-lg text-sm font-bold data-[state=active]:bg-white data-[state=active]:shadow"
                >
                  Sign in
                </TabsTrigger>
                <TabsTrigger
                  value="signup"
                  className="flex-1 rounded-lg text-sm font-medium text-[#535862]"
                >
                  Sign up
                </TabsTrigger>
              </TabsList>

              <TabsContent value="signin" className="mt-4">
                <LoginForm />
              </TabsContent>

              <TabsContent value="signup" className="mt-4">
                <RegisterForm />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
