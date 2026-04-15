"use client"

import { useState } from "react"
import Link from "next/link"
import { AuthLayout } from "@/components/auth/auth-layout"
import { Mail, Lock, Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic
    console.log({ email, password, rememberMe })
  }

  return (
    <AuthLayout variant="login">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">로그인</h2>
        <p className="text-muted-foreground mb-8">
          계정에 로그인하여 공동구매에 참여하세요
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              이메일
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호를 입력하세요"
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

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-border text-primary focus:ring-primary/20"
              />
              <span className="text-sm text-muted-foreground">로그인 상태 유지</span>
            </label>
            <Link 
              href="/forgot-password" 
              className="text-sm text-primary hover:underline"
            >
              비밀번호 찾기
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            로그인
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-border" />
          <span className="text-sm text-muted-foreground">또는</span>
          <div className="flex-1 h-px bg-border" />
        </div>


        {/* Sign Up Link */}
        <p className="text-center mt-8 text-muted-foreground">
          아직 계정이 없으신가요?{" "}
          <Link href="/signup" className="text-primary hover:underline font-medium">
            회원가입
          </Link>
        </p>
      </div>
    </AuthLayout>
  )
}
