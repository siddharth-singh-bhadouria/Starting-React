import Button from './Button'

export default function header({ onAdd, showAdd }) {
    return (
        <div>
            <h3 className='text-center my-3 header'>Todos List
                <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} /></h3>
        </div>
    )
}



