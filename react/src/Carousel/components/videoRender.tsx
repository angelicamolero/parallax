import { useState, useRef, useEffect } from 'react';
import Video from 'tekpro.store-video/Video';
import Style from '../carousel.css';
import Icon from 'tekpro.store-icons/Icons';

const VideoRender = ({videoLink, image}: any) => {

    const ref = useRef(null);
    const [play, setPlay] = useState(false);

    useEffect(() => {
        function handleClickOutside(event: any) {
          if (ref.current && !ref.current.contains(event.target)) {
            setPlay(false);
          }
        }
    
        if (document) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [ref]);

    return <div ref={ref} className={Style.videoContainer}>
       {play && <Video autoPlay={true} src={videoLink} blockClass={Style.videoContainerVtex} width="100%" controlsType="custom-vtex" loop={true} poster={image} playsInline={true} muted={true}/>}
       <img onClick={() => setPlay(!play)} src={image} width="100%" className={Style.videoContainerImagePoster}/>
      {!play && <div onClick={() => setPlay(!play)} className={Style.videoPlayIcon}>
         <Icon base="fas" icon="fa-play"/>
       </div>}
    </div>
}

export default VideoRender;
