import style from './SwipteButtons.module.css'

import ReplayIcon from '@mui/icons-material/Replay'
import CloseIcon from '@mui/icons-material/Close'
import StarRateIcon from '@mui/icons-material/StarRate'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FlashOnIcon from '@mui/icons-material/FlashOn'
import IconButton from '@mui/material/IconButton'

const SwipeButtons = () => {
  return (
    <div className={style.swipeButtons}>
      <IconButton className={style.swipeButtons__repeat}>
        <ReplayIcon fontSize='large'/>
      </IconButton>
      <IconButton className={style.swipeButtons__left}>
        <CloseIcon fontSize='large'/>
      </IconButton>
      <IconButton className={style.swipeButtons__star}>
        <StarRateIcon fontSize='large'/>
      </IconButton>
      <IconButton className={style.swipeButtons__right}>
        <FavoriteIcon fontSize='large'/>
      </IconButton>
      <IconButton className={style.swipeButtons__lightning}>
        <FlashOnIcon fontSize='large'/>
      </IconButton>
    </div>
  )
}

export default SwipeButtons