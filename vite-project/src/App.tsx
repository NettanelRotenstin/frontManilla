import Nav from './componnents/Nav'
import BackGround from './componnents/BackGround'
import './Style/App.css'
import Form from './componnents/Form'


export default function App() {
    return (
        <div className='app'>
            <Nav />
            <BackGround />
            <Form />
        </div>
    )
}
