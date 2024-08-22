"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = "<Dangar>";

export function TextGenerateEffectCompo() {
  return <TextGenerateEffect duration={2} filter={false} words={words} />;
}
