"use client";
import { Footer, Header } from "./components";
import { RegisterContextProvider } from "./contexts/register-context";

export default function HomeTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <RegisterContextProvider>
        <Header />
        <div>{children}</div>
        <Footer />
      </RegisterContextProvider>
    </div>
  );
}
