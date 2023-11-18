import ItemResult from "../listItem/item-result";
import styled from "styled-components";
import colors from "../../styles/colors";

const NoItem = styled.div`
    width: 100%;
    border-radius: 0.8vw;
    display: flex;
    align-items: center;
    padding: 1vw 1vw 1vw 0;
    margin-top: -1vw;
    background-color: ${colors.subBlue};
    flex-direction: row;
    justify-content: space-between;
`;

const NoItemP = styled.p`
    
    color: ${colors.black};
    font-size: 1vw;

`

const ListResult = ({ data }) => {
    if (data.length !== 0) {
        return (
            <>
                {data.map((item, id) => (
                    <ItemResult
                        key={item.id}
                        id={id}
                        type1={item.type1}
                        title={item.title}
                        type2={item.type2}
                        explain={item.explain}
                    />
                ))}
            </>
        );
    } else {
        // You can provide an alternative JSX here if the data array is empty
        return (
            <NoItem>
                <div style={{ fontWeight: "bold", padding: "0 2vw", backgroundColor: "white", width: "60vw", height: "12vw", borderRadius: "1vw", marginLeft: '0.5vw'}}>
                <NoItemP style={{ fontWeight: "bold", fontSize: "1.5vw", color:"green"}}>
                    검색하신 영양제들 사이의 상호작용은 확인되지 않아 복용이 가능하실 것으로 보여요!
                </NoItemP>
                <NoItemP style={{ lineHeight:"1.5vw"}}>
                다만, 건강기능식품(영양제)의 경우 제조사나 제품마다 성분이나 추출물 등이 다르며, <br/> 
                개인에 따라서는 효과와 부작용에는 차이가 있을 수 있어 너무 과량의 영양제 섭취 시 오히려 신장이나 간에 무리를 줄 수 있어요.<br/>
                따라서, 보다 정확한 복약 상담은 현재 약을 처방 받는 의료기관에 문의하시어 복약 지도를 받아보시는 걸 권유드릴게요.<br/> 
                또한, 복용법은 제조사의 권장 용량과 용법을 숙지하여 지켜주시면 좋아요. <br/>
                </NoItemP>

                </div>
            </NoItem>
        )
    }
};

export default ListResult;