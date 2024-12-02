import "./description.css";

export default function index({ data, selectedProject }) {
  const crop = (string, maxLength) => {
    return string.substring(0, maxLength);
  };

  return (
    <div className="descriptions">
      {data.map((project, i) => {
        const { title, description } = project;
        return (
          <div
            key={i}
            className="description"
            style={{
              clipPath:
                selectedProject == i ? "inset(0 0 0)" : "inset(50% 0 50%",
            }}
          >
            <p>{crop(title, 9)}</p>
            <p>{description}</p>
          </div>
        );
      })}
    </div>
  );
}
