type ProjectVisualProps = {
  src: string
  alt: string
  width?: number
  height?: number
  phone?: boolean
  priority?: boolean
}

/** CSS-only framing keeps the real screenshot intact and reserves its aspect ratio. */
export function ProjectVisual({ src, alt, width, height, phone = false, priority = false }: ProjectVisualProps) {
  return (
    <div className={`project-object ${phone ? 'project-object-phone' : 'project-object-browser'}`}>
      <div className="project-object-chrome" aria-hidden="true">
        {phone ? <span className="project-object-speaker" /> : <><i /><i /><i /></>}
      </div>
      <img src={src} alt={alt} width={width} height={height} loading={priority ? 'eager' : 'lazy'} decoding="async" fetchPriority={priority ? 'high' : 'auto'} />
    </div>
  )
}