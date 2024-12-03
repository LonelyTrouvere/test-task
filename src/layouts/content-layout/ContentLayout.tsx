import { Children, ReactNode } from 'react'
import './ContentLayout.css'

function ContentLayout({children}: {children: ReactNode}) {
    return <div className="content-layout">
        {
            Children.map(children, child => (
                <div className="content-row">
                    {child}
                </div>
            ))
        }
    </div>
}

export default ContentLayout