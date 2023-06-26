import Logo from '../../assets/Logo.svg'
import EffectLeft from '../../assets/effectLeft.svg'
import EffectRigth from '../../assets/effectRigth.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <div className="effectLeft">
        <img src={EffectLeft} alt="" />
      </div>
      <img src={Logo} alt="" className="logo" />
      <div className="effectRigth">
        <img src={EffectRigth} alt="" />
      </div>
    </HeaderContainer>
  )
}
