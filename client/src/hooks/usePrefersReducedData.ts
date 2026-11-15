import { useEffect, useState } from 'react'

type NetworkInformation = { saveData?: boolean; effectiveType?: string }

function readPrefersReducedData(): boolean {
  if (typeof window === 'undefined') return false
  const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection
  const saveData = connection?.saveData === true
  const slow = connection?.effectiveType ? /(^|-)2g$/.test(connection.effectiveType) : false
  const mediaQuery = window.matchMedia?.('(prefers-reduced-data: reduce)').matches ?? false
  return saveData || slow || mediaQuery
}

/**
 * True when the user has asked to save data (Save-Data / prefers-reduced-data)
 * or is on a very slow connection. Used to skip heavy media such as hero video.
 */
export function usePrefersReducedData(): boolean {
  const [reduced, setReduced] = useState(readPrefersReducedData)

  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-reduced-data: reduce)')
    const update = () => setReduced(readPrefersReducedData())
    mq?.addEventListener?.('change', update)
    return () => mq?.removeEventListener?.('change', update)
  }, [])

  return reduced
}
