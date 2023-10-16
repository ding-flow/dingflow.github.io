import { Logo } from '../logo'
import style from './style.module.css'

export function Navbar() {
  return () => (
    <div class={style.navbar}>
      <Logo />
    </div>
  )
}
