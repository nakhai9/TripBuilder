import {
  FacebookIcon,
  FacebookShareButton,
  ThreadsIcon,
  ThreadsShareButton,
} from "react-share";
import Input from "../ui/input";
type SocialShareProps = {
  url: string;
};
export default function SocialShare({
  url = "https://example.com",
}: SocialShareProps) {
  return (
    <div className="w-full">
      <div className="flex justify-center item-center">
        <img src={url} alt="Share Image" className="w-full" height={200} />
      </div>

      <div className="flex items-center gap-2 mb-3">
        <p className="mb-1 text-gray-700 text-sm">Chia sẻ</p>

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

      <div className="w-full">
        <p className="mb-1 text-gray-700 text-xs md:text-sm">
          Hoặc chép đường dẫn này gửi bất cứ ai cũng có thể xem hành trình của
          bạn
        </p>
        <Input
          type="text"
          value={url}
          readOnly
          disabled
          className="p-2 border rounded-md w-full text-xs disabled"
        />
      </div>
    </div>
  );
}
