import { SessionProvider } from 'next-auth/react'

export default function AppProvider ({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <SessionProvider>
      { children }
    </SessionProvider>
  )
}