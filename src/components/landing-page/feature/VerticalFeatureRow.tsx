import className from "classnames";
import Image from "next/image";
import { media } from "@wix/api-client";

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    "mt-20",
    "flex",
    "flex-wrap",
    "items-center",
    {
      "flex-row-reverse": props.reverse,
    }
  );

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full sm:w-1/2 text-center sm:px-6">
        <h3 className="text-3xl text-gray-900 font-semibold">{props.title}</h3>
        <div
          className="mt-6 text-xl leading-9"
          dangerouslySetInnerHTML={{ __html: props.description }}
        ></div>
      </div>

      <div className="w-full sm:w-1/2 p-6">
        <Image
          src={
            props.image.startsWith("wix:image")
              ? media.getImageUrl(props.image).url
              : props.image
          }
          alt={props.imageAlt}
          width={2000}
          height={1000}
        />
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
