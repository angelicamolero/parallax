import { useState, useRef, useEffect } from 'react';
import Video from 'vtex.store-video/Video';
import Style from '../carousel.css';

const VideoRender = ({videoLink, heightB, image}: any) => {

    const ref = useRef(null);
    const [play, setPlay] = useState(false);

    useEffect(() => {

      let timmer: any = setTimeout(() => {})

      if (!play) {
        timmer = setTimeout(() => {
          console.log("VideoRender")
          setPlay(true);
        }, 1000)
      }

      return () => {
        clearTimeout(timmer);
      }
    }, [])

    useEffect(() => {
        function handleClickOutside(event: any) {
          if (ref.current && !ref.current.contains(event.target)) {
            const element:any = document.getElementsByClassName('tekpro-parallax-0-x-pauseIcon')[0];
            if (element) {
                element?.parentElement?.click();                
            }
          }
        }
    
        if (document) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [ref]);

    return <div ref={ref} className={Style.videoContainer} style={{height: heightB}}>
       {play && videoLink && <Video src={videoLink} poster={image} width="100%" height={heightB} controlsType="custom-vtex" playsInline={true}/>}
    </div>
}

export default VideoRender;
