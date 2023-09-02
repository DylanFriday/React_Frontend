export default function Profile({isAdmin} : any) {
  if (isAdmin) {
    return (<div>Admin</div>);
  } else {
    return (<div>User</div>);
  }
}
