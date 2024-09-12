import React, { useState } from "react";
import styles from "./addSongs.module.scss";
import UploadButton from "../Buttons/UploadButton/UploadButton";

interface AddSongsProps {
  userId: string;
}

const AddSongs: React.FC<AddSongsProps> = ({ userId }) => {
  const [songTitle, setSongTitle] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submit button clicked");
    try {
      const response = await fetch("/api/add-song", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, songTitle }),
      });
      if (response.ok) {
        setError(null);
        setSongTitle(""); 
      } else {
        setError("Can't be added");
      }
    } catch {
      setError("Error");
    }
  };

  const handleCancel = () => {
    console.log("Cancel button clicked");
    setSongTitle("");
    setError(null);
  };

  return (
    <div className={styles.mainDiv}>
      <h2 className={styles.addSong}>Add Song</h2>
      <form onSubmit={handleSubmit}>
        <label className={styles.labelInput}>
          <input
            className={styles.inputAddSongs}
            type="text"
            placeholder="Song Name"
            value={songTitle}
            onChange={(e) => setSongTitle(e.target.value)}
          />
        </label>
        
        <UploadButton />

        <div className={styles.twoButtons}>
          <button className={styles.cancel} type="button" onClick={handleCancel}>
            Cancel
          </button>
          <button className={styles.submit} type="submit">
            Submit
          </button>
        </div>

        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default AddSongs;
