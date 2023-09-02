export default function Profile({isAdmin} : any) {
    
    //method 1
//   if (isAdmin) {
//     return (<div>Admin</div>);
//   } else {
//     return (<div>User</div>);
//   }

    //method 2
    return (
        <div>
            {
                isAdmin? <div>Admin</div> : <div>User</div>
            }
        </div>
    )
}
