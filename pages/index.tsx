import Layout from "@/components/layout/layout";
import Link from "next/link";
import { BookOpen, Users, BarChart, Trophy } from "lucide-react";
import HeroSlider from "@/components/top/heroSlide";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col min-h-screen pt-2">
        {/* Hero / Top */}
        <section className="flex flex-col items-center text-center bg-gradient-to-b from-indigo-600 to-purple-700 text-white pt-24 pb-10 px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            スタディモンスター
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            勉強をモンスター育成に変える学習アプリ
          </p>
          <div className="flex gap-4 mb-8">
            <Link
              href="#"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-full shadow-lg"
            >
              App Store
            </Link>
            <Link
              href="#"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-full shadow-lg"
            >
              Google Play
            </Link>
          </div>
          <HeroSlider />

        </section>


        {/* About */}
        <section id="about" className="py-20 px-6 bg-white text-gray-800">
          <h2 className="text-3xl font-bold text-center mb-12">このアプリについて</h2>
          <div className="grid gap-8 max-w-4xl mx-auto md:grid-cols-2">
            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">勉強を記録</h3>
              <p>簡単操作で毎日の学習時間を登録。タイマーや手動入力に対応。</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">モンスターを育成</h3>
              <p>勉強時間に応じてモンスターが成長。続けるほどに強くなる！</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">友達と共有</h3>
              <p>フレンド機能で努力を見せ合い、励まし合える仕組み。</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">学習を振り返り</h3>
              <p>日ごと・月ごとの勉強時間をグラフ表示。学習傾向が一目でわかる。</p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-20 px-6 bg-gray-100">
          <h2 className="text-3xl font-bold text-center mb-12">主な機能</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg text-center">
              <Trophy className="mx-auto w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">成長するモンスター</h3>
              <p>勉強時間に応じてモンスターが進化。成果が目に見える！</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg text-center">
              <BookOpen className="mx-auto w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">目標設定</h3>
              <p>毎日の学習目標を立てて、達成感を積み重ねよう。</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg text-center">
              <BarChart className="mx-auto w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">レポート機能</h3>
              <p>勉強時間をグラフ化して、自分の学習傾向を把握。</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg text-center">
              <Users className="mx-auto w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">フレンド共有</h3>
              <p>友達と勉強時間をシェアして励まし合える。</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-indigo-700 text-white text-center" id="cta">
          <div className="flex flex-col items-center mb-8">
            <Image
              src="/icon.png"
              alt="スタディモンスター アイコン"
              width={100}
              height={100}
              className="mb-4 drop-shadow-lg rounded-lg"
            />
            <h2 className="text-4xl md:text-5xl font-extrabold">
              スタディモンスター
            </h2>
            <p className="mt-3 text-lg md:text-xl">
              勉強をモンスター育成に変える学習アプリ
            </p>
          </div>

          <p className="mb-8 mt-6 text-base md:text-lg">
            無料でダウンロードして、今日から勉強を楽しもう。
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="#"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-full shadow-lg"
            >
              App Store
            </Link>
            <Link
              href="#"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-full shadow-lg"
            >
              Google Play
            </Link>
          </div>
        </section>


      </div>

    </Layout>
  );
}
