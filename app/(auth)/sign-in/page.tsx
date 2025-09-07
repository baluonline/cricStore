import { Metadata } from "next";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";
import CredentialSignInForm from "./CredentialSignInForm";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import MapViewComponent from "./MapView";
export const metadata: Metadata = {
  title: "Sign In",
};

const SignInPage = async (props: {
  searchParams: Promise<{
    callbackUrl?: string;
  }>;
}) => {
  const session = await auth();
  const { callbackUrl } = await props.searchParams;

  if (session) {
    redirect(callbackUrl || "/");
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <Card>
        <CardHeader className="space-y-4">
          <Link className="flex-center" href="/" />
          <Image
            src="/images/logo.svg"
            alt={`${APP_NAME} logo`}
            priority={true}
            width={100}
            height={100}
          />

          <CardTitle className="text-center">Sign In</CardTitle>
          <CardDescription className="text-center">
            Sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <CredentialSignInForm />
        </CardContent>
      </Card>
      <div className="mt-6">
        <MapViewComponent />
      </div>
    </div>
  );
};

export default SignInPage;
