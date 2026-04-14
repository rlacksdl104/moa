import { Tv, UtensilsCrossed, Gift } from "lucide-react"

const categories = [
  {
    id: 1,
    title: "생활용품",
    description: "세제, 화장지, 청소용품 등",
    icon: Tv,
  },
  {
    id: 2,
    title: "식품/간편식",
    description: "건강식, 간편식, 음료 등",
    icon: UtensilsCrossed,
  },
  {
    id: 3,
    title: "시즌 한정",
    description: "명절, 기념일 특별 상품",
    icon: Gift,
  },
]

export function CategoriesSection() {
  return (
    <section id="categories" className="py-16 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
            카테고리별 공구
          </h2>
          <p className="text-muted-foreground text-sm">
            다양한 카테고리에서 원하는 상품을 찾아보세요
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface Category {
  id: number
  title: string
  description: string
  icon: React.ElementType
}

function CategoryCard({ category }: { category: Category }) {
  const Icon = category.icon

  return (
    <button className="bg-white border border-border rounded-2xl p-8 text-center hover:shadow-lg hover:border-primary/30 transition-all group">
      <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="font-semibold text-foreground mb-1">{category.title}</h3>
      <p className="text-sm text-muted-foreground">{category.description}</p>
    </button>
  )
}
