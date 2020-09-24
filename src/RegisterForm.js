import React, { useEffect, useState } from "react";
import "./RegisterForm.css";

function RegisterForm({ onClose }) {
  const [stage, setStage] = useState("input"); // 'input' | 'terms-of-use' | 'done'
  const [isValidInput, setIsValidInput] = useState(false);
  const [isReadyToRegister, setIsReadyToRegister] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const affiliationOptions = ["University of Chicago"];

  useEffect(() => {
    setIsValidInput(firstName !== "" && lastName !== "" && affiliation !== "");
  }, [firstName, lastName, affiliation]);

  const stageInput = (
    <div>
      Your account does not have access to PCDC data.
      <br />
      Please register to gain access.
      <label>
        <span>First name</span>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label>
        <span>Last name</span>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <label>
        <span>Affiliaton</span>
        <select
          value={affiliation}
          onChange={(e) => setAffiliation(e.target.value)}
        >
          <option value="">Select...</option>
          {affiliationOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  );

  const stageTermsOfUse = (
    <div>
      To complete your registration,
      <br />
      please read the following Terms of Use:
      <div className="terms-of-use">
        <h1>Terms of Use</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus
        scelerisque erat, a condimentum ipsum molestie sed. Quisque id laoreet
        dolor. Sed a risus nisl. Morbi ultricies nunc orci, ac varius nisl
        tincidunt eu. Aenean ornare non lectus eu porttitor. Phasellus efficitur
        magna sed orci luctus, lobortis consequat tellus porttitor. Duis tempor
        sem eget diam venenatis, a semper justo porttitor. Aliquam erat
        volutpat. Sed rutrum mi sit amet lacus sodales, sed tempus est aliquet.
        Aenean consectetur diam risus, quis sagittis erat auctor et. Phasellus
        tincidunt tortor quis rhoncus ornare. Nullam diam urna, aliquet ac
        vestibulum eu, pretium quis ipsum. Cras quis interdum ligula. Nulla
        lobortis blandit dolor, in bibendum lacus. Donec vel neque nec dui
        congue luctus volutpat non velit.
        <br />
        Proin cursus euismod justo vitae rutrum. Curabitur quis facilisis orci.
        Nunc vel lobortis urna, sed suscipit metus. Quisque sollicitudin magna
        nec lectus ultricies, et interdum arcu hendrerit. Aliquam erat volutpat.
        Mauris mollis purus sed arcu facilisis, sit amet pretium ipsum
        hendrerit. Vivamus ultrices convallis ipsum, sed luctus ante interdum
        ut. Curabitur euismod lorem augue, a fermentum enim venenatis quis.
        Quisque consequat dui vel arcu tristique venenatis. In lectus sapien,
        semper et rutrum ut, vehicula et tellus. Donec porttitor id odio vitae
        consequat. Nam mattis elementum ante vitae porta.
      </div>
      <input
        type="checkbox"
        checked={isReadyToRegister}
        onChange={(e) => setIsReadyToRegister(e.target.checked)}
      />
      I have read and agree to the Terms of Service
    </div>
  );

  const stageDone = (
    <div>
      <h1>Thank you for registering!</h1>
      <p>
        You now have access to PCDC data based on your institutional
        affiliation.
      </p>
      <p>
        Please subscribe to the quarterly PCDC newsletter to get the latest
        updates on the PCDC project and more.
      </p>
    </div>
  );

  const buttonGroup = (
    <div>
      <button type="button" onClick={onClose}>
        Back to page
      </button>
      {stage === "input" && (
        <button
          disabled={!isValidInput}
          onClick={() => setStage("terms-of-use")}
        >
          Proceed
        </button>
      )}
      {stage === "terms-of-use" && (
        <button
          disabled={!isReadyToRegister}
          onClick={() => {
            const userInput = { firstName, lastName, affiliation };
            Promise.resolve(JSON.stringify(userInput))
              .then(console.log)
              .catch(console.errer)
              .finally(() => setStage("done"));
          }}
        >
          Register
        </button>
      )}
    </div>
  );

  return (
    <form className="register-form">
      {stage === "input" && stageInput}
      {stage === "terms-of-use" && stageTermsOfUse}
      {stage === "done" && stageDone}
      {buttonGroup}
    </form>
  );
}

export default RegisterForm;
