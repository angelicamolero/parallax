import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import Video from 'tekpro.store-video/Video';
import Style from '../carousel.css';
import Icon from 'tekpro.store-icons/Icons';
import { createPortal } from 'react-dom';

const VideoModal = ({ videoLink, image }: any) => {
  return createPortal(
    <div className={Style.videBackgroundModal}>
      <div className={Style.videoContainerModal}>
        <span className={Style.videoCloseModal}><Icon base="fal" icon="fa-times"/></span>
        <Video
          autoPlay={true}
          src={videoLink}
          blockClass={Style.videoContainerVtex}
          width="100%"
          controlsType="custom-vtex"
          loop={true}
          poster={image}
          playsInline={true}
          muted={true}
        />
      </div>
    </div>,
    document.body
  );
};

const VideoRender = ({ videoLink, image, showVideoModal, autplay, stopOut }: any) => {

  console.log("autplay", autplay);

  const ref = useRef(null);
  const [play, setPlay] = useState(false);

  useLayoutEffect(() => {
    autplay && setTimeout(() => setPlay(autplay), 1000);
  }, [autplay])

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target) && stopOut) {
        setPlay(false);
      }
    }

    if (document) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, stopOut]);

  const ComponentMode = showVideoModal ? (
    <VideoModal videoLink={videoLink} image={image} />
  ) : (
    <Video
      autoPlay={true}
      src={videoLink}
      blockClass={Style.videoContainerVtex}
      width="100%"
      controlsType="custom-vtex"
      loop={true}
      poster={image}
      playsInline={true}
      muted={true}
    />
  );

  return (
    <div ref={ref} className={Style.videoContainer} onClick={e => {
      e.stopPropagation();
      e.preventDefault();
    }}>
      {play && ComponentMode}
      <img
        onClick={(e) => {
          e.stopPropagation()
          e.preventDefault()
          setPlay(!play)
        }}
        src={image}
        width="100%"
        className={Style.videoContainerImagePoster}
      />
      {!play && (
        <div onClick={(e) => {
          e.stopPropagation()
          e.preventDefault()
          setPlay(!play)
          }} className={Style.videoPlayIcon}>
          <Icon base="fas" icon="fa-play" />
        </div>
      )}
    </div>
  );
};

export default VideoRender;
