import React, { useState } from 'react'
import './Filter.scss'

import arrowGrey from '../../../assets/imgAuctions/arrowGrey.svg'
import arrowFilter from '../../../assets/imgAuctions/arrowFilter.svg'

const Filter = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(true)
  const [isBrandVisible, setIsBrandVisible] = useState(true)

  return (
    <div className="filter">
      <div className="filter__header">
        <h2 className="filter__title">Filtering</h2>
        <span className="filter__hide" onClick={() => setIsVisible(!isVisible)}>
          <div className="filter__block-arrowImg">
            <img
              src={arrowGrey}
              alt="arrow"
              className={`filter__arrow ${isVisible ? 'rotate' : ''}`}
            />
          </div>
        </span>
      </div>
      {isVisible && (
        <>
          <div>
            <h3 className="filter__selected">Selected Categories:</h3>
          </div>

          <div className="categories">
            <h3 className="categories__title">Categories:</h3>
            <span className="categories__arrow" onClick={() => setIsCategoriesVisible(!isCategoriesVisible)}>
              <img
                src={arrowFilter}
                alt="arrow"
                className={`filter__arrow ${isCategoriesVisible ? 'rotate' : ''}`}
              />
            </span>
          </div>

          <div className="filter__categories" style={{ display: isCategoriesVisible ? 'block' : 'none' }}>
            <label className="checkbox__container">
              <input type="checkbox" name="category" value="all" />
              <span className="checkmark"></span>
              All categories
            </label>

            <label className="checkbox__container">
              <input type="checkbox" name="category" value="gadgets" />
              <span className="checkmark"></span>
              Gadgets
            </label>

            <label className="checkbox__container">
              <input type="checkbox" name="category" value="electronics" />
              <span className="checkmark"></span>
              Electronics
            </label>
          </div>

          <div className="brand">
            <h3 className="brand__title">Brand</h3>
            <span className="brand__arrow " onClick={() => setIsBrandVisible(!isBrandVisible)}>
              <img
                src={arrowFilter}
                alt="arrow"
                className={`filter__arrow ${isBrandVisible ? 'rotate' : ''}`}
              />
            </span>
          </div>

          <div className="filter__brands" style={{ display: isBrandVisible ? 'block' : 'none' }}>
            <input type="text" placeholder="Search" />

            <label className="checkbox__container">
              <input type="checkbox" name="brand" value="apple" />
              <span className="checkmark"></span>
              Apple
            </label>

            <label className="checkbox__container">
              <input type="checkbox" name="brand" value="samsung" />
              <span className="checkmark"></span>
              Samsung
            </label>
            <label className="checkbox__container">
              <input type="checkbox" name="brand" value="Xiaomi" />
              <span className="checkmark"></span>
              Xiaomi
            </label>
          </div>
        </>
      )}
    </div>
  )
}

export default Filter
