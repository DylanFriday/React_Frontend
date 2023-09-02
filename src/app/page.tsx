import Avater from "./components/Avater";
import Profile from "./components/Profile";
// import Greet from "./components/greet";
// import Helloworld from "./components/helloworld";

export default function Home() {
  return (
    <main>
      <div>
      {/* <Helloworld/>
      <Avater/> */}
      {/* <Greet message={"Sitt Hmue Eain"}/>
      <Greet message={"Good Evening"}/> */}
      <Profile isAdmin= {true}/>
    </div>
    </main>
  )
}
