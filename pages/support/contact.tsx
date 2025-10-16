import Layout from "@/components/layout/layout"
import { Mail } from "lucide-react" // アイコン用 (lucide-react)
import Link from "next/link"

export default function ContactPage() {
  return (
    <Layout>
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
            <h1 className="text-3xl font-bold mb-6">お問い合わせ</h1>
            <p className="text-lg text-gray-600 mb-8">
                ご不明な点やご質問がありましたら、以下のメールアドレスまでご連絡ください。
            </p>

            <Link
                href="mailto:support@studymonster.app"
                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
            >
                <Mail className="w-5 h-5" />
                study.monster616@gmail.com
            </Link>

            <p className="text-sm text-gray-500 mt-6">
                ※ 返信にはお時間をいただく場合があります。あらかじめご了承ください。
            </p>
        </div>
    </Layout>
  )
}
