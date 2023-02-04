import styled, { css } from "styled-components";

interface AccountProps {
  account: string;
  state: any;
  setState: any;
}

const Account = ({ account, state, setState }: AccountProps) => {
  console.log(state);
  return (
    <AccountContainer isOpen={state} onClick={() => setState(false)}>
      <AccountContents>
        {account}
        <AccountButtons>
          <AccountButton
            onClick={() => console.log(navigator.clipboard.writeText(account))}
          >
            복사하기
          </AccountButton>
          <AccountButton onClick={() => setState(false)}>닫기</AccountButton>
        </AccountButtons>
      </AccountContents>
    </AccountContainer>
  );
};

const AccountContents = styled.div`
  background: #fff;
  width: 90vw;
  padding: 20px 24px;
  border-radius: 8px;
  font-family: "Noto Sans KR";
  font-size: 14px;
  opacity: 0;
  margin-top: 50px;
  transition: 0.3s;
`;

const AccountButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 16px;
`;
const AccountButton = styled.button`
  all: unset;
  font-weight: 700;
  flex: 1;
  height: 2.8em;
  font-size: 12px;
  border-radius: 8px;

  &:first-child {
    background: #999;
    color: #fff;
  }
  &:last-child {
    border: 2px solid #999;
    background: #fff;
  }
`;

const AccountContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -100;
  opacity: 0;
  visibilty: hidden;
  ${(props) =>
    props.isOpen &&
    css`
      z-index: 100;
      opacity: 1;
      visibilty: visible;
      ${AccountContents} {
        opacity: 1;
        margin-top: 0px;
      }
    `}
`;

export default Account;
