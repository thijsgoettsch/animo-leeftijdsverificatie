import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Confetti from "react-confetti";

import {getCredentialById, issueCredential} from "../api/CredentialApi";

export interface Props {}

export const Credential: React.FC<Props> = () => {
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
  });
  const [credentialId, setCredentialId] = useState("");
  const [state, setState] = useState("");
  const con = localStorage.getItem("connectionId") ?? "";
  const credDef = window.localStorage.getItem("credentialDefinitionId") ?? "";

  const handleChange = (e: any) => {
    const value = e.target.value;
    setInfo({
      ...info,
      [e.target.name]: value,
    });
  };

  const onButtonClick = async (e: any) => {
    e.preventDefault();
    if (credentialId === "") {
      const cred = await issueCredential(con, credDef, info.firstName, info.lastName, info.dateOfBirth);
      setState(cred.data.state);
      setCredentialId(cred.data.id);
    }
  };

  useEffect(() => {
    const fetchCredential = async () => {
      if (credentialId !== "") {
        const con = await getCredentialById(credentialId);
        if (con.data.state === "done") clearInterval(timer);
        setState(con.data.state);
      }
    };
    const timer = setInterval(() => {
      fetchCredential();
    }, 2000);

    return () => clearTimeout(timer);
  }, [credentialId]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex p-6">
        <form className="flex-auto pl-6">
          <div className="flex flex-wrap items-baseline mb-4">
            <h1 className="w-full flex-none font-semibold mb-2.5">Animo Solutions</h1>
            <div className="text-4xl leading-7 font-bold text-animoblue">Let's issue a credential</div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-2/3">
              <label className="block text-gray-500 font-bold md:text-left" htmlFor="inline-first-name">
                First Name
              </label>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-100"
                id="inline-first-name"
                type="text"
                name="firstName"
                onChange={handleChange}
                value={info.firstName}
              />
              <label className="block text-gray-500 font-bold md:text-left" htmlFor="inline-last-name">
                Last Name
              </label>
              <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-100"
                  id="inline-last-name"
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                  value={info.lastName}
              />
              <label className="block text-gray-500 font-bold md:text-left" htmlFor="inline-date-of-birth">
                Date of Birth
              </label>
              <input
                className="mt-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-100"
                id="inline-date-of-birth"
                type="date"
                name="dateOfBirth"
                onChange={handleChange}
                value={info.dateOfBirth}
              />
            </div>
          </div>
          <div className="md:flex">
            <button
              className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${
                info.firstName === "" || info.lastName === "" || info.dateOfBirth === "" ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
              }`}
              disabled={info.firstName === "" || info.lastName === "" || info.dateOfBirth === "" }
              onClick={onButtonClick}
            >
              Send it
            </button>
            <Link to="/proof">
              <button
                className={`bg-blue-500 text-white font-bold mx-2 py-2 px-4 rounded ${
                  state !== "done" && state !== "credential-issued"
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:opacity-90"
                }`}
                disabled={state !== "done" && state !== "credential-issued"}
              >
                Next
              </button>
            </Link>
            {state && (
              <>
                <p className="text-sm text-gray-500 mx-2 py-2">
                  <strong>State:</strong> {state}
                </p>
              </>
            )}
            {state === "credential-issued" || state === "done" ? (
              <Confetti width={window.innerWidth} height={window.innerHeight} recycle={false} />
            ) : null}
          </div>
          <p className={state ? "text-sm text-gray-500 mx-4 py-2" : "invisible"}>
            Please accept your Animo Card in your wallet.
          </p>
        </form>
      </div>
    </div>
  );
};
