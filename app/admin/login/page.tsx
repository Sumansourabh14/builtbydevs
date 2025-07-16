"use client";

import H1 from "@/components/text/H1";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AdminLogin = () => {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState<string | "">("");
  const [error, setError] = useState<string | "">("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch(`/api/admin/login`, {
      method: "POST",
      body: JSON.stringify({ password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      const data = await res.json();
      setError(data.error || "Login failed");
      setLoading(false);
    } else {
      setLoading(false);
      router.push(`/admin`);
    }
  };

  return (
    <section className="max-w-2xl mx-auto py-10 space-y-4">
      <H1 title="Admin Login" />

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-10 space-y-6"
      >
        <section className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </section>
        {error && <p className="text-sm text-red-600 text-center">{error}</p>}
        <Button
          type="submit"
          className="w-full cursor-pointer"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>
    </section>
  );
};

export default AdminLogin;
