import {StudentContext} from '@/StudentContext'
import {useContext} from 'react'

const Greeting = () => {
    let StudentName = useContext(StudentContext)
  return (
    <div>
      <p> Greeting, {StudentName} !</p>
    </div>
  )
}

export default Greeting
