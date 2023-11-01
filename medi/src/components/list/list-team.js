import ItemTeam from "../listItem/item-team";


const ListTeam = ({data}) => {
    return (
        <>
            {data.map((item, index) => {
                return (
                    <ItemTeam
                        key = {index}
                        id = {item.id}
                        name = {item.name}
                        number = {item.number}
                        track = {item.track}
                        role = {item.role}
                        git = {item.git}
                        img = {require(`../../assets/${item.image}`)}
                    />
                )
            })}
        </>
    )
}

export default ListTeam;