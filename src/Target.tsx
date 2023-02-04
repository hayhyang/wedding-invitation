import { useState } from "react";
import styled from "styled-components";

import Account from "./Account";

const Target = ({ account, name, role, phone }: any) => {
  const [state, setState] = useState(false);
  const onClickAccount = () => {
    setState(true);
  };
  return (
    <Container>
      {role}&nbsp;&nbsp;<strong>{name}</strong>
      <div className="message button">
        <a href={`tel:${phone}`}>📞</a>
      </div>
      <div className="message button">
        <a href={`sms:${phone}`}>✉️</a>
      </div>
      <div className="account button" onClick={onClickAccount}>
        계좌번호
      </div>
      <Account account={account} state={state} setState={setState} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 2em;
  .button {
    font-size: 20px;
    margin-left: 16px;
    a {
      text-decoration: none;
    }
  }
  .account {
    font-size: 10px;
    padding: 0em 0.8em;
    height: 2em;
    line-height: 2em;
    background: #999;
    color: white;
    border-radius: 20px;
  }
`;

export default Target;
