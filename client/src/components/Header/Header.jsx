
import style from './Header.module.css'
import logo from '../../assets/logo.svg'
import { IconButton } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import ForumIcon from '@mui/icons-material/Forum'


const Header = () => {
  return (
    <div className={style.header}>
      <IconButton>
        <PersonIcon fontSize='large' className={style.header__icon}/>
      </IconButton>
      <img className={style.header__logo} src={logo} alt="header" />
      <IconButton>
        <ForumIcon fontSize='large' className={style.header__icon}/>
      </IconButton>
    </div>
  )
}

export default Header