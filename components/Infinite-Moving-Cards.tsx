"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./Moving-Cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={images} direction="right" speed="normal" />
    </div>
  );
}

const images = [
  "/images/logoAlicorp.png",
  "/images/cargillLogo.png",
  "/images/molLogo.png",
  "/images/navig8Logo.png",
  "/images/quimpacLogo.png",
];
