import NavBar from '../../components/NavBar';
import Notifications from '../../components/notifications'

export default function Servidor() {
  return (
    <>
      <NavBar elements={[1, 1, 0, 0]} />
      <Notifications />
    </>
  )
}