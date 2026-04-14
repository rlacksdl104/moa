export function Footer() {
  return (
    <footer className="bg-white border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 모아. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>고객센터: 1234-5678</span>
            <span>평일 09:00 - 18:00</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
