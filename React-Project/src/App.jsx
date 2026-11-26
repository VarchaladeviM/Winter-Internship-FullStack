import Students from './components/Students'
import { Button } from './components/ui/button'
import Count from './hooks/Count'
import Register from './hooks/Register'
import Users from './hooks/Users'
const App = () => {

    let name = 'Varchala'
    let age = 19

    return (
        <>
            <Users />
            <div>

                <Button variant="default">Default</Button>

                <Button variant="destructive">Delete</Button>

                <Button variant="outline">Outline</Button>

                <Button variant="secondary">Secondary</Button>

                <Button variant="ghost">Ghost</Button>
                <Register />

                <Count />

                <h1>This is {name}</h1>

                <p>Age: {age}</p>

                <Students name={name} age={age} />

                <Button>Click Me</Button>

            </div>
        </>
    )
}

export default App