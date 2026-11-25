import Students from './components/Students'
import { Button } from './components/ui/button'
import Count from './hooks/Count'

const App = () => {
    let name = "test"
    let age = 30

    return (
        <>
            <Button variant="destructive">Delete</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>

            <div>App</div>

            <h1>This is {name}</h1>

            <Students name={name} age={age} />

            <Count />
        </>
    )
}

export default App