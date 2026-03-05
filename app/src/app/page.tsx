"use client";

import { useRouter } from "next/navigation";
import MainLayout from "./ui/layout/MainLayout";
import { useGlobalStore } from "./store/global-store";
import Button from "./ui/button";

export default function Home() {
  const router = useRouter();
  const { setIsLoading } = useGlobalStore();

  const navigateToPage = (url?: string) => {
    if (!url) return;
    setIsLoading(true);
    router.push(url);
    setIsLoading(false);
  };

  return (
    <MainLayout hideButton={true}>
      <div className="gap-5 grid md:grid-cols-4 grid-col mt-40 p-4 md:p-0">
        <div></div>
        <div className="flex flex-col gap-2 shadow-lg p-4 border border-slate-100 hover:border-amber-500 rounded-md">
          <h3 className="font-medium app-text-primary text-lg">
            Tạo hành trình
          </h3>
          <p className="h-16 text-xs md:text-sm">
            Dễ dàng lên kế hoạch cá nhân/nhóm cho những chuyến du lịch
          </p>
          <Button onClick={() => navigateToPage("/lich-trinh")}>Bắt đầu</Button>
        </div>
        <div className="flex flex-col gap-2 shadow-lg p-4 border border-slate-100 hover:border-amber-500 rounded-md">
          <h3 className="font-medium app-text-primary text-lg">Chia sẻ</h3>
          <p className="h-16 text-xs md:text-sm">
            Tạo và chia sẻ hành trình những nơi đã đi qua dưới dạng hình ảnh
          </p>
          <Button onClick={() => navigateToPage("/chia-se-hinh-anh")}>
            Bắt đầu
          </Button>
        </div>
        <div></div>
      </div>
    </MainLayout>
  );
}
