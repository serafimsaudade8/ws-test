import gql from 'graphql-tag'

export const LastTenMissionsQuery = gql`
query {
  launchesPast(limit: 10) {
    launch_date_local
    details
    id
    mission_name
  }
}
`

export const SingleMissionQuery = gql`
query ($id: ID!) {
  launch (id: $id) {
    id
    mission_name
    details
    links {
      flickr_images
      article_link
    }
  }
}
`
