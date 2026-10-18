import { Button } from './ui/Button'
import { useLikes } from '../context/LikesContext'

export function LikeButton() {
  const { likes, addLike } = useLikes()

  return (
    <Button
      onClick={addLike}
      aria-label={`Like (${likes} likes)`}
      variant="primary"
      className="w-full"
    >
      ♥ Like ({likes})
    </Button>
  )
}
