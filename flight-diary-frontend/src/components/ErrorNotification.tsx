import { ErrorNotification } from "../types"

const Notification = ({ errorMessage }: ErrorNotification) => {
  if (!errorMessage) {
    return null
  }
  return <div style={{ color: 'red' }}>{errorMessage}</div>
}

export default Notification