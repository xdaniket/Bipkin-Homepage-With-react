import { FeaturesDisc } from "./FeaturesDisc";
function Features1() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginTop: "85px",
        marginRight: "85px",
      }}
      className="row content"
    >
      <div className="col-md-5" data-aos="fade-right" data-aos-delay="100">
        <img
          style={{ width: "70%" }}
          src="src/features/features-1.png"
          className="img-fluid"
          alt=""
        />
      </div>
      <FeaturesDisc />
    </div>
  );
}
export default Features1;
