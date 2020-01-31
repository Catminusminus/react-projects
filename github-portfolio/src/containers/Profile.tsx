import React from 'react'
import Link from '../components/Link'
import List from '../components/List'
import styled from 'styled-components'

const ProfileWrapper = styled.div`
  width: 50%;
  margin: 10px auto;
`

const Avatar = styled.img`
  width: 150px;
`

const Profile = () => {
  const ref = React.useRef(null)
  const [data, setData] = React.useState({} as any)
  const [loading, setLoading] = React.useState(true)
  const [repositories, setRepositories] = React.useState([] as any[])
  const [error, setError] = React.useState('')
  React.useEffect(() => {
    const fetchProfile = async () => {
      const profile = await fetch('https://api.github.com/users/octocat')
      const profileJSON = await profile.json()
      if (profileJSON) {
        const repositoriesFetched = await fetch(profileJSON.repos_url)
        const repositoriesJSON = await repositoriesFetched.json()

        setData(profileJSON)
        setLoading(false)
        setRepositories(repositoriesJSON)
      }
    }
    try {
      fetchProfile()
    } catch (error) {
      setLoading(false)
      setError(error.message)
    }
  }, [ref])

  if (loading || error) {
    return <div>{loading ? 'Loading...' : error}</div>
  }

  const items = [
    {
      label: 'html_url',
      value: <Link url={data.html_url} title="GitHub URL" />,
    },
    { label: 'repos_url', value: data.repos_url },
    { label: 'name', value: data.name },
    { label: 'company', value: data.company },
    { label: 'location', value: data.location },
    { label: 'email', value: data.email },
    { label: 'bio', value: data.bio },
  ]

  const projects = repositories.map(repository => ({
    label: repository.name,
    value: <Link url={repository.html_url} title="GitHub  URL" />,
  }))

  return (
    <ProfileWrapper>
      <Avatar src={data.avatar_url} alt="avatar" />
      <List title="Profile" items={items} />
      <List title="Projects" items={projects} />
    </ProfileWrapper>
  )
}

export default Profile
