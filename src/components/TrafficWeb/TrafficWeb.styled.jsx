import styled from "styled-components";

export const StyledTrafficWeb = styled.div`
    padding: 48px;
    

`
export const TrafficWebList = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 48px;

    @media  (max-width: 991px) {
        flex-direction: column;
    }
`

export const TrafficWebItem = styled.div`
    padding: 0 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media  (max-width: 991px) {
        margin: 32px 0;
    }
`
export const TrafficNumber = styled.div`
    margin-bottom: 12px;
    font-size: 3.4rem;
    font-weight: 700;
    line-height: 3.4rem;
    color : ${({theme}) => theme.color.text};
`
export const TrafficLabel = styled.div`
    font-size: 1.2rem;
    line-height: 1.2rem;
    margin-bottom: 12px;
    color : ${({theme}) => theme.color.subText};
    font-weight: 300;
    letter-spacing: 2px;
`
