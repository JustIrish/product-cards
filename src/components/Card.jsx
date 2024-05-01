import { Button } from "@/components/ui/button";
import { Plus, Minus, Search } from "lucide-react";
import shamp from "../img/shampoo.jpg";

function Card() {
  return (
    <div className="card-wrapper">
      <div className="img-wrap">
        <img
          className="image"
          src={shamp}
          alt="shampoo"
          width="400"
          loading="lazy"
        />
        <div className="btn-pos">
          {" "}
          <Button variant="search" size="icon">
            <Search size={18} />
          </Button>
        </div>
        <div className="circle-text-pos">
          <svg
            className="circle-text"
            width="250"
            height="250"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="rotate(-60,145,145)">
              <path id="textPath" d="M125,25 a90,90 0 1,1 0,160" />
              <text>
                <textPath href="#textPath" startOffset="12">
                  <tspan dy=".4em">
                    Refreshing scent of warm woods and fruits - From natural
                    ingredients
                  </tspan>
                </textPath>
              </text>
            </g>
          </svg>
        </div>
      </div>
      <div className="card-description">
        {" "}
        <h1 className="card-title">
          Moisturizing Shampoo Juicy Fruits & Warm Woods
        </h1>
        <p className="price">$14.90</p>
        <p className="card-text">
          This shampoo gently cleanses your hair and scalp, giving freshness and
          moisture. This is ensured by selected ingredients such as natural aloe
          vera and ginkgo extract. The cleansing effect of the shampoo is based
          on environmental and skin-friendly surfactants. Apply the shampoo to
          damp hair and gently massage it into your scalp. Then rinse the
          shampoo thoroughly. Uniquely woody-warm fragrance with fruity
          component.
        </p>
        <p className="card-text">
          The shampoo is <span className="text-dec">COSMOS</span> certified, the
          seal for organic and natural cosmetics
        </p>
        <p className="card-text card-text-last">
          <span className="text-dec">COSMOS</span> requires and checks that a
          "green guide runs from start to finish and that all standards are
          adhered to. Each product is tested individually. If it fails in a
          single criterion, the corresponding product must not adorn itself with
          the COSMOS seal
        </p>
        <div className="btn-wrap">
          <div className="count-box">
            {" "}
            <Button variant="ghost" size="sm" disabled>
              <Minus size={12} />
            </Button>
            <p className="count">1</p>
            <Button variant="ghost" size="sm">
              <Plus size={12} />
            </Button>
          </div>

          <Button size="lg">IN THE SHOPPING CART</Button>
        </div>
      </div>
    </div>
  );
}

export default Card;
