import Image from "next/image"
import Link from "next/link"
import { Users, Clock, ArrowRight } from "lucide-react"

const products = [
  {
    id: 1,
    title: "프리미엄 무선 이어폰 - 노이즈캔슬링 & 30시간 재생",
    currentPrice: 52000,
    originalPrice: 89000,
    participants: 45,
    maxParticipants: 50,
    timeLeft: "1일 23시간",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
    bgColor: "bg-yellow-50",
  },
  {
    id: 2,
    title: "프리미엄 무선 이어폰 - 노이즈캔슬링 & 30시간 재생",
    currentPrice: 52000,
    originalPrice: 89000,
    participants: 45,
    maxParticipants: 50,
    timeLeft: "1일 23시간",
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&h=400&fit=crop",
    bgColor: "bg-purple-50",
  },
  {
    id: 3,
    title: "프리미엄 무선 이어폰 - 노이즈캔슬링 & 30시간 재생",
    currentPrice: 52000,
    originalPrice: 89000,
    participants: 45,
    maxParticipants: 50,
    timeLeft: "1일 23시간",
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop",
    bgColor: "bg-blue-50",
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-foreground">진행중인 공구</h2>
          <Link
            href="/products"
            className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border border-border rounded-full px-4 py-1.5"
          >
            전체보기
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface Product {
  id: number
  title: string
  currentPrice: number
  originalPrice: number
  participants: number
  maxParticipants: number
  timeLeft: string
  image: string
  bgColor: string
}

function ProductCard({ product }: { product: Product }) {
  const discountPercent = Math.round(
    ((product.originalPrice - product.currentPrice) / product.originalPrice) * 100
  )

  return (
    <div className="bg-white border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
      <div className={`aspect-square ${product.bgColor} relative`}>
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="font-medium text-foreground mb-3 line-clamp-2 text-sm">
          {product.title}
        </h3>
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-lg font-bold text-primary">
            {product.currentPrice.toLocaleString()}원
          </span>
          <span className="text-sm text-muted-foreground line-through">
            {product.originalPrice.toLocaleString()}원
          </span>
        </div>
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>
              {product.participants}/{product.maxParticipants}명
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{product.timeLeft}</span>
          </div>
        </div>
        <button className="w-full py-2.5 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors text-sm">
          참여하기
        </button>
      </div>
    </div>
  )
}
