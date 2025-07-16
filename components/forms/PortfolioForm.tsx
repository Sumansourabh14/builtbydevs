"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import PortfolioSubmitSuccessDialog from "../popups/PortfolioSubmitSuccessDialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const countries = [
  "India",
  "United States",
  "United Kingdom",
  "Germany",
  "Canada",
  "Australia",
  "Singapore",
  "Spain",
  "France",
  "Other",
];

export default function PortfolioForm() {
  const [loading, setLoading] = useState(false);
  const [openSuccessPopup, setOpenSuccessPopup] = useState(false);
  const [country, setCountry] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const experienceValue = formData.get("experience");
    const experience =
      experienceValue && experienceValue.toString().trim() !== ""
        ? Number(experienceValue)
        : undefined;

    const payload = {
      name: formData.get("name"),
      url: formData.get("url"),
      designation: formData.get("designation"),
      stack: formData
        .get("stack")
        ?.toString()
        .split(",")
        .map((s) => s.trim()),
      experience: experience,
      country: country,
      githubUrl: formData.get("githubUrl"),
    };

    try {
      const res = await fetch("/api/submit-portfolio", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setOpenSuccessPopup(true);
      form.reset();
      setCountry("");
    } catch (err) {
      if (err instanceof Error) {
        setOpenSuccessPopup(false);
        toast.error(err.message);
      } else {
        setOpenSuccessPopup(false);
        toast.error("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input name="name" id="name" placeholder="John Doe" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="url">Portfolio URL</Label>
          <Input
            name="url"
            id="url"
            type="url"
            placeholder="Enter your amazing portfolio URL"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="githubUrl">GitHub URL</Label>
          <Input
            name="githubUrl"
            id="githubUrl"
            placeholder="Enter your GitHub profile URL"
            type="url"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="designation">Designation</Label>
          <Input
            name="designation"
            id="designation"
            placeholder="e.g., Frontend Developer"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="stack">Stack (comma-separated)</Label>
          <Input
            name="stack"
            id="stack"
            placeholder="React, Node.js, MongoDB"
          />
        </div>
        <section className="grid grid-cols-2 gap-8">
          <div className="space-y-2">
            <Label htmlFor="experience">Experience (in years)</Label>
            <Input
              name="experience"
              id="experience"
              type="number"
              min="0"
              placeholder="2"
            />
          </div>
          <div className="space-y-2">
            <Label>Country</Label>
            <Select
              required
              value={country}
              onValueChange={(value) => setCountry(value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select your country" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </section>

        <Button
          type="submit"
          disabled={loading}
          className="w-full cursor-pointer"
        >
          {loading ? "Submitting..." : "Submit Portfolio"}
        </Button>
      </form>
      <PortfolioSubmitSuccessDialog
        open={openSuccessPopup}
        onOpenChange={setOpenSuccessPopup}
      />
    </>
  );
}
