import {
  FacebookIcon,
  FacebookShareButton,
  ThreadsIcon,
  ThreadsShareButton,
} from "react-share";
type SocialShareProps = {
  url: string;
};
export default function SocialShare({
  url = "https://example.com",
}: SocialShareProps) {
  return (
    <div className="w-90">
      <div className="flex justify-center item-center">
        <img src={url} alt="Share Image" width={300} height={200} />
      </div>

      <div className="flex items-center gap-2 mb-3">
        <p className="mb-1 text-gray-600 text-sm">Chia sẻ</p>

        <FacebookShareButton url={url} hashtag="#vietnammapchecked">
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <ThreadsShareButton url={url}>
          <ThreadsIcon size={32} round />
        </ThreadsShareButton>
        {/* <PinterestShareButton media="" url={url}>
          <PinterestIcon size={32} round />
        </PinterestShareButton>
         */}
      </div>

      <div className="">
        <p className="mb-1 text-gray-600 text-sm">
          Hoặc chép đường dẫn này gửi bất cứ ai cũng có thể xem hành trình của
          bạn
        </p>
        <input
          type="text"
          value={url}
          readOnly
          className="p-2 border rounded-md w-full text-xs disabled"
          disabled={true}
        />
      </div>
    </div>
  );
}
