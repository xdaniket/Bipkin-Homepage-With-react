import { ServiceText } from "./ServiceText";

function Services() {
  return (
    <div
      style={{
        marginTop: "70px",
        background: "#2d405f",
        color: "white",
        padding: "26px 0px",
      }}
      className="section-title"
    >
      <h2 style={{ color: "white" }}>Services</h2>
      <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate.
        <br /> Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste
        officiis commodi quidem hic quas.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "80px",
        }}
      >
        <ServiceText />
        <ServiceText />
        <ServiceText />
        <ServiceText />
      </div>
    </div>
  );
}
export default Services;
