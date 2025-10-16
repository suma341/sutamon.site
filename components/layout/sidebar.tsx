import Modal from "react-modal"
import Link from "next/link"
import Image from "next/image"

Modal.setAppElement('#__next')

type Props = {
  showSidebar: boolean
  setShowSidebar: (arg: boolean) => void
}

const Sidebar = ({ showSidebar, setShowSidebar }: Props) => {
  return (
    <Modal
      isOpen={showSidebar}
      onRequestClose={() => setShowSidebar(false)}
      shouldCloseOnOverlayClick={true}
      className="slide-modal z-[60] flex flex-col"
      overlayClassName="slide-overlay"
      closeTimeoutMS={350}
    >
      {/* ヘッダー */}
      <div className="flex items-center justify-between mb-8 z-[60]">
        <div className="flex items-center gap-2">
          <Image
            src="/icon.png"
            alt="App Icon"
            className="w-10 h-10 rounded-md"
          />
          <Image
            width={50}
            height={50}
            src="/logo.png"
            alt="logo"
            className="w-24 h-auto"
          />
        </div>
      </div>

      {/* リンク */}
      <nav className="flex flex-col gap-2">
        {[
          { name: "Home", href: "#top" },
          { name: "About", href: "#about" },
          { name: "Features", href: "#features" },
        ].map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="sidebar-link bg-gray-50 hover:bg-indigo-50 hover:text-indigo-600 flex items-center px-4 py-3 rounded-lg shadow-sm transition"
            onClick={() => setShowSidebar(false)}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </Modal>
  )
}

export default Sidebar
