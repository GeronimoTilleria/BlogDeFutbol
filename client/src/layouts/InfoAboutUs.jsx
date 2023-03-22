import React from 'react'

const InfoAboutUs = () => {
    return (
        <div className='main-container mt-5'>
            <h2>Nuestra Comunidad Futbolera</h2>
            <div className='d-flex justify-content-around gap-5 mt-4'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-soccer-field" width="100" height="100" viewBox="0 0 24 24" strokeWidth="1" stroke="#009988" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="12" cy="12" r="3" />
                        <path d="M3 9h3v6h-3z" />
                        <path d="M18 9h3v6h-3z" />
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <line x1="12" y1="5" x2="12" y2="19" />
                    </svg>
                    <h3>Futbol</h3>
                    <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel dolor nec 
                    enim imperdiet vehicula et non turpis. Pellentesque sollicitudin tincidunt volutpat. Sed 
                    fringilla quam at elit gravida, et pretium nulla pretium. </p>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-news" width="100" height="100" viewBox="0 0 24 24" strokeWidth="1" stroke="#009988" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11" />
                        <line x1="8" y1="8" x2="12" y2="8" />
                        <line x1="8" y1="12" x2="12" y2="12" />
                        <line x1="8" y1="16" x2="12" y2="16" />
                    </svg>
                    <h3>Novedades</h3>
                    <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel dolor nec 
                    enim imperdiet vehicula et non turpis. Pellentesque sollicitudin tincidunt volutpat. Sed 
                    fringilla quam at elit gravida, et pretium nulla pretium. </p>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-book" width="100" height="100" viewBox="0 0 24 24" strokeWidth="1" stroke="#009988" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                        <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                        <line x1="3" y1="6" x2="3" y2="19" />
                        <line x1="12" y1="6" x2="12" y2="19" />
                        <line x1="21" y1="6" x2="21" y2="19" />
                    </svg>
                    <h3>Informativo</h3>
                    <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel dolor nec 
                    enim imperdiet vehicula et non turpis. Pellentesque sollicitudin tincidunt volutpat. Sed 
                    fringilla quam at elit gravida, et pretium nulla pretium. </p>
                </div>
            </div>
        </div>
    )
}

export default InfoAboutUs
