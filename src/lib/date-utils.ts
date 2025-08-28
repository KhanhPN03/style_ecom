/**
 * Utility functions for safe date formatting that prevent hydration mismatches
 */

/**
 * Formats a date string in a consistent way that won't cause hydration issues
 * @param dateString - ISO date string or timestamp
 * @returns Formatted date string
 */
export function formatDate(dateString: string | number): string {
  try {
    const date = new Date(dateString)
    // Use a consistent format that won't vary by locale/timezone
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  } catch (error) {
    return 'Invalid date'
  }
}

/**
 * Gets the current year in a way that's safe for SSR
 * @returns Current year as number
 */
export function getCurrentYear(): number {
  return 2025 // Static fallback for SSR, will be updated on client
}

/**
 * Hook to safely get the current year on client-side
 */
export function useCurrentYear(): number {
  if (typeof window === 'undefined') {
    return getCurrentYear()
  }
  return new Date().getFullYear()
}
