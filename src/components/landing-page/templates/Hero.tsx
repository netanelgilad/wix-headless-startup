import Link from "next/link";

import { Background } from "../background/Background";
import { Button } from "../button/Button";
import { HeroOneButton } from "../hero/HeroOneButton";
import { Section } from "../layout/Section";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";
import { Logo } from "./Logo";

const Hero = (props: {
  title: string;
  description: string;
  callToAction: string;
}) => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link
            legacyBehavior
            href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template"
          >
            <a>GitHub</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/">
            <a>Sign in</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={props.title}
        description={props.description}
        button={
          <Link
            legacyBehavior
            href="https://creativedesignsguru.com/category/nextjs/"
          >
            <a>
              <Button xl>{props.callToAction}</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
