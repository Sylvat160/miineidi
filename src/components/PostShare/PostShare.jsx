import React, { useState, useRef } from "react";
import ProfileImage from "../../img/profileImg.jpg";
import Anon from "../../img/anon.jpg";
import { ethers } from "ethers";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { create, urlSource } from "ipfs-http-client";
const abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_id",
        type: "string",
      },
      {
        internalType: "string",
        name: "_optionalData",
        type: "string",
      },
    ],
    name: "addOptionalData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_id",
        type: "string",
      },
      {
        internalType: "string",
        name: "_owner",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_surface",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_location",
        type: "string",
      },
      {
        internalType: "string[]",
        name: "_documents",
        type: "string[]",
      },
    ],
    name: "addParcelle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "parcelleCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "parcelleInfo",
    outputs: [
      {
        internalType: "string",
        name: "id",
        type: "string",
      },
      {
        internalType: "string",
        name: "owner",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "surface",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "location",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_id",
        type: "string",
      },
      {
        internalType: "string",
        name: "_newOwner",
        type: "string",
      },
    ],
    name: "updateOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const contractAddress = "0x49Ca56d28E4461979e54e57AB7E6df84e86338ab";

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(contractAddress, abi, provider);

  

  const [id, setId] = useState("");
  const [owner, setOwner] = useState(
    "0x452A12ad65C41D9A88f2515Af6c6F364060D4CE8"
  );
  const [surface, setSurface] = useState(0);
  const [location, setLocation] = useState("");
  const [documents, setDocuments] = useState([]);
  const [optionalData, setOptionalData] = useState([]);
  const [message, setMessage] = useState("");

  const countParcelle = async () => {
    const count = await contract.parcelleCount();
    alert(count);
    console.log(count);
    // return count;
  };

  // Fonction pour ajouter une parcelle
  const addParcelle = async () => {
    // Créer une instance du contrat
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    let signer = provider.getSigner(
      "0x452A12ad65C41D9A88f2515Af6c6F364060D4CE8"
    );
    const contract = new ethers.Contract(contractAddress, abi, signer);
    // console.log(signer);

    if (typeof window.ethereum !== "undefined") {
      await window.ethereum.request({ method: "eth_requestAccounts" });

      // Appeler la fonction `addParcelle` du contrat
      try {
        const tx = await contract.addParcelle(
          id,
          owner,
          surface,
          location,
          documents
        );
        await tx.wait();
        setMessage("Parcelle ajoutée avec succès");
        

        // Appeler la fonction `addOptionalData` du contrat
      } catch (err) {
        console.error(err);
        setMessage("Erreur lors de l'ajout de la parcelle");
      }
      countParcelle();
    } else {
      console.log("no metamask install");
    }
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
  return (
    <div className="PostShare">
      <img src={``} alt="anon" />
      <div>
        <input
          type="text"
          placeholder="Entrez une localisation"
          onChange={(e) => setLocation(e.target.value)}
        />
        <div className="postOptions">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>{" "}
          {/* <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>{" "} */}
          {/* <div className="option" style={{ color: "var(--shedule)" }}>
            <UilSchedule />
            Shedule
          </div> */}
          <button className="button ps-button" onClick={addParcelle}>
            Partager
          </button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={image.image} alt="" />
          </div>
        )}
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default PostShare;
