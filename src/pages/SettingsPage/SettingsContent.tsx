import { useEffect, useState } from "react";
import { SubmitButton } from "../SignUp/SectionSignUp";
import dayjs, { Dayjs } from "dayjs";
import styled from "styled-components";
import InputWithMask from "../../components/InputWithMask";
import { DateField } from "@mui/x-date-pickers";
import { getEnrollment, saveEnrollment } from "../../services/enrollmentApi";
import useToken from "../../hooks/useToken";
import { CreateEnroll } from "../../protocols/Enrollment";
import { toast } from "react-toastify";
import { getAddressByCep } from "../../services/cepApi";



export default function SettingsContent() {
    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");
    const [birthday, setBirthday] = useState<Dayjs | null>(null);

    const [cep, setCep] = useState("");
    const [street, setStreet] = useState("");
    const [neighbourhood, setNeighbourhood] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [numberAddress, setNumberAddress] = useState("");
    const [addressDetail, setAddressDetail] = useState("");

    const [disable, setDisable] = useState(false);
    const [textButton, setTextButton] = useState("Enviar");

    const token = useToken();


    useEffect(() => {
        getEnrollment(token)
            .then((response) => {
                const newBirthday = dayjs(response.birthday, 'YYYY-MM-DD');
                setBirthday(newBirthday);
                setName(response.name);
                setNickname(response.nickname);
                setCep(response.addresses ? response.addresses[0].cep : "");
                setStreet(response.addresses ? response.addresses[0].street : "");
                setNeighbourhood(response.addresses ? response.addresses[0].neighbourhood : "");
                setCity(response.addresses ? response.addresses[0].city : "");
                setState(response.addresses ? response.addresses[0].state : "");
                setNumberAddress(response.addresses ? response.addresses[0].number : "");
                setAddressDetail(response.addresses ? response.addresses[0].addressDetail : "");
            })
            .catch((err) => {
                console.log(err);

            })
    }, []);

    function handleCepChange() {
        getAddressByCep(cep)
            .then((response) => {
                console.log(response);
                if (!response.cep) {
                    toast.error("CEP não encontrado");
                } else {
                    setStreet(response.logradouro);
                    setNeighbourhood(response.bairro);
                    setCity(response.localidade);
                    setState(response.uf);
                }

            })
            .catch((err) => {
                console.log(err);

            })

    }

    async function handleEnrollment(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formattedBirthday = dayjs(birthday, "YYYY-MM-DD").toDate().toISOString();

        const body: CreateEnroll = {
            name,
            nickname,
            birthday: formattedBirthday,
            addresses:
            {
                cep,
                street,
                city,
                state,
                number: numberAddress,
                neighbourhood,
                addressDetail
            }
        };
        try {
            setDisable(true);
            setTextButton("Enviando");
            await saveEnrollment(body, token);
            toast.success("Dados atualizados com sucesso");
            setDisable(false);
            setTextButton("Enviar");

        } catch (error) {
            toast.error("Não foi possível cadastrar os dados");
            console.log(error);
            setDisable(false);
            setTextButton("Enviar");
        }
    }

    function handleStateChange(e: React.ChangeEvent<HTMLInputElement>) {
        const inputValue = e.target.value.toUpperCase();
        setState(inputValue);
    }

    return (
        <>
            <PrivateContainer>
                <FormEnroll onSubmit={handleEnrollment}>
                    <p>Dados pessoais</p>
                    <div>
                        <PrivateInput
                            required
                            disabled={disable}
                            type="text"
                            placeholder="Nome completo"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <RowInputs input1Width="52%" input2Width="25%">
                            <PrivateInput
                                required
                                disabled={disable}
                                type="text"
                                placeholder="Nickname"
                                value={nickname}
                                onChange={(e) => setNickname(e.target.value)}
                            />
                            <DateField
                                required
                                label="Data de Nascimento"
                                format="DD-MM-YYYY"
                                sx={{ height: "55px", width: "45%" }}
                                variant="standard"
                                value={birthday}
                                onChange={(e) => setBirthday(e)}
                            />
                        </RowInputs>
                    </div>
                    <p>Endereço</p>
                    <div>
                        <RowInputs input1Width="27%" input2Width="35%" input3Width="32%">
                            <CustomInput
                                required
                                mask="99999-999"
                                disabled={disable}
                                value={cep}
                                onChange={(e) => setCep(e.target.value)}
                                onBlur={handleCepChange}
                                placeholder="CEP"
                            />
                            <PrivateInput
                                required
                                disabled={disable}
                                type="text"
                                placeholder="Bairro"
                                value={neighbourhood}
                                onChange={(e) => setNeighbourhood(e.target.value)}
                            />

                            <PrivateInput
                                required
                                disabled={disable}
                                type="text"
                                placeholder="Cidade"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />

                        </RowInputs>
                        <RowInputs input1Width="77%" input2Width="20%">
                            <PrivateInput
                                required
                                disabled={disable}
                                type="text"
                                placeholder="Logradouro"
                                value={street}
                                onChange={(e) => setStreet(e.target.value)}
                            />
                            <CustomInput
                                required
                                mask="aa"
                                disabled={disable}
                                placeholder="UF"
                                value={state}
                                onChange={handleStateChange}
                            />
                        </RowInputs>
                        <RowInputs input1Width="27%" input2Width="70%">
                            <PrivateInput
                                required
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
    input:invalid {
    border-color: red;
    }
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
    input2Width?: string;
    input3Width?: string;
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
    input:nth-child(3) {
    width: ${(props) => props.input3Width};
    }
    
`;

const CustomInput = styled(InputWithMask)`
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
