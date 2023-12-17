'use client'

import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'

const BreakpointObserver: React.FC = () => {
    const [breakpoint, setBreakpoint] = useState<string | undefined>()
    
    const breakpointObserver = function() {
        matchMediaQuery(breakpoints, setBreakpoint)
    }

    useEffect(() => {
        matchMediaQuery(breakpoints, setBreakpoint)
        window.addEventListener('resize', breakpointObserver)

        return () => window.removeEventListener('resize', breakpointObserver)
    })

    return (
        <div className={styles.breakpoint}>
            Current breakpoint: {breakpoint}
        </div>
    )
}

const breakpoints = {
    xs: "(max-width: 320px) and (max-width: 575px)",
    s: "(min-width: 576px) and (max-width: 765px)",
    m: "(min-width: 768px) and (max-width: 991px)",
    l: "(min-width: 992px) and (max-width: 1199px)",
    xl: "(min-width: 1200px) and (max-width: 1439px)",
    xxl: "(min-width: 1440px)",
}

function matchMediaQuery(breakpoints: any, setBreakpoint: any) {
    for (const key of Object.keys(breakpoints)) {
        if(window.matchMedia(`${breakpoints[key]}`).matches) {
            setBreakpoint(key)
            break
        }
    }
}

export default BreakpointObserver