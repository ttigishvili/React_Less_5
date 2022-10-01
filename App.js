import { Props } from './Props'
import {style} from './App.css'




function App() {


  const users = [
    {
      id: 1,
      name: 'jhon',
      age: 19
    },
    {
      id: 2,
      name: 'Mark',
      age: 13
    },
    {
      id: 3,
      name: 'Nika',
      age: 14
    },
    {
      id: 4,
      name: 'Luka',
      age: 23
    },
    {
      id: 5,
      name: 'Alex',
      age: 33
    },
    {
      id: 6,
      name: 'Peter',
      age: 54
    },
    {
      id: 7,
      name: 'Luka',
      age: 22
    },
    {
      id: 8,
      name: 'Max',
      age: 34
    },
    {
      id: 9,
      name: 'Claus',
      age: 20
    },
    {
      id: 10,
      name: 'Tomy',
      age: 14
    }
  ]

  return (
    <div className='App'>
      <Props users={users}/>

    </div>
  )
}

export default App
