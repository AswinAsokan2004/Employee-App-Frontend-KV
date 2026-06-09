import { useState } from "react";
import "./UploadProofModal.css";
import CloudUploadIcon from "./assets/cloud-upload-icon.png";
import UploadIcon from "./assets/upload-icon.png";

type Props = {
    onClose: () => void;
};

function UploadProofModal({ onClose }: Props) {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = e.target.files?.[0];

        if (file) {
            setSelectedFile(file);
        }
    };

    const handleUpload = () => {
        if (!selectedFile) {
            alert("Please select a file");
            return;
        }

        console.log("Uploading:", selectedFile);

        onClose();
    };

    return (
        <div className="upload-overlay">

            <div className="upload-modal">

                <div className="upload-header">

                    <h2>Upload Proof</h2>

                    <button
                        className="close-btn"
                        onClick={onClose}
                    >
                        ×
                    </button>

                </div>

                <div className="dropzone">

                    <img
                        src={CloudUploadIcon}
                        alt="upload"
                        className="cloud-icon"
                    />

                    <h3>
                        Drag & drop excel file here
                    </h3>

                    <span>Or</span>

                    <label
                        htmlFor="proof-file"
                        className="upload-file-btn"
                    >
                        <img
                            src={UploadIcon}
                            alt="upload"
                        />

                        Upload file
                    </label>

                    <input
                        id="proof-file"
                        type="file"
                        hidden
                        onChange={handleFileChange}
                    />
                    {selectedFile && (
                        <p className="selected-file">
                            {selectedFile.name}
                        </p>
                    )}

                </div>

                <div className="upload-actions">

                    <button
                        className="cancel-upload-btn"
                        onClick={onClose}
                    >
                        Cancel
                    </button>

                    <button
                        className="confirm-upload-btn"
                        onClick={handleUpload}
                    >
                        Upload
                    </button>

                </div>

            </div>

        </div>
    );
}

export default UploadProofModal;