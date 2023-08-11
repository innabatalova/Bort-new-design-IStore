import React from 'react'

const NewsPreviewCard = ({ srcNewsPreviewCardProps, dateNewsPreviewCardProps, titleNewsPreviewCardProps, textNewsPreviewCardProps }) => {
  return (
    <div className="card news-preview-card">
      <div className="news-preview-wrap-img">
        <img
          src={srcNewsPreviewCardProps}
          alt="news preview card img"
          className="news-preview-card-img"
        />
        <span className="news-preview-card-date">{dateNewsPreviewCardProps}</span>
      </div>
      <h3 className="news-preview-card-title">
        {titleNewsPreviewCardProps}
      </h3>
      <p className="news-preview-card-text">
        {textNewsPreviewCardProps}
      </p>
      <a href="#" target="_blank" className="news-preview-card-link"
      >Читать дальше...</a
      >
    </div>
  )
}

export default NewsPreviewCard