import appBanner from "../assets/App_download_banner.png"

export default function AppBanner() {
  return (
    <div className="mt-10">
      <img src={appBanner} alt="Download Swiggy App" className="w-full" />
    </div>
  );
}
