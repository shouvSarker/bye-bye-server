import ExternalLink from "./ExternalLink";

export default function Features({ list }) {
  const Icon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="black"
      width="14px"
      height="14px"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" />
    </svg>
  );

  const { hosting, license, link, marketplace, subscription } = list;
  return (
    <>
      <style jsx>
        {`
          .item {
            cursor: pointer;
          }
        `}
      </style>
      <ul className={"features"}>
        <li className={"item"}>Hosting: {hosting}</li>
        <li className={"item"}>
          Link: <ExternalLink url={link}>Website</ExternalLink>
        </li>
        <li className={"item"}>License: {license}</li>
        <li className={"item Flex Center"}>
          <div>Marketplace: {marketplace}</div>{" "}
          <div className="Icon">
            <b
              className="hint--bottom"
              aria-label="Marketplace for third party extensions or apps"
            >
              <Icon />
            </b>
          </div>
        </li>
        <li className={"item Flex Center"}>
          <div>Subscription: {subscription}</div>{" "}
          <div className="Icon">
            <b
              className="hint--bottom"
              aria-label="Commercial subscription available"
            >
              <Icon />
            </b>
          </div>
        </li>
      </ul>
    </>
  );
}
