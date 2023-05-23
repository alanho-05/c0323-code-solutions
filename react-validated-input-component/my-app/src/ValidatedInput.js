import { useState } from 'react';

export default function ValidatedInput() {
  const [password, setPassword] = useState('');

  let validPassLength = password.length >= 8;
  let validPass = validPassLength ? 'is-valid' : 'is-invalid';
  let errText =
    password.length === 0
      ? 'A password is required.'
      : 'Your password is too short.';

  return (
    <div className="form-group position-relative">
      <label htmlFor="password">Password</label>
      <input
        id="password"
        className={`form-control ${validPass}`}
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div
        style={{ backgroundColor: 'white', color: 'red' }}
        className="invalid-tooltip">
        {errText}
      </div>
    </div>
  );
}
