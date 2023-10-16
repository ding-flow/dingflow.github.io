import { AirxChildren } from 'airx'

import style from './style.module.css'

interface Props {
  navbar?: AirxChildren
  footbar?: AirxChildren
  children: AirxChildren
}

export function Layout(props: Props) {
  return () => (
    <div class={style.layout}>
      <div class={style.navbar}>{props.navbar}</div>
      <div class={style.content}>{props.children}</div>
      <div class={style.footbar}>{props.footbar}</div>
    </div>
  )
}
