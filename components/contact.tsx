"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/hooks/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import { toast } from "sonner";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.2);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-10 dark:text-white mx-2 sm:mx-0 ">
        Please contact me directly at{" "}
        <a
          className="underline hover:text-[#9884fc]"
          href="mailto:aqibfaisalshabir@gmail.com"
        >
          aqibfaisalshabir@gmail.com
        </a>{" "}
        or through this form
      </p>

      <form
        className="mt-10 flex flex-col mx-4 sm:mx-0"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully!");
        }}
      >
        <input
          name="senderEmail"
          className="h-14 rounded-lg borderBlack px-4 dark:text-white dark:bg-black/60 dark:outline-none"
          type="email"
          required
          maxLength={100}
          placeholder="Your email"
          aria-label="insert your email"
        />
        <textarea
          name="message"
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:text-white dark:bg-black/60 dark:outline-none"
          placeholder="Your message"
          required
          maxLength={500}
          aria-label="insert your message"
        />
        <div className="flex justify-center sm:justify-end">
          <SubmitBtn />
        </div>
      </form>
    </motion.section>
  );
}
