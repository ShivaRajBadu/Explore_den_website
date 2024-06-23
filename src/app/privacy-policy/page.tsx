import Headers from "@/components/headers/Headers";
import Navigation from "@/components/headers/Navigation";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Privacy Policy",
};
const page = () => {
  return (
    <>
      <Headers background="bg-white">
        <Navigation />
      </Headers>
      <div className="font-sans text-gray-800 max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-900 border-b-2 border-blue-500 pb-4 mb-6">
          Privacy Policy
        </h1>

        <section className="bg-gray-100 border-l-4 border-blue-500 p-4 mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Introduction
          </h2>
          <p className="mb-4">
            Exploreden ("we," "our," or "us") is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you visit our website
            exploreden.com, including any other media form, media channel,
            mobile website, or mobile application related or connected thereto
            (collectively, the "Site"). Please read this privacy policy
            carefully. If you do not agree with the terms of this privacy
            policy, please do not access the site.
          </p>
        </section>

        <section className="bg-gray-100 border-l-4 border-blue-500 p-4 mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Information We Collect
          </h2>
          <p className="mb-4">
            We may collect information about you in a variety of ways. The
            information we may collect on the Site includes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Personal Data:</strong> Personally identifiable
              information, such as your name, shipping address, email address,
              and telephone number, and demographic information, such as your
              age, gender, hometown, and interests, that you voluntarily give to
              us when you register with the Site or when you choose to
              participate in various activities related to the Site, such as
              online chat and message boards.
            </li>
            <li>
              <strong>Derivative Data:</strong> Information our servers
              automatically collect when you access the Site, such as your IP
              address, your browser type, your operating system, your access
              times, and the pages you have viewed directly before and after
              accessing the Site.
            </li>
            <li>
              <strong>Financial Data:</strong> Financial information, such as
              data related to your payment method (e.g., valid credit card
              number, card brand, expiration date) that we may collect when you
              purchase, order, return, exchange, or request information about
              our services from the Site.
            </li>
            <li>
              <strong>Data From Social Networks:</strong> User information from
              social networking sites, including your name, your social network
              username, location, gender, birth date, email address, profile
              picture, and public data for contacts, if you connect your account
              to such social networks.
            </li>
            <li>
              <strong>Mobile Device Data:</strong> Device information, such as
              your mobile device ID, model, and manufacturer, and information
              about the location of your device, if you access the Site from a
              mobile device.
            </li>
            <li>
              <strong>Third-Party Data:</strong> Information from third parties,
              such as personal information or network friends, if you connect
              your account to the third party and grant the Site permission to
              access this information.
            </li>
            <li>
              <strong>Data From Contests, Giveaways, and Surveys:</strong>{" "}
              Personal and other information you may provide when entering
              contests or giveaways and/or responding to surveys.
            </li>
          </ul>
        </section>

        <section className="bg-gray-100 border-l-4 border-blue-500 p-4 mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Use of Your Information
          </h2>
          <p className="mb-4">
            Having accurate information about you permits us to provide you with
            a smooth, efficient, and customized experience. Specifically, we may
            use information collected about you via the Site to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Create and manage your account.</li>
            <li>Process your transactions.</li>
            <li>Email you regarding your account or order.</li>
            <li>Perform administrative functions.</li>
            <li>Respond to your customer service requests.</li>
            <li>Improve our website and offerings.</li>
            <li>
              Monitor and analyze usage and trends to improve your experience
              with the Site.
            </li>
            <li>Perform other business activities as needed.</li>
            <li>
              Prevent fraudulent transactions, monitor against theft, and
              protect against criminal activity.
            </li>
            <li>Notify you of updates to the Site.</li>
            <li>
              Request feedback and contact you about your use of the Site.
            </li>
            <li>Resolve disputes and troubleshoot problems.</li>
            <li>Respond to product and customer service requests.</li>
            <li>Send you a newsletter.</li>
            <li>Solicit support for the Site.</li>
          </ul>
        </section>

        <section className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
          <h2 className="text-2xl font-semibold text-red-700 mb-4">
            Security of Your Information
          </h2>
          <p className="mb-4">
            We use administrative, technical, and physical security measures to
            help protect your personal information. While we have taken
            reasonable steps to secure the personal information you provide to
            us, please be aware that despite our efforts, no security measures
            are perfect or impenetrable, and no method of data transmission can
            be guaranteed against any interception or other type of misuse. Any
            information disclosed online is vulnerable to interception and
            misuse by unauthorized parties. Therefore, we cannot guarantee
            complete security if you provide personal information.
          </p>
        </section>

        <section className="bg-gray-100 border-l-4 border-blue-500 p-4 mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Policy for Children
          </h2>
          <p className="mb-4">
            We do not knowingly solicit information from or market to children
            under the age of 13. If we learn that we have collected personal
            information from a child under age 13 without verification of
            parental consent, we will delete that information as quickly as
            possible. If you believe we might have any information from or about
            a child under 13, please contact us at{" "}
            <a
              href="mailto:privacy@exploreden.com"
              className="text-blue-600 hover:underline"
            >
              privacy@exploreden.com
            </a>
            .
          </p>
        </section>
      </div>
    </>
  );
};

export default page;
