import { Link, Routes } from "react-router-dom"
import Other from "./Other"
import { Route } from "react-router-dom"
import App from "./App"

const Router=()=>{
    return <>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/Other" element={<Other/>} />
    </Routes></>
}
export default Router