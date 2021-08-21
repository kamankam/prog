import { useState } from 'react'

export default function Menu() {
  const [showMenu, setToggleMenu] = useState(false)

  const handleOnClick = () => {
    setToggleMenu(!showMenu)
  }

  return (
    <>
      <button onClick={handleOnClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {showMenu && (
        <div className="absolute left-0 top-0 w-full bg-gray-500">
          <span>template text</span>
        </div>
      )}
    </>
  )
}
