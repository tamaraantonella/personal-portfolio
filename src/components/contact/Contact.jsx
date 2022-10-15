import React, { useRef } from "react";
import { HiOutlineMail } from "react-icons/hi";
import emailjs from "@emailjs/browser";
import HeaderSocial from "../header/HeaderSocial";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const [t] = useTranslation("global");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_bn51iet",
      "template_2e0bbkm",
      form.current,
      "S3DaClrNbGdMsCmyZ"
    );
    e.target.reset(); //reset los inputs
  };
  return (
    <section
      id="contact"
      className="flex flex-col items-center mx-auto min-h-screen py-8 "
    >
      <h5 className={`text-color_light md:text-lg `}>{t("contact.intro")}</h5>
      <h2 className="text-3xl text-center my-3 md:text-5xl md:text-left mb-5">
        {" "}
        {t("contact.title")}
      </h2>
      <div className="flex flex-col md:flex-row gap-8  mx-auto justify-center mt-5">
        <div className="flex flex-col">
          <article className="bg-color_bg_variant p-4 px-8 border border-solid border-transparent transition-all ease-in-out duration-300 text-center rounded-md max-w-[300px] min-w-[230px] flex flex-col gap-5 items-center mx-auto hover:border-color_primary_variant hover:bg-transparent">
            <p className="text-xl">
              <HiOutlineMail />
            </p>

            <h5>tamarafrazzetta@gmail.com</h5>
            <a
              href="mailto:tamarafrazzetta@gmail.com"
              className="text-[1rem] mb-3"
              target="_blank"
              rel="noreferrer"
            >
              {t("contact.email")}
            </a>
          </article>
          <div className="mx-auto">
            <HeaderSocial />
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className=" flex flex-col gap-3 ">
          <input
            className="w-full rounded-md bg-transparent p-5 border-2 border-solid boder-color_primary_variant resize-none text-color_light "
            type="text"
            name="name"
            id=""
            placeholder="Your full name"
            required
          />
          <input
            className="w-full rounded-md bg-transparent p-5 border-2 border-solid boder-color_primary_variant resize-none text-color_light "
            type="email"
            name="email"
            id=""
            placeholder="Your email address"
            required
          />
          <textarea
            className="w-full rounded-md bg-transparent p-5 border-2 border-solid boder-color_primary_variant resize-none text-color_light "
            name="message"
            id=""
            cols="30"
            rows="5"
            placeholder="Your message"
            required
          ></textarea>
          <button
            type="submit"
            className="border border-solid rounded-md bg-color_primary px-5 py-2 w-fit  block pointer text-color_bg_variant  hover:bg-color_white transition ease-in-out duration-300 hover:text-color_bg hover:border-transparent"
          >
            {t("contact.send")}
          </button>
        </form>
      </div>
    </section>
  );
}
