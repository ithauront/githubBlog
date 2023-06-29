import { ProfileContainer } from '../../components/profile/styles'

export function PostPage() {
  return (
    <>
      <ProfileContainer>
        <div>
          <span>
            <a href="Link para pag inicial">
              <i className="fa-solid fa-angle-left"></i>VOLTAR
            </a>
            <a href="Link para o github da pessoa">
              VER NO GITHUB
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </span>
          <div>
            <h1>JavaScript data types and data structures</h1>
          </div>

          <div className="info">
            <span>
              <i className="fa-brands fa-github"></i>
              <p>oArrobaDaPessoa</p>
            </span>
            <span>
              <i className="fa-solid fa-calendar-day"></i>
              <p>Há 1 dia</p>
            </span>
            <span>
              <i className="fa-solid fa-comment"></i>
              <p>5 comentários</p>
            </span>
          </div>
        </div>
      </ProfileContainer>
      <div>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn. Dynamic typing
        JavaScript is a loosely typed and dynamic language. Variables in
        JavaScript are not directly associated with any particular value type,
        and any variable can be assigned (and re-assigned) values of all types:
        let foo = 42; // foo is now a number foo = &apos;bar&apos; // foo is now
        a string foo = true; // foo is now a boolean
      </div>
    </>
  )
}
