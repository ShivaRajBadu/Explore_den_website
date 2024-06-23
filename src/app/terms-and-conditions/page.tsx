import Headers from "@/components/headers/Headers";
import Navigation from "@/components/headers/Navigation";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Terms & condtions",
};
const page = () => {
  return (
    <>
      <Headers background="bg-background">
        <Navigation />
      </Headers>
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <header className="bg-blue-600 text-white py-6 px-6">
          <h1 className="text-3xl font-bold text-center text-gray-900 border-b-2 border-blue-500 pb-4 mb-6">
            Terms and Conditions
          </h1>
        </header>
        <section className="px-6 py-4">
          <p className="mb-4">Welcome to exploreden.com!</p>
          <p className="mb-4">
            These terms and conditions outline the rules and regulations for the
            use of ExploreDen's Website, located at https://exploreden.com.au/.
          </p>
          <p className="mb-4">
            By accessing this website we assume you accept these terms and
            conditions. Do not continue to use exploreden.com if you do not
            agree to take all of the terms and conditions stated on this page.
          </p>
          <p className="mb-4">
            The following terminology applies to these Terms and Conditions,
            Privacy Statement and Disclaimer Notice and all Agreements:
            "Client", "You" and "Your" refers to you, the person log on this
            website and compliant to the Company's terms and conditions. "The
            Company", "Ourselves", "We", "Our" and "Us", refers to our Company.
            "Party", "Parties", or "Us", refers to both the Client and
            ourselves. All terms refer to the offer, acceptance and
            consideration of payment necessary to undertake the process of our
            assistance to the Client in the most appropriate manner for the
            express purpose of meeting the Client's needs in respect of
            provision of the Company's stated services, in accordance with and
            subject to, prevailing law of au. Any use of the above terminology
            or other words in the singular, plural, capitalization and/or he/she
            or they, are taken as interchangeable and therefore as referring to
            same.
          </p>
        </section>

        <section className="px-6 py-4 bg-gray-50">
          <h2 className="text-2xl font-bold mb-4">Cookies</h2>
          <p className="mb-4">
            We employ the use of cookies. By accessing exploreden.com, you
            agreed to use cookies in agreement with the ExploreDen's Privacy
            Policy.
          </p>
          <p className="mb-4">
            Most interactive websites use cookies to let us retrieve the user's
            details for each visit. Cookies are used by our website to enable
            the functionality of certain areas to make it easier for people
            visiting our website. Some of our affiliate/advertising partners may
            also use cookies.
          </p>
        </section>
        <section className="px-6 py-4">
          <h2 className="text-2xl font-bold mb-4">License</h2>
          <p className="mb-4">
            Unless otherwise stated, ExploreDen and/or its licensors own the
            intellectual property rights for all material on exploreden.com. All
            intellectual property rights are reserved. You may access this from
            exploreden.com for your own personal use subjected to restrictions
            set in these terms and conditions.
          </p>
          <p className="mb-4">You must not:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Republish material from exploreden.com</li>
            <li>Sell, rent or sub-license material from exploreden.com</li>
            <li>Reproduce, duplicate or copy material from exploreden.com</li>
            <li>Redistribute content from exploreden.com</li>
          </ul>
          <p className="mb-4">
            This Agreement shall begin on the date hereof. Our Terms and
            Conditions were created with the help of the Free Terms and
            Conditions Generator.
          </p>
        </section>
        <section className="px-6 py-4 bg-gray-50">
          <h2 className="text-2xl font-bold mb-4">Comments</h2>
          <p className="mb-4">
            Parts of this website offer an opportunity for users to post and
            exchange opinions and information in certain areas of the website.
            ExploreDen does not filter, edit, publish or review Comments prior
            to their presence on the website. Comments do not reflect the views
            and opinions of ExploreDen, its agents and/or affiliates. Comments
            reflect the views and opinions of the person who post their views
            and opinions.
          </p>
          <p className="mb-4">
            ExploreDen reserves the right to monitor all Comments and to remove
            any Comments which can be considered inappropriate, offensive or
            causes breach of these Terms and Conditions.
          </p>
          <p className="mb-4">You warrant and represent that:</p>
          <ul className="list-disc list-inside mb-4">
            <li>
              You are entitled to post the Comments on our website and have all
              necessary licenses and consents to do so;
            </li>
            <li>
              The Comments do not invade any intellectual property right,
              including without limitation copyright, patent or trademark of any
              third party;
            </li>
            <li>
              The Comments do not contain any defamatory, libelous, offensive,
              indecent or otherwise unlawful material which is an invasion of
              privacy
            </li>
            <li>
              The Comments will not be used to solicit or promote business or
              custom or present commercial activities or unlawful activity.
            </li>
          </ul>
          <p className="mb-4">
            You hereby grant ExploreDen a non-exclusive license to use,
            reproduce, edit and authorize others to use, reproduce and edit any
            of your Comments in any and all forms, formats or media.
          </p>
        </section>
        <section className="px-6 py-4">
          <h2 className="text-2xl font-bold mb-4">
            Hyperlinking to our Content
          </h2>
          <p className="mb-4">
            The following organizations may link to our Website without prior
            written approval:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Government agencies;</li>
            <li>Search engines;</li>
            <li>News organizations;</li>
            <li>
              Online directory distributors may link to our Website in the same
              manner as they hyperlink to the Websites of other listed
              businesses; and
            </li>
            <li>
              System wide Accredited Businesses except soliciting non-profit
              organizations, charity shopping malls, and charity fundraising
              groups which may not hyperlink to our Web site.
            </li>
          </ul>
          <p className="mb-4">
            These organizations may link to our home page, to publications or to
            other Website information so long as the link: (a) is not in any way
            deceptive; (b) does not falsely imply sponsorship, endorsement or
            approval of the linking party and its products and/or services; and
            (c) fits within the context of the linking party's site.
          </p>
        </section>
        <section className="px-6 py-4 bg-gray-50">
          <h2 className="text-2xl font-bold mb-4">iFrames</h2>
          <p className="mb-4">
            Without prior approval and written permission, you may not create
            frames around our Webpages that alter in any way the visual
            presentation or appearance of our Website.
          </p>
        </section>
        <section className="px-6 py-4">
          <h2 className="text-2xl font-bold mb-4">Content Liability</h2>
          <p className="mb-4">
            We shall not be hold responsible for any content that appears on
            your Website. You agree to protect and defend us against all claims
            that is rising on your Website. No link(s) should appear on any
            Website that may be interpreted as libelous, obscene or criminal, or
            which infringes, otherwise violates, or advocates the infringement
            or other violation of, any third party rights.
          </p>
        </section>
        <section className="px-6 py-4 bg-gray-50">
          <h2 className="text-2xl font-bold mb-4">Reservation of Rights</h2>
          <p className="mb-4">
            We reserve the right to request that you remove all links or any
            particular link to our Website. You approve to immediately remove
            all links to our Website upon request. We also reserve the right to
            amen these terms and conditions and it's linking policy at any time.
            By continuously linking to our Website, you agree to be bound to and
            follow these linking terms and conditions.
          </p>
        </section>
        <section className="px-6 py-4">
          <h2 className="text-2xl font-bold mb-4">
            Removal of links from our website
          </h2>
          <p className="mb-4">
            If you find any link on our Website that is offensive for any
            reason, you are free to contact and inform us any moment. We will
            consider requests to remove links but we are not obligated to or so
            or to respond to you directly.
          </p>
          <p className="mb-4">
            We do not ensure that the information on this website is correct, we
            do not warrant its completeness or accuracy; nor do we promise to
            ensure that the website remains available or that the material on
            the website is kept up to date.
          </p>
        </section>
        <section className="px-6 py-4 bg-gray-50">
          <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
          <p className="mb-4">
            To the maximum extent permitted by applicable law, we exclude all
            representations, warranties and conditions relating to our website
            and the use of this website. Nothing in this disclaimer will:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              limit or exclude our or your liability for death or personal
              injury;
            </li>
            <li>
              limit or exclude our or your liability for fraud or fraudulent
              misrepresentation;
            </li>
            <li>
              limit any of our or your liabilities in any way that is not
              permitted under applicable law; or
            </li>
            <li>
              exclude any of our or your liabilities that may not be excluded
              under applicable law.
            </li>
          </ul>
          <p className="mb-4">
            The limitations and prohibitions of liability set in this Section
            and elsewhere in this disclaimer: (a) are subject to the preceding
            paragraph; and (b) govern all liabilities arising under the
            disclaimer, including liabilities arising in contract, in tort and
            for breach of statutory duty.
          </p>
          <p className="mb-4">
            As long as the website and the information and services on the
            website are provided free of charge, we will not be liable for any
            loss or damage of any nature.
          </p>
        </section>
      </div>
    </>
  );
};

export default page;
