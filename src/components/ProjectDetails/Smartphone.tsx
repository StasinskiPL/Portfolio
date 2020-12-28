import React, {useRef, useEffect} from 'react';
import {gsap,Power3} from "gsap"


interface Props{
    link:string
}

const Smartphone:React.FC<Props> = ({link}) => {


const smartphoneRef = useRef<HTMLDivElement>(null!)
    useEffect(()=>{
        gsap.from(smartphoneRef.current,{
            duration:1,
            delay:1.5,
            opacity:0,
            y:-20,
            ease:Power3.easeInOut,
        })
    })

    return (
        <div ref={smartphoneRef} className="smartphone">
        <div className="content">
          <iframe loading="lazy"
          frameBorder="0"
            allow="encrypted-media" 
          src={link} title="appIFrame"/>
        </div>
      </div>
    )
}

export default Smartphone
