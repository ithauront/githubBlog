import Logo from '../../assets/Logo.svg'
import { BodyContainer, ProfileContent } from './styles'
export function Profile() {
  return (
    <BodyContainer>
      <ProfileContent>
        <img src={Logo} alt="img que vai ser pega do profile do github" />

        <div>
          <div className="title">
            <h1>Name Nameson</h1>
            <a href="Link para o github da pessoa">
              GITHUB <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>

          <p>
            Aqui vai ficar a descrição do profile da pessoa, em poucas linhas,
            vamos pegar isso tambem do github.
          </p>

          <div className="info">
            <span>
              <i className="fa-brands fa-github"></i>
              <p>oArrobaDaPessoa</p>
            </span>
            <span>
              <i className="fa-solid fa-building"></i>
              <p>AEmpresaDaPessoa</p>
            </span>
            <span>
              <i className="fa-solid fa-user-group"></i>
              <p>ONumeroDeSeguidores</p>
            </span>
          </div>
        </div>
      </ProfileContent>
    </BodyContainer>
  )
}
