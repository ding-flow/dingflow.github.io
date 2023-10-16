import { Footbar } from '../../components/footbar'
import { Layout } from '../../components/layout'
import { Navbar } from '../../components/navbar'

import style from './style.module.css'

// https://www.raycast.com/
export function Home() {

  return () => {
    const mainHead = (
      <div class={style.mainHead}>
        <div class={style.headingText}>
        <div class={style.headMove}></div>
          <div class={style.headingTextFront}>
            <h1>联系我们
              <br />
              获取定制服务
            </h1>
          </div>
          <div class={style.headingTextBack}>
            <h1>联系我们
              <br />
              获取定制服务
            </h1>
          </div>
        </div>
      </div>
    )

    const connect = (
      <div class={style.connect}>
        <div class={style.connectItem}>
          
        </div>
      </div>
    )


    return (
      <Layout
        navbar={<Navbar />}
        footbar={<Footbar />}
      >
        <div class={style.home}>
          <div class={style.screen}>
            {mainHead}
          </div>
          <div class={style.screen}>
            {connect}
          </div>
        </div>
      </Layout>
    )
  }
}
