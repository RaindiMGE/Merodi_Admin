import React, { useState } from "react";
import styles from "./ChangePassword.module.scss";

interface ChangePasswordProps {
  userId: string;
}

const ChangePassword: React.FC<ChangePasswordProps> = ({ userId }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/change-password", {
        method: "POST",
        headers: { "Content-Type": "application" },
        body: JSON.stringify({ userId, password }),
      });
      setError(response.ok ? null : "Password can`t be changed");
    } catch {
      setError("error");
    }
  };

  return (
    <div className={styles.changePassword}>
      <h2 className={styles.changeMainPassword}>Change Password</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            className={styles.passwordHolder}
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <label>
          <input
            className={styles.confirmPassword}
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <br />
        <div className={styles.endButtons}>
          <button className={styles.cancel} type="button">
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

export default ChangePassword;