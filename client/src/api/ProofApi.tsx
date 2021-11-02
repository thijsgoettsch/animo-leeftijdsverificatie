import axios, { AxiosResponse } from "axios";

const baseUrl = process.env.REACT_APP_HOST_BACKEND ?? "http://localhost:5000";

const api = axios.create({ baseURL: baseUrl });

export const createProofRequest = (connectionId: string, credDefId: string): Promise<AxiosResponse> => {
  return api.post(`/proofs/${connectionId}/request-proof`, {
    proofRequest: {
      requestedAttributes: {
        additionalProp1: {
          restrictions: [
            {
              cred_def_id: credDefId,
            },
          ],
          name: "age",
        },
      },
      version: "1.0.0",
      name: "Animo Age Request",
    },
    comment: "Animo Solutions wants to know your age",
  });
};

export const getProofById = (proofId: string): Promise<AxiosResponse> => {
  return api.get(`/proofs/${proofId}`);
};
