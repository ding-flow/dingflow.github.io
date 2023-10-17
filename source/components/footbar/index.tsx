import CallIcon from './icons/call.png'
import EmailIcon from './icons/email.png'

import style from './style.module.css'

export function Footbar() {
  interface Contact {
    icon: string
    value: string
  }

  const contacts: Contact[] = [
    { icon: EmailIcon, value: 'BO@DINGFLOW.VIP' },
    { icon: CallIcon, value: '13966989583' }
  ]


  return () => {
    const contactsView = contacts.map(contact => (
      <div class={style.contact}>
        <img class={style.icon} src={contact.icon} />
        <a class={style.value} href="#">{contact.value}</a>
      </div>
    ))


    return (
      <div class={style.footbar}>
        <div class={style.container}>
          <div class={style.row}>
            <div class={style.leftBlock}>
              {contactsView}
            </div>
            <div class={style.block}>
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
}
