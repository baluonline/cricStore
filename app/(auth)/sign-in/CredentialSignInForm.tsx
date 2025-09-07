"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInCredentials } from "@/lib/actions/user.actions";
import { signDefaultCredentials } from "@/lib/constants";
import Link from "next/link";
import { useActionState } from "react";
import { useSearchParams } from "next/navigation";

import { useFormStatus } from "react-dom";

const CredentialSignInForm = () => {
  const [data, action] = useActionState(signInCredentials, {
    success: false,
    message: "",
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const SigninButton = () => {
    const { pending } = useFormStatus();
    return (
      <Button
        type="submit"
        className="w-full"
        variant="default"
        disabled={pending}
      >
        {pending ? "Signing In..." : "Sign In"}
      </Button>
    );
  };
  return (
    <form action={action}>
      <input type="hidden" name="callbackUrl" value={callbackUrl} />
      <div className="space-y-6">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            defaultValue={signDefaultCredentials.email}
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            required
            autoComplete="current-password"
            defaultValue={signDefaultCredentials.password}
          />
        </div>
        <div>
          <SigninButton />
        </div>
        {data && !data.success && (
          <div className="text-sm text-center text-destructive ">
            {data.message}
          </div>
        )}
        <div className="text-sm text-center text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" className="link">
            Sign Up
          </Link>
        </div>
      </div>
    </form>
  );
};

export default CredentialSignInForm;
