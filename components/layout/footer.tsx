import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 gap-8">
        {/* 情報セクション */}
        <section>
          <ul className="space-y-2 flex">
            <li>| 
              <Link
                href="/info/privacy"
                className="hover:text-white transition mx-2 text-xs"
              >
                プライバシーポリシー
              </Link>
            </li>
            <li>|
              <Link
                href="/info/accountDelete"
                className="hover:text-white transition mx-2 text-xs"
              >
                アカウント削除について
              </Link>
            </li>
            <li>|
              <Link href="/support/contact" className="hover:text-white transition mx-2 text-xs">
                お問い合わせ
              </Link>
            </li>
          </ul>
        </section>

        {/* ブランド名 / コピーライト */}
        <section className="flex flex-col justify-between">
          <h1 className="text-lg font-bold text-white">スタディーモンスター</h1>
        </section>
      </div>
    </footer>
  )
}

export default Footer
