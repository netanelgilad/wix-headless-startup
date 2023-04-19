import { Base } from "@/components/landing-page/templates/Base";
import "./global.css";
import { OAuthStrategy, createClient } from "@wix/api-client";
import { dataItems } from "@wix/data-items";
import { DataItem } from "@wix/data-items/build/cjs/src/data-v2-data-item.universal";

const wixClient = createClient({
  auth: OAuthStrategy({ clientId: process.env.WIX_HEADLESS_CLIENT_ID! }),
  modules: {
    dataItems,
  },
});

export default async function Home() {
  const tokens = await wixClient.auth.generateVisitorTokens();
  wixClient.auth.setTokens(tokens);

  const { dataItems } = await wixClient.dataItems.queryDataItems({
    dataCollectionId: "HomePage",
    query: {},
  });
  const homePage = (dataItems as DataItem[])[0].data as any;

  return <Base homePage={homePage} />;
}
