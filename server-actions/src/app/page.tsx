import Menu from "@/components/menu"
import Login from "@/components/login"
import Cookie from "@/components/cookie"

export default function Home() {
  return (
    <main>
      <Menu />
      <h1>Home</h1>
      <Cookie />
      <Login />
    </main>
  )
}