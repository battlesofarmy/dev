import { PiRocketLaunchBold } from 'react-icons/pi'
import { Link } from 'react-router-dom'

export default function Card({ele, btn = 2}) {
    const {id, img, title, source, live, des} = ele;

  return (
    <>
        <div className='card text-center'>
            <div className='snip1205 blue-color'>
                <img src={img} alt={title}/>
                <i className='text-4xl' style={{fontSize: '55px'}}>
                    <PiRocketLaunchBold />
                </i>
                {
                    btn===1 ? 
                    <Link to={`/projects/${id}`}> </Link>
                    :
                    <a target='_blank' href={live}></a>
                }
            </div>
            {/* Card Body  */}
            <div className='md:pb-6 pb-4 md:pt-8 pt-6 lg:px-10 px-3'>
                <h3 className='lg:text-3xl text-2xl font-semibol'>{title}</h3>
                <p className='card-text mt-3 md:mb-3 mb-2'>{des}</p>
                <div className='flex gap-2 justify-evenly items-center mt-2'>
                    {
                        btn === 1 ?
                        <Link to={`/projects/${id}`}>
                            <button className='dev_btn rounded py-2 px-4 mt-2 mb-1'>View Details</button>
                        </Link>
                        :
                        <>
                            <a target='_blank' href={`${source}`}>
                                <button className='dev_btn2 rounded py-2 px-4'>Source Code</button>
                            </a>
                            <a target='_blank' href={`${live}`}>
                                <button className='dev_btn rounded py-2 px-4'>Live Preview</button>
                            </a>
                        </>
                    }
                </div>
            </div>
        </div>
    </>
  )
}
