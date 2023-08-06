import Button from './Button'
import { useLocation } from 'react-router-dom'

export default function Header({ onAdd, showAdd }) {
    const location = useLocation()

    return (
        <div>
            <h3 className='text-center my-3 header'>Todos List
                {location.pathname === '/' && <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />}   </h3>
        </div>
    )
}



