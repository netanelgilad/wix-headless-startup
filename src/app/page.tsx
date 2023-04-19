import { Base } from "@/components/landing-page/templates/Base";
import "./global.css";

export default async function Home() {
  return (
    <Base
      homePage={{
        title: "Home Page",
        description: "This is the home page",
        callToAction: "Click here to get started",
        featuresTitle: "Features",
        featuresDescription: "This is the features description",
        blogFeatureTitle: "Blog",
        blogFeatureDescription: "This is the blog feature description",
        blogFeatureImage: "https://via.placeholder.com/150",
        pricingPlansFeatureTitle: "Pricing Plans",
        pricingPlansFeatureDescription:
          "This is the pricing plans feature description",
        pricingPlansFeatureImage: "https://via.placeholder.com/150",
        bookingsFeatureTitle: "Bookings",
        bookingsFeatureDescription: "This is the bookings feature description",
        bookingsFeatureImage: "https://via.placeholder.com/150",
        usersFeatureTitle: "Users",
        usersFeatureDescription: "This is the users feature description",
        usersFeatureImage: "https://via.placeholder.com/150",
        bottomCtaDescription: "This is the bottom CTA description",
      }}
    />
  );
}
