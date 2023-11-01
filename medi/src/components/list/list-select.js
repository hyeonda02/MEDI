import ItemSelect from "../listItem/item-select";

const ListSelect = ({data}) => {
    return (
        <>
            {data.map((item, index) => {
                return (
                    <ItemSelect
                        key = {index}
                        id = {item.id}
                        img={require(`../../assets/${item.image}`)}
                        type = {item.type}
                        explain = {item.explain}
                    />
                )
            })}
        </>
    )
}

export default ListSelect;