import { toast as RhtToast, Toaster as RhtToaster } from "react-hot-toast";

const Toaster = () => {
  return (
    <RhtToaster
      toastOptions={{
        position: "bottom-center",
        style: {
          margin: 0,
          alignItems: "center",
          borderRadius: "1rem",
          fontWeight: 600,
          padding: "1rem",
          maxWidth: "30rem",
          backgroundColor: "var(--color-background)/90",
          color: "var(--color-main)",
          backdropFilter: "blur(10px)",
        },
        success: {
          iconTheme: {
            primary: "var(--color-success)",
            secondary: "var(--color-white)",
          },
        },
        error: {
          iconTheme: {
            primary: "var(--color-error)",
            secondary: "var(--color-white)",
          },
        },
      }}
    />
  );
};

const toast = RhtToast;

export { toast, Toaster };
