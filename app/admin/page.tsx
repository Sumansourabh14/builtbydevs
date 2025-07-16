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
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function AdminPage() {
  const [pending, setPending] = useState<PortfolioProps[]>([]);

  useEffect(() => {
    fetch("/api/pending-portfolios")
      .then((res) => res.json())
      .then((data) => setPending(data.data || []));
  }, []);

  return (
    <section className="max-w-2xl mx-auto py-10 space-y-4 min-h-10/12">
      <Button
        onClick={() =>
          fetch("/api/admin/logout", { method: "POST" }).then(() =>
            location.reload()
          )
        }
        variant={"destructive"}
        className="cursor-pointer"
      >
        Logout
      </Button>

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
    </section>
  );
}
