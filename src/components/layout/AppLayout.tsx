import { ReactNode } from "react";
import Feedback from "../tools/feedback/feedback";
import Form from "../tools/form/form";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Providers from "./Providers"; // Import the new client-side providers
import ScrollLinked from "./components/ScrollLinked";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <Providers>
      <ScrollLinked />
      <Navbar />

      {children}
      <Feedback />
      <Form />
      <Footer />
    </Providers>
  );
}
