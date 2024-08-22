"use client";
import React, { useState } from "react";
import Lottie from "react-lottie";
import animationData from "../data/confetti.json";
import { useForm, SubmitHandler } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { TypewriterEffect } from "./ui/typewriter-effect";

interface IFormInput {
  fellowname: string;
  companyname?: string;
  websitename?: string;
  emailladdress: string;
  fellowmessage: string;
}

export function SignupForm() {
  const [animationVisible, setAnimationVisible] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const typeWriterText = [
    { text: "let" },
    { text: "us" },
    { text: "grab " },
    { text: "a" },
    { text: "virtual" },
    { text: "tea" },
    { text: "or" },
    { text: "drop", className: "text-white" },
    { text: "a", className: "text-white" },
    { text: "line", className: "text-white" },
  ];

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DATABASE_API}/fellow/add`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response) {
        console.log("fellow added Successfully");
        setAnimationVisible(true); // Show animation on successful submission
        reset(); // Reset the form fields after successful submission
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="py-20" id="contact">
      <TypewriterEffect words={typeWriterText} />
      <div
        className="max-w-md w-full mx-auto rounded-2xl p-4 md:p-8 shadow-input dark:bg-black my-20"
        style={{
          backgroundImage:
            "linear-gradient(-225deg, #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100%)",
        }}
      >
        <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="fullname">
              Full name<span className="text-red-600">*</span>
            </Label>
            <Input
              id="fullname"
              type="text"
              {...register("fellowname", { required: "Full name is required" })}
              aria-required="true"
            />
            {errors.fellowname && (
              <p className="text-red-600">{errors.fellowname.message}</p>
            )}
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="companyname">Company name</Label>
            <Input id="companyname" type="text" {...register("companyname")} />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="website">Website</Label>
            <Input id="website" type="text" {...register("websitename")} />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">
              Email Address<span className="text-red-600">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              {...register("emailladdress", {
                required: "Email address is required",
              })}
              aria-required="true"
            />
            {errors.emailladdress && (
              <p className="text-red-600">{errors.emailladdress.message}</p>
            )}
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="message">
              Your message<span className="text-red-600">*</span>
            </Label>
            <Input
              id="message"
              type="text"
              {...register("fellowmessage", {
                required: "Your message is required",
              })}
              aria-required="true"
            />
            {errors.fellowmessage && (
              <p className="text-red-600">{errors.fellowmessage.message}</p>
            )}
          </LabelInputContainer>

          <button type="submit">
            <MagicButton
              title="Submit message"
              icon={<FaLocationArrow />}
              position="right"
            />
            <BottomGradient />
          </button>
        </form>
      </div>

      {animationVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      )}
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
