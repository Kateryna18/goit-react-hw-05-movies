import React from 'react'
import { Link } from 'react-router-dom';
import css from './NotFound.module.css';

export default function NotFound() {

  return (
    <>
     <Link className={css.button} to={'/'}>
          Go Back 
        </Link>
    <p className={css.info}>Sorry, this page Not Found</p>
    <div className={css.boxImage}>
      <img className={css.image} src="https://us.123rf.com/450wm/olleg/olleg1710/olleg171000005/87269680-i-am-sorry-message-on-white-background-sad-girl-holding-sorry-poster.jpg?ver=6" alt="" />
    </div>
    </>
  )
}
