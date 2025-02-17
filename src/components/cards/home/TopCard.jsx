import React, { useState } from 'react'

// Helper function to lighten a hex color by a percentage.
function lightenColor(hex, percent) {
  // Remove '#' if present
  hex = hex.replace(/^#/, '')
  // Expand shorthand form (e.g. "03F") to full form ("0033FF")
  if (hex.length === 3) {
    hex = hex.split('').map(x => x + x).join('')
  }
  const num = parseInt(hex, 16)
  let r = (num >> 16) & 0xFF
  let g = (num >> 8) & 0xFF
  let b = num & 0xFF

  // Calculate new RGB values
  r = Math.min(255, Math.floor(r + (255 - r) * (percent / 100)))
  g = Math.min(255, Math.floor(g + (255 - g) * (percent / 100)))
  b = Math.min(255, Math.floor(b + (255 - b) * (percent / 100)))

  return `rgb(${r}, ${g}, ${b})`
}

const TopCard = ({ icon, color, title, description }) => {
  const [isHovered, setIsHovered] = useState(false)
  // When hovered, use a light version (80% toward white) of the color; otherwise white.
  const bgColor = isHovered ? lightenColor(color, 80) : 'white'

  return (
    <div
      className="shadow-md rounded-lg p-6 text-center w-full max-w-xs min-h-[260px] transition-colors duration-300"
      style={{ backgroundColor: bgColor }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={icon} 
        alt={title} 
        className="w-16 h-16 mx-auto mb-4 border-[3px] p-1 rounded-md" 
        style={{ borderColor: color }}
      />
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  )
}

export default TopCard
