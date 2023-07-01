import { BodyContainer, ProfileContent } from './styles'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface Infos {
  avatar: string
  name: string
  url: string
  company: string
  bio: string
  followers: number
}
export function Profile() {
  const [infos, setInfos] = useState<Infos | null>(null)
  useEffect(() => {
    const fetchInfos = async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/users/ithauront',
        )
        setInfos({
          avatar: response.data.avatar_url,
          name: response.data.name,
          url: response.data.html_url,
          company: response.data.company,
          bio: response.data.bio,
          followers: response.data.followers,
        })
      } catch (error) {
        console.error(error)
      }
    }
    fetchInfos()
  }, [])

  return (
    <BodyContainer>
      <ProfileContent>
        <img
          src={infos?.avatar}
          alt="img que vai ser pega do profile do github"
        />

        <div>
          <div className="title">
            <h1>{infos?.name}</h1>
            <a href={infos?.url}>
              GITHUB <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>

          <p>{infos?.bio}</p>

          <div className="info">
            <span>
              <i className="fa-brands fa-github"></i>
              <p>oArrobaDaPessoa</p>
            </span>
            <span>
              <i className="fa-solid fa-building"></i>
              <p>{infos?.company}</p>
            </span>
            <span>
              <i className="fa-solid fa-user-group"></i>
              <p>{infos?.followers}</p>
            </span>
          </div>
        </div>
      </ProfileContent>
    </BodyContainer>
  )
}
