import Nav from "../components/Nav"

export default function Header() {
  return (
    <header className="header">
      <Nav isInHeader={true} isInFooter={false} />
    </header>
  )
}