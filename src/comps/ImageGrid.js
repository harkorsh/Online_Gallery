import React from "react";
import useFirestore from "../hooks/useFirestore";
import { projectFirestore, projectStorage } from "../firebase/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");

  // Function to handle image deletion
  const deleteImage = async (id, url) => {
    try {
      // Delete the image document from Firestore
      await projectFirestore.collection("images").doc(id).delete();

      // Delete the image file from Firebase Storage
      const storageRef = projectStorage.refFromURL(url);
      await storageRef.delete();
    } catch (error) {
      console.error("Error deleting image: ", error);
    }
  };

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <div
            className="img-wrap"
            key={doc.id}
            onClick={() => setSelectedImg(doc.url)}
          >
            <img src={doc.url} alt="Just Uploaded" />
            <FontAwesomeIcon
              icon={faTrash}
              className="trash-icon"
              onClick={(e) => {
                e.stopPropagation();
                deleteImage(doc.id, doc.url);
              }}
            />
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
