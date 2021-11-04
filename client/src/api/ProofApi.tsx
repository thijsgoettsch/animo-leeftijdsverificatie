import axios, { AxiosResponse } from "axios";

const baseUrl = process.env.REACT_APP_HOST_BACKEND ?? "http://localhost:5000";

const api = axios.create({ baseURL: baseUrl });
const minAge = 18;

export const createProofRequest = (connectionId: string, credDefId: string): Promise<AxiosResponse> => {

  let today = new Date();
  let yyyy = today.getFullYear();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let minAgeDate = parseInt((yyyy - minAge) + mm + dd)

  return api.post(`/proofs/${connectionId}/request-proof`, {
    proofRequest: {
      requestedAttributes: {},
      requestedPredicates: {
        "Age": {
          name: "age",
          p_type: "<=",
          p_value: minAgeDate,
          restrictions: [{
            cred_def_id: credDefId
          }]
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
