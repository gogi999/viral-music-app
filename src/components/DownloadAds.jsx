import React from 'react'
import app_store from '../img/App Store.png'
import google_play from '../img/Google Play.png'

const DownloadAds = () => {
  const downloadImgStyle =
    'border-[2px] border-[#232A4E] rounded-[13px] h-[3rem] w-[10rem]'

  return (
    <div className="download">
      <div className="download_images flex">
        <img
          src={app_store}
          alt="App Store"
          className={downloadImgStyle + ` mr-[2rem]`}
        />
        <img src={google_play} alt="Google Play" className={downloadImgStyle} />
      </div>
    </div>
  )
}

export default DownloadAds
