"use client";
import { Meta } from "../layout/Meta";
import { AppConfig } from "../utils/AppConfig";
import { Banner } from "./Banner";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { VerticalFeatures } from "./VerticalFeatures";

const Base = (props: {
  homePage: {
    title: string;
    description: string;
    callToAction: string;
    featuresTitle: string;
    featuresDescription: string;
    blogFeatureTitle: string;
    blogFeatureDescription: string;
    blogFeatureImage: string;
    pricingPlansFeatureTitle: string;
    pricingPlansFeatureDescription: string;
    pricingPlansFeatureImage: string;
    bookingsFeatureTitle: string;
    bookingsFeatureDescription: string;
    bookingsFeatureImage: string;
    usersFeatureTitle: string;
    usersFeatureDescription: string;
    usersFeatureImage: string;
    bottomCtaDescription: string;
  };
}) => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero
      title={props.homePage.title}
      description={props.homePage.description}
      callToAction={props.homePage.callToAction}
    />
    <VerticalFeatures
      featuresTitle={props.homePage.featuresTitle}
      featuresDescription={props.homePage.featuresDescription}
      blogFeatureTitle={props.homePage.blogFeatureTitle}
      blogFeatureDescription={props.homePage.blogFeatureDescription}
      blogFeatureImage={props.homePage.blogFeatureImage}
      pricingPlansFeatureTitle={props.homePage.pricingPlansFeatureTitle}
      pricingPlansFeatureDescription={
        props.homePage.pricingPlansFeatureDescription
      }
      pricingPlansFeatureImage={props.homePage.pricingPlansFeatureImage}
      bookingsFeatureTitle={props.homePage.bookingsFeatureTitle}
      bookingsFeatureDescription={props.homePage.bookingsFeatureDescription}
      bookingsFeatureImage={props.homePage.bookingsFeatureImage}
      usersFeatureTitle={props.homePage.usersFeatureTitle}
      usersFeatureDescription={props.homePage.usersFeatureDescription}
      usersFeatureImage={props.homePage.usersFeatureImage}
    />
    <Banner cta={props.homePage.bottomCtaDescription} />
    <Footer />
  </div>
);

export { Base };
