import './globals.css'

export const metadata = {
  title: 'Step1Con',
  description: 'Step1Con',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
