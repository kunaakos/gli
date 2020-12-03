import { css } from '@emotion/react'

/**
 * Istead of full-blown theming, constants are used.
 * This file also containes some style and component declarations that are used app-wide,
 * in the real world these would be implemented as part of a UI kit.
 */

/**
 * To avoid having endless amounts of breakpoints, larger screen layouts will be "stretched" to fit screens
 * that are tablet-sized or above - this can be done with setting the root element font size dynamically, and 
 * using rems as a unit for everything throughout the app.
 * The small is for mobile screens, which are typically portrait oriented, the medium is for tablets and above.
 * In a typical application a third screen size would be needed, or the small screen size styles should be written
 * with both mobile and tablet screens in mind.
 */
export const QUERIES = {
    small: '(max-width: 49.99rem)',
    medium: '(min-width: 50rem)',
}

/**
 * For consistency and ease of maintenance, this unit will be used for spacing.
 */
export const SPACING_UNIT = 1 // in rems


/**
 * The app's layout is simple, built from a series of containers that are rendered one after another vertically.
 * To avoid littering the DOM with unnecessary elements, it's enough to declare the styles that describe the size of 
 * a container, and apply them to any element necessary (e.g. a section, a div or even a plain paragraph).
 */
export const containerStyles = css`
    @media ${QUERIES.small} {
        width: calc(100% - ${SPACING_UNIT * 2 }rem);
        margin: 0 ${SPACING_UNIT}rem ${SPACING_UNIT}rem ${SPACING_UNIT}rem;
    }
    @media ${QUERIES.medium} {
        width: 100%;
        max-width: 50rem;
        margin: 0 auto ${SPACING_UNIT}rem auto;
    }
`
