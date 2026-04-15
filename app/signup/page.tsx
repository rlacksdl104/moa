"use client"

import { useState } from "react"
import Link from "next/link"
import { AuthLayout } from "@/components/auth/auth-layout"
import { User, Mail, Phone, Lock, Eye, EyeOff } from "lucide-react"

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  })
  const [agreements, setAgreements] = useState({
    all: false,
    terms: false,
    privacy: false,
    marketing: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleAllAgreement = (checked: boolean) => {
    setAgreements({
      all: checked,
      terms: checked,
      privacy: checked,
      marketing: checked,
    })
  }

  const handleAgreementChange = (key: "terms" | "privacy" | "marketing", checked: boolean) => {
    const newAgreements = { ...agreements, [key]: checked }
    newAgreements.all = newAgreements.terms && newAgreements.privacy && newAgreements.marketing
    setAgreements(newAgreements)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ formData, agreements })
  }

  return (
    <AuthLayout variant="signup">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">회원가입</h2>
        <p className="text-muted-foreground mb-8">
          모아와 함께 스마트한 소비를 시작하세요
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              이름
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="홍길동"
                className="w-full pl-12 pr-4 py-3.5 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              이메일
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className="w-full pl-12 pr-4 py-3.5 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              비밀번호
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="8자 이상, 영문/숫자/특수문자 조합"
                className="w-full pl-12 pr-12 py-3.5 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              비밀번호 확인
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="비밀번호를 다시 입력하세요"
                className="w-full pl-12 pr-12 py-3.5 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Agreements */}
          <div className="space-y-3 pt-2">
            {/* All Agreement */}
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={agreements.all}
                onChange={(e) => handleAllAgreement(e.target.checked)}
                className="w-4 h-4 rounded border-border text-primary focus:ring-primary/20"
              />
              <span className="text-sm font-medium text-foreground">전체 동의</span>
            </label>

            <div className="border-t border-border pt-3 space-y-2.5">
              {/* Terms */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreements.terms}
                    onChange={(e) => handleAgreementChange("terms", e.target.checked)}
                    className="w-4 h-4 rounded border-border text-primary focus:ring-primary/20"
                  />
                  <span className="text-sm text-muted-foreground">
                    <span className="text-primary font-medium">[필수]</span> 이용약관 동의
                  </span>
                </label>
                <button type="button" className="text-sm text-primary hover:underline">
                  보기
                </button>
              </div>

              {/* Privacy */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreements.privacy}
                    onChange={(e) => handleAgreementChange("privacy", e.target.checked)}
                    className="w-4 h-4 rounded border-border text-primary focus:ring-primary/20"
                  />
                  <span className="text-sm text-muted-foreground">
                    <span className="text-primary font-medium">[필수]</span> 개인정보 수집 및 이용 동의
                  </span>
                </label>
                <button type="button" className="text-sm text-primary hover:underline">
                  보기
                </button>
              </div>

              {/* Marketing */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreements.marketing}
                    onChange={(e) => handleAgreementChange("marketing", e.target.checked)}
                    className="w-4 h-4 rounded border-border text-primary focus:ring-primary/20"
                  />
                  <span className="text-sm text-muted-foreground">
                    [선택] 마케팅 정보 수신 동의
                  </span>
                </label>
                <button type="button" className="text-sm text-primary hover:underline">
                  보기
                </button>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors mt-6"
          >
            회원가입
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center mt-6 text-muted-foreground">
          이미 계정이 있으신가요?{" "}
          <Link href="/login" className="text-primary hover:underline font-medium">
            로그인
          </Link>
        </p>
      </div>
    </AuthLayout>
  )
}
