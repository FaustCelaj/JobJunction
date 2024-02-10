const RoleSelection = ({ role, setRole }) => {
  return (
    <div className="role-selection">
      <label>
        <input
          type="radio"
          name="role"
          value="jobseeker"
          checked={role === "jobseeker"}
          onChange={(e) => setRole(e.target.value)}
        />
        Job Seeker
      </label>
      <label>
        <input
          type="radio"
          name="role"
          value="company"
          checked={role === "company"}
          onChange={(e) => setRole(e.target.value)}
        />
        Company
      </label>
    </div>
  );
};

export default RoleSelection;
