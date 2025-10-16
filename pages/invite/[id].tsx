import { useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

export default function InviteDetailPage() {
    const params = useParams<{ id: string }>();
    const searchParams = useSearchParams();
    const router = useRouter()

    useEffect(() => {
        const token = searchParams.get("t");
        const userAgent = navigator.userAgent || navigator.vendor;
            try {
            if (token && token.trim() !== "") {
            fetch("https://rewarduserv2-zvibeqsc7a-uc.a.run.app", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token }),
            });
            }

            if (/android/i.test(userAgent)) {
            window.location.href =
                "https://play.google.com/store/apps/details?id=com.itako.sutamon";
            } else if (/iPad|iPhone|iPod/.test(userAgent) && !("MSStream" in window)) {
            window.location.href =
                "https://apps.apple.com/jp/app/myapp/id1234567890";
            } else {
            router.push("/")
            }
        } catch (error) {
            console.error("Invite redirect failed:", error);
            router.push("/")
        }
    }, [params, searchParams,router]);

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
        <p className="text-gray-700 text-sm font-medium">読み込み中...</p>
      </div>
    </main>
  );
}
