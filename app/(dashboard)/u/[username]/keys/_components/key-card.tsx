"use client";

import React, { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { CopyButton } from "./copy-button";

export function KeyCard({ value }: { value: string | null }) {
  const [show, setShow] = useState(false);

  return (
    <div className="rounded-xl shadow-md shadow-[red] p-6">
      <div className="flex items-start gap-x-10">
        <p className="font-semibold shrink-0">Stream Key</p>
        <div className="space-y-2 w-full">
          <div className="w-full flex items-center gap-x-2">
            <Input
              value={value || ""}
              disabled
              placeholder="Stream Key"
              type={show ? "text" : "password"}
            />
            <CopyButton value={value || ""} />
          </div>
          <Button size="sm" variant='ghost' className=" shadow-md shadow-neutral-500" onClick={() => setShow(!show)}>
            {show ? "Hide" : "Show"}
          </Button>
        </div>
      </div>
    </div>
  );
}
