import Avater from "./components/Avater";
import Profile from "./components/Profile";
import Itemlist from "./components/ItemList";
import CustomButton from "./components/CustomButton";
import Counter from "./components/Counter";
import ListDynamic from "./components/ListDynamic";
import SpecificCounter from "./components/SpecificCounter";
// import Greet from "./components/greet";
// import Helloworld from "./components/helloworld";

export default function Home() {
  const items = ['one','two','three','four']
  return (
    <main>
      <div>
      {/* <Helloworld/>
      <Avater/> */}
      {/* <Greet message={"Sitt Hmue Eain"}/>
      <Greet message={"Good Evening"}/> */}
      {/* <Profile isAdmin= {true}/>
      <Itemlist items={items} />
      <CustomButton/> */}

      {/* <Counter />
      <ListDynamic/> */}
      <SpecificCounter initialValue={10}/>
    </div>
    </main>
  )
}
