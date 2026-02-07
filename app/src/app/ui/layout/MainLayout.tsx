"use client";

import Modal from "@/app/components/Modal";
import { useGlobalStore } from "@/app/store/global-store";
import { Backdrop, CircularProgress } from "@mui/material";

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  const { isLoading, description } = useGlobalStore();
  const open = false;
  return (
    <>
      {children}
      {open && <Modal />}
      <Backdrop
        sx={{
          zIndex: 9999,
        }}
        open={isLoading}
      >
        <div className="flex flex-col items-center gap-4">
          <CircularProgress color="warning" />
          {description && (
            <p className="px-4 text-white text-center">{description}</p>
          )}
        </div>
      </Backdrop>
    </>
  );
}
