import Layout from "@/components/layout/layout";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl bg-white/80 backdrop-blur-sm shadow-xl rounded-3xl p-8 md:p-12 border border-gray-100">
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              プライバシーポリシー
            </h1>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl mx-auto">
              ユーザーの個人情報管理には細心の注意を払い、
              以下に記載の通り適切に取り扱います。
            </p>
          </header>

          {/* Article */}
          <article className="space-y-12 text-gray-800 leading-relaxed">
            {/* Section: Data Collection */}
            <section
              id="collect"
              className="bg-gray-50/70 rounded-2xl p-6 md:p-8 shadow-inner border border-gray-100"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                収集するデータ
              </h2>
              <ol className="list-decimal ml-5 space-y-8">
                <li>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    購入情報
                  </h3>
                  <p className="text-gray-700">
                    アプリ内課金に関する購入履歴（Google Play を通じて処理されます）。
                    購入処理および支払い情報の取り扱いについては、
                    以下の Google のポリシーをご確認ください。
                  </p>
                  <ul className="list-disc ml-6 mt-3 space-y-1 text-blue-600">
                    <li>
                      <Link
                        href="https://policies.google.com/privacy?hl=ja"
                        className="hover:underline"
                      >
                        Google プライバシーポリシー
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://play.google.com/intl/ja_jp/about/play-terms/"
                        className="hover:underline"
                      >
                        Google Play 利用規約
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://support.google.com/googleplay/answer/2479637?hl=ja"
                        className="hover:underline"
                      >
                        Google Play 返金ポリシー
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    広告・解析について
                  </h3>
                  <p className="text-gray-700">
                    当方が配信するアプリでは、広告配信のために
                    <strong> Google AdMob </strong>、
                    利用状況解析のために
                    <strong> Google Firebase Analytics </strong>
                    を使用する場合があります。取得する情報や利用目的の詳細は以下をご確認ください。
                  </p>
                  <ul className="list-disc ml-6 mt-3 space-y-1 text-blue-600">
                    <li>
                      <Link
                        href="https://policies.google.com/privacy?hl=ja"
                        className="hover:underline"
                      >
                        AdMob（Google Inc.）
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://firebase.google.com/support/privacy?hl=ja"
                        className="hover:underline"
                      >
                        Firebase Analytics（Google Inc.）
                      </Link>
                    </li>
                  </ul>
                </li>
              </ol>
            </section>

            {/* Section: Contact */}
            <section
              id="contact"
              className="bg-gray-50/70 rounded-2xl p-6 md:p-8 shadow-inner border border-gray-100"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                お問い合わせ時の情報収集
              </h2>
              <p className="text-gray-700 mb-3">
                お問い合わせ時に収集する情報は以下の通りです。
                これらはお問い合わせへの対応および本アプリの品質向上を目的として利用します。
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>送信元のメールアドレス</li>
                <li>端末を識別する情報</li>
                <li>お問い合わせの内容</li>
              </ul>
            </section>

            {/* Section: Handling */}
            <section
              id="handling"
              className="bg-gray-50/70 rounded-2xl p-6 md:p-8 shadow-inner border border-gray-100"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                個人情報の取り扱いについて
              </h2>
              <p className="text-gray-700">
                当サービスでは、ユーザーからお預かりした個人情報を常に正確かつ最新の状態に保つよう努めています。
                また、不正アクセス・情報漏洩・紛失・改ざんなどを防止するため、
                適切なセキュリティ対策を講じて慎重に管理しています。
              </p>
            </section>

            {/* Section: Third Party */}
            <section
              id="third"
              className="bg-gray-50/70 rounded-2xl p-6 md:p-8 shadow-inner border border-gray-100"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                第三者への情報提供について
              </h2>
              <p className="text-gray-700 mb-3">
                ユーザーの個人情報を第三者に開示または提供することは原則としてありません。
                ただし、以下の場合に限り、情報を開示することがあります。
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>本人の同意が確認できた場合</li>
                <li>法律に基づく正式な要請があった場合</li>
              </ul>
            </section>
          </article>
        </div>
      </main>
    </Layout>
  );
}
