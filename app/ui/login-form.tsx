"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/app/ui/kit/Button";
import { Input } from "@/app/ui/kit/Input";
import { Card } from "./kit/Card";
import { useAuth } from "@/app/context/auth-context";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { login, isLoading, user } = useAuth();

  // Redirect if user is already logged in
  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const success = await login(email, password);

      if (success) {
        router.push("/dashboard");
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("An error occurred during login");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <Card size="lg" title="Log in">
        <div className="w-full">
          <div>
            <Input
              type="email"
              label="Email"
              placeholder="e.g. test@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mt-4">
            <Input
              type="password"
              label="Password"
              placeholder="e.g. password123"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
        </div>

        <div className="mt-4">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Log in"}
          </Button>
        </div>
      </Card>
    </form>
  );
}
