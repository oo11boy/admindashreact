import Home from "./Pages/Home/Home"
import NewUser from "./Pages/Users/NewUser/NewUser"
import UserList from "./Pages/Users/UserList/UserList"
import ListProduct from "./Pages/Products/ListProduct/ListProduct"
import AddProduct from "./Pages/Products/AddProduct/AddProduct"
import ListPost from "./Pages/Posts/ListPost/ListPost"
import AddPost from "./Pages/Posts/AddPost/AddPost"
import Mail from "./Pages/Mail/Mail"
import PriRoute from "./Components/PriRoute"
import LoginPannel from "./Pages/LoginPannel/LoginPannel"
let routes=[
   {
      path:'/LoginPannel' , element:<LoginPannel />
   },
   
    {
   path:'/' , element:<PriRoute><Home /></PriRoute>
},
{
    path:'/Users' , element:<PriRoute><UserList /></PriRoute>
 },
 {
   path:'/Mail' , element:<PriRoute><Mail /></PriRoute>
},
 {
    path:'/Users/NewUsers' , element:<PriRoute><NewUser /></PriRoute>
 },
 {
    path:'/Products' , element:<PriRoute><ListProduct /></PriRoute>
 },
 {
    path:'/Products/AddProduct' , element:<PriRoute><AddProduct /></PriRoute>
 } ,
 {
   path:'/Posts' , element:<PriRoute><ListPost /></PriRoute>
},
{
   path:'/Posts/AddPost' , element:<PriRoute><AddPost /></PriRoute>
}
]

export default routes
