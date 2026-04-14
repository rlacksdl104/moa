import { Search, Users, CreditCard, Truck } from "lucide-react"

const steps = [
  {
    id: 1,
    title: "원하는 상품 찾기",
    description: "다양한 카테고리에서 원하는 가격의 공동구매 상품을 찾아보세요.",
    icon: Search,
  },
  {
    id: 2,
    title: "공구 참여하기",
    description: "마음에 드는 상품의 공구에 참여하고 목표 인원 달성을 기다려요.",
    icon: Users,
  },
  {
    id: 3,
    title: "자동 결제",
    description: "목표 인원이 달성되면 등록된 결제 수단으로 자동 결제가 진행됩니다.",
    icon: CreditCard,
  },
  {
    id: 4,
    title: "배송 받기",
    description: "결제 완료 후 상품이 배송됩니다. 실시간으로 배송 현황을 확인하세요.",
    icon: Truck,
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-foreground">
            이용방법
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface Step {
  id: number
  title: string
  description: string
  icon: React.ElementType
}

function StepCard({ step }: { step: Step }) {
  const Icon = step.icon

  return (
    <div className="text-center">
      <div className="relative inline-block mb-4">
        <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
          {String(step.id).padStart(2, "0")}
        </div>
      </div>
      <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {step.description}
      </p>
    </div>
  )
}
