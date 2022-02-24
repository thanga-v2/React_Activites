import Pet from './pet';

// below is going to pull the pets out of the props
const Results = ({pets}) => {
    return(
        <div className='search'>
            {
                !pets.length ? (
                    <h2>No pets found</h2>
                ) : (
                    pets.map( pet => (
                        <Pet 
                        animal = {pet.animal}
                        breed = { pet.breed}
                        name = {pet.name}
                        key={pet.id}
                        images = {pet.images}
                        location = {`${pet.city},${pet.state}`}
                        id={pet.id}
                        />
                    ))

                )
            }
        </div>
    )
}


export default Results;