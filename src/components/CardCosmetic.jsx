import { Flex, Text, Button, IconButton, TextField } from "@radix-ui/themes";

import { Heart, ShoppingBag, Minus, Plus, ShieldCheck } from "lucide-react";
import CardsRadio from "./CardsRadio";
import RadioShades from "./RadioShades";
import cosmetic from "../img/cosmetic.png";

function CardCosmetic() {
  return (
    <div className="card-cosm">
      <Flex className="card-cosm-wrap">
        <div className="img-wrap">
          <img
            className="image"
            src={cosmetic}
            alt="cosmetic set"
            style={{
              display: "block",
              objectFit: "contain",
              width: 430,
              minHeight: 500,
              borderRadius: 30,
              backgroundColor: "var(--gray-5)",
            }}
          />
          <div className="btn-pos">
            {" "}
            <IconButton radius="full" size="3" style={{ cursor: "pointer" }}>
              <Heart size={20} />
            </IconButton>
          </div>
        </div>

        <div className="card-description">
          <h1 className="card-cosm-title">
            New Curology V3 Face Wash, Body Wash & Hair Growth Gel
          </h1>
          <div className="flex">
            <p className="card-cosm-price">$45.00</p>
            <p className="card-cosm-old-price">%90.00</p>
            <p className="card-cosm-discount">(50% off)</p>
          </div>
          <p className="card-cosm-select">select size</p>

          <CardsRadio />

          <p className="card-cosm-select">availeble shades</p>
          <RadioShades />
          <div className="btn-wrap">
            <div className="card-cosm-count-box">
              {" "}
              <Button variant="ghost" size="sm" disabled>
                <Minus size={12} />
              </Button>
              <p className="count">00</p>
              <Button variant="ghost" size="2" style={{ cursor: "pointer" }}>
                <Plus size={12} />
              </Button>
            </div>{" "}
            <Button
              size="3"
              style={{ paddingLeft: 60, paddingRight: 60, cursor: "pointer" }}
            >
              <ShoppingBag size={14} />
              Add to Cart
            </Button>
          </div>
          <div className="input-wrap">
            <p className="input-desc">check pin code</p>

            <TextField.Root
              style={{
                width: 200,
                height: 40,
                borderRadius: 20,
                paddingLeft: 8,
                fontSize: 12,
              }}
              placeholder="Enter Pin Code"
            />
            <Button
              color="gray"
              variant="soft"
              style={{
                position: "absolute",
                left: 250,
                borderRadius: 20,
                fontSize: 12,
                cursor: "pointer",
              }}
            >
              CHECK
            </Button>
          </div>
          <p className="input-description">
            Please enter PIN Code to check delivery time
          </p>
          <div className="flex-box">
            {" "}
            <ShieldCheck size={16} />
            <Text as="p" size="2">
              100% Original Products{" "}
            </Text>
          </div>
        </div>
      </Flex>
    </div>
  );
}

export default CardCosmetic;
