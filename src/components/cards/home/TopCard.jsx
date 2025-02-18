import React, { useState } from 'react'

// Helper function for hex colors (unchanged)
function lightenColor(hex, percent) {
  hex = hex.replace(/^#/, '')
  if (hex.length === 3) {
    hex = hex.split('').map(x => x + x).join('')
  }
  const num = parseInt(hex, 16)
  let r = (num >> 16) & 0xFF
  let g = (num >> 8) & 0xFF
  let b = num & 0xFF

  r = Math.min(255, Math.floor(r + (255 - r) * (percent / 100)))
  g = Math.min(255, Math.floor(g + (255 - g) * (percent / 100)))
  b = Math.min(255, Math.floor(b + (255 - b) * (percent / 100)))

  return `rgb(${r}, ${g}, ${b})`
}

// New helper function for RGBA strings
function lightenRgba(color, percent) {
  // Expecting format: "rgba(r, g, b, a)"
  const values = color.match(/[\d.]+/g)
  if (!values || values.length < 4) return color
  let [r, g, b, a] = values
  r = Math.min(255, Math.floor(parseFloat(r) + (255 - parseFloat(r)) * (percent / 100)))
  g = Math.min(255, Math.floor(parseFloat(g) + (255 - parseFloat(g)) * (percent / 100)))
  b = Math.min(255, Math.floor(parseFloat(b) + (255 - parseFloat(b)) * (percent / 100)))
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

const TopCard = ({ icon, color, title, description }) => {
  const [isHovered, setIsHovered] = useState(false)
  // Check if color is RGBA; if so, use lightenRgba, otherwise use lightenColor.
  const bgColor = color.startsWith('rgba')
    ? (isHovered ? lightenRgba(color, 80) : 'white')
    : (isHovered ? lightenColor(color, 80) : 'white')

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
        className="w-16 h-16 mx-auto mb-4 border-none p-2 rounded-md" 
        style={{ backgroundColor: color }}
      />
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  )
}

export default TopCard
