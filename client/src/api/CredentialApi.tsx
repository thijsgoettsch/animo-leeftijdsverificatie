import axios, { AxiosResponse } from "axios";

const baseUrl = process.env.REACT_APP_HOST_BACKEND ?? "http://localhost:5000";

const api = axios.create({ baseURL: baseUrl });

export const issueCredential = async (
  connectionId: string,
  credDefId: string,
  firstName: string,
  lastName: string,
  age: number
): Promise<AxiosResponse> => {
  return api.post(`/credentials/${connectionId}/offer-credential`, {
    comment: "Here is your Animo Employee Card",
    credentialDefinitionId: credDefId,
    preview: {
      "@type": "https://didcomm.org/issue-credential/1.0/credential-preview",
      attributes: [
        {
          name: "firstName",
          value: firstName,
        },
        {
          name: "lastName",
          value: lastName,
        },
        {
          name: "age",
          value: age,
        },
      ],
    },
  });
};

export const getCredentialById = (credentialId: string): Promise<AxiosResponse> => {
  return api.get(`/credentials/${credentialId}`);
};

export const createCredentialDefinition = async () => {
  const data = await api.post(`/credential-defintions/`, {
    tag: "Age-Verification",
    supportRevocation: false,
    schemaId: "54mekdZtq17YwSifXaJE1T:2:Age-Verification:1.0.0",
  });

  return data.data.id;
};
