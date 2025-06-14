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
    { text: "let", className: "text-primary" },
    { text: "us", className: "text-primary" },
    { text: "grab ", className: "text-primary" },
    { text: "a", className: "text-primary" },
    { text: "virtual", className: "text-primary" },
    { text: "tea", className: "text-primary" },
    { text: "or", className: "text-primary" },
    { text: "drop", className: "text-accent-blue" },
    { text: "a", className: "text-accent-blue" },
    { text: "line", className: "text-accent-blue" },
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
        setAnimationVisible(true);
        reset();
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
    <div className="py-20 bg-secondary font-mono" id="contact">
      <TypewriterEffect words={typeWriterText} />
      <div
        className="max-w-md w-full mx-auto rounded-2xl p-4 md:p-8 shadow-[0_4px_12px_rgb(0_0_0/0.2)] bg-secondary my-20"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(56, 189, 248, 0.1) 0%, rgba(167, 139, 250, 0.1) 100%)",
        }}
      >
        <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="fullname" className="text-primary font-normal">
              Full name<span className="text-accent-purple">*</span>
            </Label>
            <Input
              id="fullname"
              type="text"
              className="text-primary bg-secondary border-gray-700 focus:border-accent-blue focus:ring-accent-blue transition-colors duration-200"
              {...register("fellowname", { required: "Full name is required" })}
              aria-required="true"
            />
            {errors.fellowname && (
              <p className="text-accent-purple">{errors.fellowname.message}</p>
            )}
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="companyname" className="text-primary font-normal">
              Company name
            </Label>
            <Input
              id="companyname"
              type="text"
              className="text-primary bg-secondary border-gray-700 focus:border-accent-blue focus:ring-accent-blue transition-colors duration-200"
              {...register("companyname")}
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="website" className="text-primary font-normal">
              Website
            </Label>
            <Input
              id="website"
              type="text"
              className="text-primary bg-secondary border-gray-700 focus:border-accent-blue focus:ring-accent-blue transition-colors duration-200"
              {...register("websitename")}
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="email" className="text-primary font-normal">
              Email Address<span className="text-accent-purple">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              className="text-primary bg-secondary border-gray-700 focus:border-accent-blue focus:ring-accent-blue transition-colors duration-200"
              {...register("emailladdress", {
                required: "Email address is required",
              })}
              aria-required="true"
            />
            {errors.emailladdress && (
              <p className="text-accent-purple">{errors.emailladdress.message}</p>
            )}
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="message" className="text-primary font-normal">
              Your message<span className="text-accent-purple">*</span>
            </Label>
            <Input
              id="message"
              type="text"
              className="text-primary bg-secondary border-gray-700 focus:border-accent-blue focus:ring-accent-blue transition-colors duration-200"
              {...register("fellowmessage", {
                required: "Your message is required",
              })}
              aria-required="true"
            />
            {errors.fellowmessage && (
              <p className="text-accent-purple">{errors.fellowmessage.message}</p>
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
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-accent-blue to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-accent-purple to-transparent" />
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
    <div className={cn("flex flex-col space-y-2 w-full font-mono", className)}>
      {children}
    </div>
  );
};