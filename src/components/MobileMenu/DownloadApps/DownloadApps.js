/* eslint-disable @next/next/no-img-element */
import css from "./DownloadApps.module.scss";
import cx from "classnames";

export default function DownloadApps({ header, size }) {
  return (
    <div className={css.container}>
      <div
        className={cx(
          css.header,
          size === "mobileMenu" && css.margBttm8,
          size === "sideMenu" && css.margBttm12
        )}
      >
        {header}
      </div>
      <div className={css.imgWrap}>
        <a href="https://play.google.com/store/apps/details/?id=ua.com.rozetka.shop&referrer=utm_source%3Dfullversion%26utm_medium%3Dsite%26utm_campaign%3Dfullversion">
          <img alt="android playmarket link" src="/button-google-play-ua.svg" />
        </a>
        <a href="https://apps.apple.com/app/apple-store/id740469631">
          <img alt="apple store link" src="/button-appstore-ua.svg" />
        </a>
      </div>
    </div>
  );
}
