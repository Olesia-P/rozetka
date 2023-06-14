import css from "./DownloadApps.module.scss";

export default function DownloadApps() {
  return (
    <div className={css.container}>
      <div className={css.header}>Завантажуйте наші додатки</div>
      <div className={css.imgWrap}>
        <a href="https://play.google.com/store/apps/details/?id=ua.com.rozetka.shop&referrer=utm_source%3Dfullversion%26utm_medium%3Dsite%26utm_campaign%3Dfullversion">
          <img src="https://xl-static.rozetka.com.ua/assets/img/design/button-google-play-ua.svg" />
        </a>
        <a href="https://apps.apple.com/app/apple-store/id740469631">
          <img src="https://xl-static.rozetka.com.ua/assets/img/design/button-appstore-ua.svg" />
        </a>
      </div>
    </div>
  );
}
