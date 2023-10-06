import Login from "../../components/organisms/login/Login"
import styleAuthView from "./auth-view.module.scss"

function AuthView() {
  return (
    <div className={styleAuthView["auth-container"]}>
      <Login />
    </div>

  )
}

export default AuthView