import { FC } from 'react'
import { CiHeart } from 'react-icons/ci'
import { NavLink } from 'react-router-dom'

const ControlHeader:FC = () => {
    return(
        <div className="control">
        <NavLink
          className={({ isActive }) =>
            isActive ? 'favoritesActive ' : 'favorites'
          }
          to="/favorites"
        >
          <CiHeart className="heart" />
        </NavLink>

        <div className="signIn">
          <div className="signIn-text">SIGN IN</div>
        </div>
      </div>
    )
}

export default ControlHeader