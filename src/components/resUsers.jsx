import { CompArticle } from './article'
import resUser from '../Json/users.json'

export function ResUsers ({ isPacked }) {
  const a = resUser.user.map(users => {
    return (
      <>
        {users.isPacked && '✔' && (
          <CompArticle
            key={users.id}
            img={users.image}
            name={users.name}
            text={users.text}
          />
        )}
      </>
    )
  })

  return <>{a}</>
}
