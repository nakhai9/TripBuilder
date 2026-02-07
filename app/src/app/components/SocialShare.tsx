import {
  FacebookIcon,
  FacebookShareButton,
  PinterestIcon,
  PinterestShareButton,
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
    <div className="flex flex-col items-center gap-4 bg-white shadow-md p-4 rounded-md">
      <p className="mr-2 text-gray-700">
        Chia sẻ hành trình này đến với bạn bè
      </p>
      <div className="flex gap-3">
        <FacebookShareButton url={url} hashtag="#vietnammapchecked">
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <PinterestShareButton media="" url={url}>
          <PinterestIcon size={32} round />
        </PinterestShareButton>
        <ThreadsShareButton url={url}>
          <ThreadsIcon size={32} round />
        </ThreadsShareButton>
      </div>
      <div>
        <input
          type="text"
          value={url}
          readOnly
          className="p-2 border rounded-md w-full disabled"
          disabled={true}
        />
      </div>
    </div>
  );
}
