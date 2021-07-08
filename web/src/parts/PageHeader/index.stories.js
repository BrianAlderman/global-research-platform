import React from 'react'
import { Menu } from '../../components/Menu'
import { UserContext } from "services/user";


// const LoggedInContext = ({
//   children
// }) => {
//   const [user, setUser] = React.useState(null);

//   return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider> 
// }
// const context = {
//     user: {}
// }
// const useAppContext = () => {
//   // const onAddItem = product => {...}
//   return {
//     user: {}
// }

export default {
  component: Menu,
  title: 'Layouts/Header',
  decorators: [(storyFn) => {
    return (
      <UserContext.Provider value={{}}>
        {storyFn({})}
      </UserContext.Provider>
    )
  }],
}

const Template = args => <Menu {...args}/>

export const Default = Template.bind({})
Default.args = {}