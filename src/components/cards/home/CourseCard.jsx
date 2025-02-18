import React, { useState } from 'react'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CourseCard = ({ image, rating, title, description, subjects }) => {
  const [expanded, setExpanded] = useState(false)
  // Round rating for visual star display (but keep the original numeric rating)
  const roundedRating = Math.round(rating * 2) / 2
  const fullStars = Math.floor(roundedRating)
  const hasHalf = roundedRating % 1 !== 0
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0)

  const renderStars = () => {
    const stars = []
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={`full-${i}`}
          icon={faStar}
          style={{ color: "#87dbdb" }}
        />
      )
    }
    if (hasHalf) {
      stars.push(
        <FontAwesomeIcon
          key="half"
          icon={faStarHalfAlt}
          style={{ color: "#87dbdb" }}
        />
      )
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={`empty-${i}`}
          icon={faRegularStar}
          style={{ color: "#87dbdb" }}
        />
      )
    }
    return stars
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
      {/* Course Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-md"
      />

      {/* Content */}
      <div className="mt-4">
        {/* Title & Rating Row */}
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="flex items-center">
            {renderStars()}
            <span className="ml-2 text-gray-700 text-sm">
              {rating.toFixed(1)}
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="relative mt-2">
          {expanded ? (
            <p className="text-sm text-gray-600">{description}</p>
          ) : (
            <p className="text-sm text-gray-600 line-clamp-2">
              {description}
            </p>
          )}
          {!expanded && (
            <button
              onClick={() => setExpanded(true)}
              className="absolute bottom-0 right-0 bg-white text-blue-600 text-xs font-medium px-1"
            >
              Read More
            </button>
          )}
          {expanded && (
            <button
              onClick={() => setExpanded(false)}
              className="block mt-2 text-blue-600 text-xs font-medium"
            >
              Read Less
            </button>
          )}
        </div>

        {/* Subjects as Chips */}
        {subjects && subjects.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {subjects.map((subject) => (
              <span
                key={subject}
                className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full"
              >
                {subject}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default CourseCard
