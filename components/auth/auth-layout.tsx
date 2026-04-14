"use client"

import type { ReactNode } from "react"

interface AuthLayoutProps {
  children: ReactNode
  variant: "login" | "signup"
}

export function AuthLayout({ children, variant }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-b from-[#3b82f6] to-[#2563eb] text-white p-12 flex-col justify-center relative overflow-hidden">
        <div className="max-w-md mx-auto">
          {/* Logo */}
          <h1 className="text-4xl font-bold mb-6">모아</h1>
          
          {variant === "login" ? (
            <>
              <h2 className="text-3xl font-bold leading-tight mb-2">
                함께 모여서
              </h2>
              <h2 className="text-3xl font-bold leading-tight mb-6">
                더 저렴하게
              </h2>
              <p className="text-white/80 mb-12">청년을 위한 공동구매 플랫폼</p>
              
              {/* Steps */}
              <div className="space-y-6">
                <StepItem number={1} text="원하는 상품의 공동구매에 참여하세요" />
                <StepItem number={2} text="목표 인원이 달성되면 할인가로 구매!" />
                <StepItem number={3} text="평균 25% 할인된 가격으로 득템하세요" />
              </div>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold leading-tight mb-2">
                지금 가입하고
              </h2>
              <h2 className="text-3xl font-bold leading-tight mb-6">
                혜택을 누리세요
              </h2>
              <p className="text-white/80 mb-12">청년을 위한 공동구매 플랫폼</p>
              
              {/* Benefits */}
              <div className="space-y-4">
                <BenefitCard 
                  title="신규 가입 혜택" 
                  description="첫 구매 시 5,000원 할인 쿠폰 즉시 지급" 
                />
                <BenefitCard 
                  title="매월 적립금" 
                  description="공동구매 참여 시 구매금액의 1% 적립" 
                />
                <BenefitCard 
                  title="알림 서비스" 
                  description="관심 카테고리 신규 공구 알림 제공" 
                />
              </div>
            </>
          )}
        </div>
        
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-600/30 pointer-events-none" />
      </div>
      
      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
    </div>
  )
}

function StepItem({ number, text }: { number: number; text: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-sm font-semibold">
        {number}
      </div>
      <p className="text-white/90">{text}</p>
    </div>
  )
}

function BenefitCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <div>
          <h3 className="font-semibold mb-1">{title}</h3>
          <p className="text-sm text-white/70">{description}</p>
        </div>
      </div>
    </div>
  )
}
