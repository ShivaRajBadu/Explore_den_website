import AllBlogsSection from "@/components/bolgs/AllBlogsSection";
import FeatureSection from "@/components/bolgs/FeatureSection";
import BlogCard from "@/components/main_page/BlogCard";
import Wrapper from "@/components/Wrapper";
import React from "react";

const page = () => {
  return (
    <Wrapper>
      <FeatureSection />
      <AllBlogsSection />
    </Wrapper>
  );
};

export default page;
