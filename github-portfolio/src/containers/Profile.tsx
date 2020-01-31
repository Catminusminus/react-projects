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
  React.useEffect(() => {
    const fetchProfile = async () => {
      const profile = await fetch('https://api.github.com/users/octocat')
      const profileJSON = await profile.json()
      if (profileJSON) {
        setData(profileJSON)
        setLoading(false)
      }
    }
    fetchProfile()
  }, [ref])

  if (loading) {
    return <div>Loading...</div>
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

  return (
    <ProfileWrapper>
      <Avatar src={data.avatar_url} alt="avatar" />
      <List items={items} />
    </ProfileWrapper>
  )
}

export default Profile
