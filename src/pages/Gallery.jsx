import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, Images, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { galleryCategories, galleryImages } from '../data/gallery.js'

function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState(null)
  const [failedImages, setFailedImages] = useState(() => new Set())
  const dialogRef = useRef(null)
  const visibleImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter((image) => image.category === activeCategory)
  const selectedIndex = visibleImages.findIndex(({ id }) => id === selectedImage?.id)

  useEffect(() => {
    if (selectedImage && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal()
    }
  }, [selectedImage])

  useEffect(() => {
    if (!selectedImage) return undefined

    function handleKeyDown(event) {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        setSelectedImage((current) => {
          const currentIndex = visibleImages.findIndex(({ id }) => id === current?.id)
          return visibleImages[(currentIndex - 1 + visibleImages.length) % visibleImages.length]
        })
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        setSelectedImage((current) => {
          const currentIndex = visibleImages.findIndex(({ id }) => id === current?.id)
          return visibleImages[(currentIndex + 1) % visibleImages.length]
        })
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage, visibleImages])

  function closeViewer() {
    if (dialogRef.current?.open) dialogRef.current.close()
  }

  function showAdjacentImage(direction) {
    const nextIndex = (selectedIndex + direction + visibleImages.length) % visibleImages.length
    setSelectedImage(visibleImages[nextIndex])
  }

  function handleImageError(imageId) {
    setFailedImages((current) => new Set(current).add(imageId))
  }

  return (
    <div className="inner-page gallery-page">
      <section className="gallery-hero">
        <div className="gallery-hero-shade" aria-hidden="true" />
        <div className="page-width gallery-hero-content">
          <p className="eyebrow">SELVA TOURS AND TRAVELS</p>
          <h1>Our Gallery</h1>
          <p>Explore the journeys, destinations, and travel experiences of Selva Tours and Travels.</p>
          <nav className="gallery-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Gallery</span>
          </nav>
        </div>
      </section>

      <section className="gallery-section page-width" aria-labelledby="gallery-heading">
        <div className="gallery-section-heading">
          <div>
            <p className="eyebrow">JOURNEYS IN PICTURES</p>
            <h2 id="gallery-heading">Explore the gallery</h2>
          </div>
          <p>Images are illustrative travel photography, not confirmed Selva vehicles, customers, or completed trips. Replace them with approved business photos when available.</p>
        </div>

        <div className="gallery-filters" role="group" aria-label="Filter gallery by category">
          {galleryCategories.map((category) => (
            <button
              className={activeCategory === category ? 'gallery-filter is-active' : 'gallery-filter'}
              type="button"
              key={category}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {visibleImages.map((image, index) => (
            <button
              className={`gallery-card${image.size ? ` gallery-card-${image.size}` : ''}`}
              type="button"
              key={image.id}
              aria-label={`View image ${index + 1}: ${image.title}`}
              onClick={() => setSelectedImage(image)}
            >
              <span className="gallery-card-media">
                {failedImages.has(image.id) ? (
                  <span className="gallery-image-fallback"><Images size={30} aria-hidden="true" />Image unavailable</span>
                ) : (
                  <img src={image.src} alt={image.alt} loading={index === 0 ? 'eager' : 'lazy'} onError={() => handleImageError(image.id)} />
                )}
                <span className="gallery-view-icon"><Images size={21} aria-hidden="true" /></span>
              </span>
              <span className="gallery-card-caption">
                <span className="gallery-card-category">{image.category}</span>
                <span className="gallery-card-title">{image.title}</span>
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="gallery-cta">
        <div className="page-width gallery-cta-inner">
          <div>
            <p className="eyebrow">YOUR NEXT JOURNEY STARTS HERE</p>
            <h2>Planning Your Next Journey?</h2>
            <p>Let Selva Tours and Travels help you plan a comfortable journey.</p>
          </div>
          <div className="gallery-cta-actions">
            <Link className="button button-gold" to="/tour-packages">Explore Tour Packages <ArrowUpRight size={17} aria-hidden="true" /></Link>
            <Link className="gallery-contact-link" to="/contact">Contact Us <ArrowRight size={17} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <dialog
        className="gallery-viewer"
        ref={dialogRef}
        aria-label="Gallery image viewer"
        onClose={() => setSelectedImage(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) closeViewer()
        }}
      >
        {selectedImage && (
          <div className="gallery-viewer-content">
            <button className="gallery-viewer-close" type="button" aria-label="Close image viewer" onClick={closeViewer}>
              <X size={24} aria-hidden="true" />
            </button>
            <button className="gallery-viewer-arrow gallery-viewer-previous" type="button" aria-label="Previous image" onClick={() => showAdjacentImage(-1)}>
              <ArrowLeft size={24} aria-hidden="true" />
            </button>
            {failedImages.has(selectedImage.id) ? (
              <div className="gallery-viewer-fallback"><Images size={42} aria-hidden="true" /><span>Image unavailable</span></div>
            ) : (
              <img
                className="gallery-viewer-image"
                src={selectedImage.src}
                alt={selectedImage.alt}
                onError={() => handleImageError(selectedImage.id)}
              />
            )}
            <button className="gallery-viewer-arrow gallery-viewer-next" type="button" aria-label="Next image" onClick={() => showAdjacentImage(1)}>
              <ArrowRight size={24} aria-hidden="true" />
            </button>
            <div className="gallery-viewer-caption">
              <div><p>{selectedImage.category}</p><h2>{selectedImage.title}</h2></div>
              <span>{selectedIndex + 1} of {visibleImages.length}</span>
            </div>
          </div>
        )}
      </dialog>
    </div>
  )
}

export default Gallery
