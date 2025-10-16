import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

export default function InvitePage() {
  const router = useRouter()

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;
    const params = new URLSearchParams(window.location.search);
    const inviterId = params.get("from");
    const token = params.get("t");

    // ✅ 無限ループ防止などのため try-catch を追加しておくと安全
    try {
      if (inviterId === "u") {
        if (/android/i.test(userAgent)) {
          window.location.href =
            "https://play.google.com/store/apps/details?id=com.itako.sutamon";
        } else if (/iPad|iPhone|iPod/.test(userAgent) && !("MSStream" in window)) {
          window.location.href =
            "https://apps.apple.com/jp/app/myapp/id1234567890";
        } else {
          router.push("/")
        }
        return;
      }

      if (!inviterId) {
        router.push("/")
      } else {
        if (/android/i.test(userAgent)) {
          window.location.href = `intent://main/home#Intent;scheme=com.itako.sutamon;package=com.itako.sutamon;S.browser_fallback_url=https://sutamon-654e7.web.app/invite/${inviterId}?t=${token};end`;
        } else if (/iPad|iPhone|iPod/.test(userAgent) && !("MSStream" in window)) {
          window.location.href =
            "https://apps.apple.com/jp/app/myapp/id1234567890";
        } else {
          router.push(`/invite/${inviterId}?t=${token}`)
        }
      }
    } catch (error) {
      console.error("Invite redirect failed:", error);
      router.push("/")
    }
  }, [router]);

  return (
    <>
      <Head>
        <title>ようこそスタモンへ</title>
        <meta
          name="description"
          content="勉強記録×育成アプリ 勉強時間がモンスターの成長に変わる！"
        />
      </Head>
      <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
          <p className="text-gray-700 text-sm font-medium">読み込み中...</p>
        </div>
      </main>
    </>
  );
}
