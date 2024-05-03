"use client";

import React, { useState } from "react";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { cn } from "@/lib/utils";

type SwitcherProps = {
  className?: string;
};

export const Switcher = ({ className }: SwitcherProps) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="lg:flex items-center space-x-2 hidden">
      {/* <Label htmlFor="language-switcher" className={cn("uppercase")}>
        en
      </Label> */}
      <p className="uppercase text-black">en</p>
      <Switch id="language-switcher" />
      <p className="uppercase text-black">es</p>

      {/* <Label htmlFor="language-switcher" className={cn("uppercase")}>
        es
      </Label> */}
    </div>
  );
};
