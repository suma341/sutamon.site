import Footer from "./footer";
import Header from "./header";
import MenuBtn from "./MenuBtn";
import { useState } from "react";
import Sidebar from "./sidebar";
import Head from "next/head";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const [showSidebar,setShowSidebar] = useState(false);

  return (
    <>
      <Head>
        <meta name="google-site-verification" content="n3rspfUurTSfUKj-M8Rt8e0xOWSbpRes-aJTJr7dao8" />
        <title>スタモン</title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <div className="block md:hidden fixed right-1 top-1" style={{zIndex: 1100 }}>
            <MenuBtn setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
        </div>
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        {/* Header */}
        <Header showSidebar={showSidebar} />

        {/* Main */}
        <main className="flex-1">
          {children}
          </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
