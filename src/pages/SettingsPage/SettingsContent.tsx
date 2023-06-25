import { useState } from "react";
import { useUserContext } from "../../contexts/UserContext";
import { SubmitButton } from "../SignUp/SectionSignUp";
import dayjs from "dayjs";
import styled from "styled-components";
import ReactInputMask from "react-input-mask";
import InputWithMask from "../../components/InputWithMask";
import { DateField, DatePicker } from "@mui/x-date-pickers";



export default function SettingsContent() {
    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");
    const [birthday, setBirthday] = useState("");

    const [cep, setCep] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [numberAddress, setNumberAddress] = useState("");
    const [addressDetail, setAddressDetail] = useState("");

    const [disable, setDisable] = useState(false);
    const [textButton, setTextButton] = useState("Enviar");

    const { userData } = useUserContext();


    function cleanInputs() {
        setDisable(false);
        setTextButton("Enviar");
    }

    function handleSignIn(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formattedBirthday = dayjs(birthday, "YYYY-MM-DD").format("DD-MM-YYYY");
        console.log(birthday);
        console.log(formattedBirthday);
        console.log(name);



    }

    return (
        <>
            <PrivateContainer>
                <FormEnroll onSubmit={handleSignIn}>
                    <p>Dados pessoais</p>
                    <div>
                        <PrivateInput
                            className="setting-input"
                            disabled={disable}
                            type="text"
                            placeholder="Nome completo"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <RowInputs input1Width="57%" input2Width="20%">
                            <PrivateInput
                                className="setting-input"
                                disabled={disable}
                                type="text"
                                placeholder="Nickname"
                                value={nickname}
                                onChange={(e) => setNickname(e.target.value)}
                            />
                            <DateField
                                label="Data de Nascimento"
                                format="DD-MM-YYYY"
                                sx={{ height: "55px", width: "40%" }}
                                variant="standard"
                                value={birthday ? dayjs(birthday, "YYYY-MM-DD").toDate() : null}
                                onChange={(date: Date | null) =>
                                    setBirthday(date ? dayjs(date).format("YYYY-MM-DD") : "")
                                }
                            />

                        </RowInputs>
                    </div>
                    <p>Endereço</p>
                    <div>
                        <RowInputs input1Width="27%" input2Width="70%">
                            <PrivateInput
                                disabled={disable}
                                type="text"
                                placeholder="CEP"
                                value={cep}
                                onChange={(e) => setCep(e.target.value)}
                            />
                            <PrivateInput
                                disabled={disable}
                                type="text"
                                placeholder="Cidade"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </RowInputs>
                        <RowInputs input1Width="77%" input2Width="20%">
                            <PrivateInput
                                disabled={disable}
                                type="text"
                                placeholder="Logradouro"
                                value={street}
                                onChange={(e) => setStreet(e.target.value)}
                            />
                            <PrivateInput
                                disabled={disable}
                                type="text"
                                placeholder="UF"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                            />
                        </RowInputs>
                        <RowInputs input1Width="27%" input2Width="70%">
                            <PrivateInput
                                disabled={disable}
                                type="text"
                                placeholder="Número"
                                value={numberAddress}
                                onChange={(e) => setNumberAddress(e.target.value)}
                            />
                            <PrivateInput
                                disabled={disable}
                                type="text"
                                placeholder="Complemento"
                                value={addressDetail}
                                onChange={(e) => setAddressDetail(e.target.value)}
                            />
                        </RowInputs>
                    </div>
                    <SubmitButton disabled={disable}>{textButton}</SubmitButton>
                </FormEnroll>

            </PrivateContainer>
        </>
    );
}

const PrivateContainer = styled.div`
  padding: 0 50px;
  @media (max-width: 800px) {
    padding: 10px;
  }
`;

const FormEnroll = styled.form`
  width: 100%;
  padding: 60px;
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    padding: 0;
  }
`;

const PrivateInput = styled.input`
    width: 100%;
    height: 50px;
    border: 1px solid #757575;
    border-radius: 12px;
    padding-left: 15px;
    margin-bottom: 13px;
    &::placeholder {
      font-size: 12px;
      font-family: Mulish;
      color: #000000;
    }

`;

type RowInputsProps = {
    input1Width: string;
    input2Width: string;
  };

const RowInputs = styled.div<RowInputsProps>`
  display: flex;
  justify-content: space-between;
  input:nth-child(1) {
    width: ${(props) => props.input1Width};
  }
  input:nth-child(2) {
    width: ${(props) => props.input2Width};
  }
`;