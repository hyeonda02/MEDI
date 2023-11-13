import ItemResult from "../listItem/item-result";

const ListResult = ({ data }) => {
    return (
    <>
        {data.map((item, id) => (
        <ItemResult
            key={item.id}
            id={id}
            type1={item.type1}
            title = {item.title}
            type2={item.type2}
            explain={item.explain}
        />
        ))}
    </>
    );
};

export default ListResult;