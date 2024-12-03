import { ReactNode } from 'react'
import './ContentLayout.css'

function ContentLayout({children}: {children: ReactNode}) {
    return <div className="content-layout">
        {children}
    </div>
}

export default ContentLayout