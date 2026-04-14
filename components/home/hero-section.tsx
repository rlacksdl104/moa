import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#7dd3fc] via-[#38bdf8] to-[#3b82f6] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">
          함께 모여서
        </h1>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
          더 저렴하게
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
          20~30대 청년을 위한 공동구매 플랫폼. 생활용품부터 전자기기, 취미·문화
          상품까지 함께 구매하고 최대 50% 할인받으세요.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#products"
            className="px-8 py-3 bg-white text-foreground font-semibold rounded-full border border-border hover:bg-muted/50 transition-colors"
          >
            공구 둘러보기
          </Link>
          <Link
            href="#benefits"
            className="px-8 py-3 bg-white text-foreground font-semibold rounded-full border border-border hover:bg-muted/50 transition-colors"
          >
            판매자 신청하기
          </Link>
        </div>
      </div>
    </section>
  )
}
