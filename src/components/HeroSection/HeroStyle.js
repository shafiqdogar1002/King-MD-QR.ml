import styled from 'styled-components';
import _default from '../../themes/default';

export const HeroContainer = styled.div`
    background: ${_default.colors.background1};
    display: flex;
    justify-content: center;
    position: relative;
    padding: 66px 30px;
    
    @media (max-width: 960px) {
        padding: 66px 16px;
    }
    @media (max-width: 640) {
        padding: 32px 16px;
    }
    z-index: 1;
`;

export const HeroBg = styled.div` 
    position: absolute;
    display: flex;
    justify-content: end;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-width: 1250px;
    overflow: hidden;
    padding: 0 30px;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    
    @media (max-width: 960px) {
        justify-content: center;
        padding: 0 0px;
    }
`;

export const HeroInnerContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1000px;

    @media (max-width: 960px) {
        flex-direction: column;
    }
`
export const HeroLeftContainer = styled.div`
    width: 100%;
    order: 1;
    @media (max-width: 960px) {
        order: 2;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    @media (max-width: 640px) {
        order: 2;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const HeroRightContainer = styled.div`
    width: 100%;
    display: flex;
    order: 2;
    justify-content: end;
    @media (max-width: 960px) {
        order: 1;
        justify-content: center;
        align-items: center;
        margin-bottom: 80px;
    }
    
    @media (max-width: 640px) {
        margin-bottom: 30px;
    }
`

export const Img = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: 400px;
    border-radius: 50%;
    border: 4px solid ${_default.colors.primary1};

    @media (max-width: 768px) {
        max-width: 400px;
        max-height: 400px;
    }
    
    @media (max-width: 640px) {
        max-width: 280px;
        max-height: 280px;
    }
`;

export const Title = styled.div`
    font-weight: 800;
    font-size: 48px;
    color: ${_default.colors.text};
    line-height: 68px;
    margin-bottom: 32px;
    @media (max-width: 960px) {
        text-align: center;
    } 

    @media (max-width: 640px) {
        font-size: 44px;
        line-height: 60px;
        margin-bottom: 28px;
    } 
`;

export const SubTitle= styled.div`
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 42px;
    color: rgba(255, 255, 255, 0.5);
    
    @media (max-width: 960px) {
        text-align: center;
    }

    
    @media (max-width: 640px) {
        font-size: 22px;
    } 
`;

export const ResumeButton= styled.div`
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color: ${_default.colors.text1};
    border-radius: 50px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: linear-gradient(145deg, #854CE6, #B67AFF);
    box-shadow:  20px 20px 60px #1F2634,
    -20px -20px 60px #1F2634;
    &:hover {
    font-size: 22px;
    width: 100%;
    max-width: 320px;
    padding: 18px 0;
    }        

`;