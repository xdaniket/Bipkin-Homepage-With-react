import { FeaturesDisc } from "./FeaturesDisc";

export function Features2() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginTop: "60px",
        marginLeft: "200px",
      }}
      className="row content"
    >
      <FeaturesDisc />
      <div className="col-md-5" data-aos="fade-right" data-aos-delay="100">
        <img
          style={{ width: "70%" }}
          src="src/features/features-2.png"
          className="img-fluid"
          alt=""
        />
      </div>
    </div>
  );
}
