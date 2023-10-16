import style from './style.module.css'

export function Footbar() {
  return () => (
    <div class={style.footbar}>
      <div class={style.container}>
        <div class={style.row}>
          <div class={style.block}>
            -
          </div>
          <div class={style.block}>
            <div class={style.mail}>
              <a href="#">BO@DINGFLOW.VIP</a>
            </div>
            <div class={style.copyright}>
              <p>DingFlow &copy;2023. All Rights Reserved</p>
              <p>Made with ♥ By Alain.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
