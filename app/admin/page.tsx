"use client";

import H1 from "@/components/text/H1";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PortfolioProps } from "@/types";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function AdminPage() {
  const [pending, setPending] = useState<PortfolioProps[]>([]);
  const [authorized, setAuthorized] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const pass = searchParams.get("password");
    if (pass === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setAuthorized(true);
    }
  }, [searchParams]);

  useEffect(() => {
    if (!authorized) return;

    fetch("/api/pending-portfolios")
      .then((res) => res.json())
      .then((data) => setPending(data.data || []));
  }, [authorized]);

  if (!authorized) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold">Unauthorized</h2>
        <p className="text-muted-foreground">
          You must provide a valid password in the URL.
        </p>
      </div>
    );
  }

  return (
    <main className="max-w-2xl mx-auto py-10 space-y-4">
      <H1 title="Pending Portfolios" />
      {pending.length === 0 ? (
        <p>No pending portfolios</p>
      ) : (
        pending.map((p) => (
          <Card key={p._id} className="border p-4 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">{p.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{p.designation}</p>
              <p className="text-sm text-muted-foreground">{p.url}</p>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              {!p.stack.includes("") && (
                <p>
                  <strong>Stack:</strong> {p.stack.join(", ")}
                </p>
              )}
              {p.experience && (
                <p>
                  <strong>Experience:</strong> {p.experience}{" "}
                  {p.experience === 1 ? "year" : "years"}
                </p>
              )}
              {p.country && (
                <p>
                  <strong>Country:</strong> {p.country}
                </p>
              )}
              <Link
                href={p.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-sm"
              >
                GitHub
              </Link>
            </CardContent>
            <CardFooter>
              <Button
                onClick={async () => {
                  const res = await fetch("/api/approve-portfolio", {
                    method: "PATCH",
                    body: JSON.stringify({ id: p._id }),
                    headers: { "Content-Type": "application/json" },
                  });
                  const data = await res.json();
                  if (data.success) {
                    setPending((prev) => prev.filter((x) => x._id !== p._id));
                    toast.success("Portfolio approved successfully!");
                  }
                }}
                className="cursor-pointer"
              >
                Approve
              </Button>
            </CardFooter>
          </Card>
        ))
      )}
    </main>
  );
}
