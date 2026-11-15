import { useEffect } from 'react'
import { SITE } from '@/lib/site'

interface PageMeta {
  title: string
  description?: string
  path?: string
  robots?: string
  ogImage?: string
  jsonLd?: Record<string, unknown>
}

function setOrCreateMeta(
  selector: string,
  createAttrs: Record<string, string>,
  attr: 'content' | 'href',
  value: string | undefined,
) {
  if (value === undefined) return undefined
  let el = document.head.querySelector(selector)
  let created = false
  if (!el) {
    el = document.createElement(selector.startsWith('link') ? 'link' : 'meta')
    Object.entries(createAttrs).forEach(([k, v]) => el!.setAttribute(k, v))
    document.head.appendChild(el)
    created = true
  }
  const previous = el.getAttribute(attr)
  el.setAttribute(attr, value)
  return () => {
    if (created) el?.remove()
    else if (previous !== null) el?.setAttribute(attr, previous)
  }
}

/**
 * Updates the document title, canonical URL, Open Graph, Twitter/X, and
 * optional route-level JSON-LD structured data for client-side route changes.
 */
export function usePageMeta({ title, description, path, robots, ogImage, jsonLd }: PageMeta) {
  useEffect(() => {
    const prevTitle = document.title
    document.title = title

    const baseUrl = SITE.url.replace(/\/$/, '')
    const canonicalUrl = path !== undefined ? `${baseUrl}${path.startsWith('/') ? path : `/${path}`}` : undefined
    const imageUrl = ogImage
      ? ogImage.startsWith('http')
        ? ogImage
        : `${baseUrl}${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}`
      : undefined

    const restore = [
      setOrCreateMeta('meta[name="description"]', { name: 'description' }, 'content', description),
      setOrCreateMeta('meta[name="robots"]', { name: 'robots' }, 'content', robots),
      setOrCreateMeta('link[rel="canonical"]', { rel: 'canonical' }, 'href', canonicalUrl),
      setOrCreateMeta('meta[property="og:title"]', { property: 'og:title' }, 'content', title),
      setOrCreateMeta('meta[property="og:description"]', { property: 'og:description' }, 'content', description),
      setOrCreateMeta('meta[property="og:url"]', { property: 'og:url' }, 'content', canonicalUrl),
      setOrCreateMeta('meta[property="og:image"]', { property: 'og:image' }, 'content', imageUrl),
      setOrCreateMeta('meta[name="twitter:title"]', { name: 'twitter:title' }, 'content', title),
      setOrCreateMeta('meta[name="twitter:description"]', { name: 'twitter:description' }, 'content', description),
      setOrCreateMeta('meta[name="twitter:image"]', { name: 'twitter:image' }, 'content', imageUrl),
    ]

    let scriptEl: HTMLScriptElement | null = null
    if (jsonLd) {
      scriptEl = document.createElement('script')
      scriptEl.type = 'application/ld+json'
      scriptEl.setAttribute('data-page-schema', 'true')
      scriptEl.text = JSON.stringify(jsonLd)
      document.head.appendChild(scriptEl)
    }

    return () => {
      document.title = prevTitle
      restore.forEach((fn) => fn?.())
      scriptEl?.remove()
    }
  }, [title, description, path, robots, ogImage, jsonLd])
}
